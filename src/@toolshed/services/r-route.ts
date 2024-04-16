import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { r_common } from "./r-methods";
import { EntityTypeName } from "@toolshed/types/entitytypename";

export interface RESTResponse<K> {
  value: K[];
}

export class REST<D extends WebPartContext> {
  private routeUsed: string;
  requestHeaders: Headers;

  constructor(readonly context: D) {
    this.requestHeaders = new Headers();
  }
  private async GetEntityTypeName(ListName: string): Promise<unknown> {
    //guid'${ListName}' /web/lists/getbytitle('${listName}')`
    const r = new r_common(`web/lists/getbytitle('${ListName}')/listItemEntityTypeFullName`);
    return this.GET<unknown>(r);
  }
  async GET<T>(method: r_common): Promise<RESTResponse<T>> {
    this.requestHeaders.append(`Accept`, `application/json;odata=nometadata`);
    this.requestHeaders.append(`odata-version`, ``);

    const opts: ISPHttpClientOptions = {
      headers: this.requestHeaders,
    };

    this.routeUsed = `${this.context.pageContext.web.absoluteUrl}/_api/${method.URI}`;

    const sphtpr = await this.context.spHttpClient.get(this.routeUsed, SPHttpClient.configurations.v1, opts);

    return sphtpr.json();
  }
  async GETAdv<T>(method: string): Promise<RESTResponse<T>> {
    this.requestHeaders.append(`Accept`, `application/json;odata=nometadata`);
    this.requestHeaders.append(`odata-version`, ``);

    const opts: ISPHttpClientOptions = {
      headers: this.requestHeaders,
    };

    const sphtpr = await this.context.spHttpClient.get(method, SPHttpClient.configurations.v1, opts);

    return sphtpr.json();
  }

  async PostArrayBuffer<T extends ArrayBuffer>(method: r_common, payload: T): Promise<SPHttpClientResponse> {
    if (payload instanceof ArrayBuffer) {
      const file = new Blob([payload], { type: "application/octet-stream" });

      this.requestHeaders.append("Content-Type", file.type); // Set the appropriate content type for the Blob or File

      const requestOptions: ISPHttpClientOptions = {
        headers: this.requestHeaders,
        body: payload, // Set the Blob or File as the request body
      };

      this.routeUsed = `${this.context.pageContext.web.absoluteUrl}/_api${method.URI}`;

      return this.context.spHttpClient.post(this.routeUsed, SPHttpClient.configurations.v1, requestOptions);
    } else {
      throw new TypeError(`Can only handle ArrayBuffer for the moment!`);
    }

    // .then(
    //     (response: SPHttpClientResponse) => {
    //         if (response.ok) {
    //             // Request succeeded, handle the response here
    //         } else {
    //             // Request failed, handle errors here
    //         }
    //     }).catch((error) => {
    //         // Error occurred during the request
    //     });
  }

  public async CreateItem<T>(method: r_common, payload: T): Promise<T> {
    const entitytypename = (await this.GetEntityTypeName(method.ListName)) as EntityTypeName;

    console.log(`EntityTypeName: ${entitytypename.value}`);

    this.routeUsed = `${this.context.pageContext.web.absoluteUrl}/_api${method.URI}/Items`;
    console.log(`Route Used: ${this.routeUsed}`);

    const options: ISPHttpClientOptions = {
      headers: {
        Accept: `application/json;odata=nometadata`,
        "Content-Type": `application/json;odata=verbose`,
        "OData-Version": ``,
      },
      body: JSON.stringify({
        __metadata: { type: entitytypename.value },
        ...payload,
      }),
    };

    const response = await this.context.spHttpClient.post(this.routeUsed, SPHttpClient.configurations.v1, options);
    return await response.json();
  }
  public async UpdateItem<T>(method: r_common, payload: T): Promise<SPHttpClientResponse> {
    const entitytypename = (await this.GetEntityTypeName(method.ListName)) as EntityTypeName;

    this.routeUsed = `${this.context.pageContext.web.absoluteUrl}/_api/${method.URI}`;

    const body = JSON.stringify({
      __metadata: { type: entitytypename.value },
      ...payload,
    });

    const options: ISPHttpClientOptions = {
      headers: {
        Accept: `application/json;odata=verbose`,
        "Content-Type": `application/json;odata=verbose`,
        "OData-Version": `3.0`,
        "X-HTTP-Method": "MERGE",
        "If-Match": "*",
      },
      body: body,
    };

    return await this.context.spHttpClient.post(this.routeUsed, SPHttpClient.configurations.v1, options);
  }
}
