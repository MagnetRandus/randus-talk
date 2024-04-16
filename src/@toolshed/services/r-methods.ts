/* eslint-disable @typescript-eslint/no-namespace */
import { listNames } from "@interfaces/auto_listnames";
/**
 * to use auto_listnames please use randus-sp-listnames
 * Github:
 * https://github.com/MagnetRandus/randus-sp-listnames
 */

export type SelectFields<K> = Array<keyof K> | "*";

export class r_common {
  protected lstname: listNames;

  public get ListName(): listNames {
    if (typeof this.lstname === "undefined") throw new TypeError(`ListName is undefined`);
    return this.lstname;
  }

  public get URI(): string {
    return this.uri;
  }
  public set URI(v: string) {
    this.uri = v;
  }
  constructor(private uri: string) {}
}

export class r_itemFromList extends r_common {
  constructor(listName: listNames) {
    super(`/web/lists/getbytitle('${listName}')`);
    this.lstname = listName;
  }
  /**
   * Used to fetch all items and as the URI for Creating an Item in a list
   * @returns r_itemFromList
   */
  AllItems(): this {
    this.URI = `${this.URI}/Items?$top=5000`;
    return this;
  }
  ByFieldValue<T extends string | number, K>(fieldname: string, fieldvalue: T, select: SelectFields<K>, expand: string[] = [], orderby: string[] = []): this {
    this.URI = `${this.URI}/Items?$select=${typeof select !== "string" ? select.map(x => x) : select}&$filter=${fieldname} eq ${fieldvalue}`;

    this.URI += `&$expand=${expand.join(",")}&$orderby=${orderby.join(",")}`;

    console.log(`URI: \n\n\n${this.URI}\n\n\n`);
    return this;
  }
  ByRecentlyUploaded(): this {
    const select = ["Id", "FileRef", "Created", "FieldValuesAsText/FileLeafRef"] as Array<string>;

    const expand = ["FieldValuesAsText"];

    const today = new Date();

    today.setUTCHours(0, 0, 0, 0); //After 12pm for today

    const dsTodayStart = today.toISOString();

    const filter = [`Created ge '${dsTodayStart}'`];

    this.URI = `${this.URI}/Items?$select=${select.join(",")}&$expand=${expand.join(",")}&$filter=${filter.join(",")}`;

    return this;
  }
  ById(ItemId: number): this {
    this.URI = `${this.URI}/Items(${ItemId})`;
    return this;
  }
}

export class r_getfolderbyserverrelativeurl extends r_common {
  constructor(serverRelativeUrlToFolder: string) {
    super(`/web/getfolderbyserverrelativeurl('${serverRelativeUrlToFolder}')/files`);
  }
  add(filename: string, overwrite = true): this {
    this.URI = `${this.URI}/add(overwrite=${overwrite}, url='${filename}')`;
    return this;
  }
  getFiles(): this {
    return this;
  }
}

// namespace oLISTS {

//     export interface RootObject {
//         __metadata: Metadata;
//         FirstUniqueAncestorSecurableObject: FirstUniqueAncestorSecurableObject;
//         RoleAssignments: FirstUniqueAncestorSecurableObject;
//         Author: FirstUniqueAncestorSecurableObject;
//         ContentTypes: FirstUniqueAncestorSecurableObject;
//         CreatablesInfo: FirstUniqueAncestorSecurableObject;
//         DefaultView: FirstUniqueAncestorSecurableObject;
//         DescriptionResource: FirstUniqueAncestorSecurableObject;
//         EventReceivers: FirstUniqueAncestorSecurableObject;
//         Fields: FirstUniqueAncestorSecurableObject;
//         Forms: FirstUniqueAncestorSecurableObject;
//         InformationRightsManagementSettings: FirstUniqueAncestorSecurableObject;
//         Items: FirstUniqueAncestorSecurableObject;
//         ParentWeb: FirstUniqueAncestorSecurableObject;
//         RootFolder: FirstUniqueAncestorSecurableObject;
//         Subscriptions: FirstUniqueAncestorSecurableObject;
//         TitleResource: FirstUniqueAncestorSecurableObject;
//         UserCustomActions: FirstUniqueAncestorSecurableObject;
//         Views: FirstUniqueAncestorSecurableObject;
//         WorkflowAssociations: FirstUniqueAncestorSecurableObject;
//         AllowContentTypes: boolean;
//         BaseTemplate: number;
//         BaseType: number;
//         ContentTypesEnabled: boolean;
//         CrawlNonDefaultViews: boolean;
//         Created: string;
//         CurrentChangeToken: CurrentChangeToken;
//         DefaultContentApprovalWorkflowId: string;
//         DefaultItemOpenUseListSetting: boolean;
//         Description: string;
//         Direction: string;
//         DisableCommenting: boolean;
//         DisableGridEditing: boolean;
//         DocumentTemplateUrl?: string;
//         DraftVersionVisibility: number;
//         EnableAttachments: boolean;
//         EnableFolderCreation: boolean;
//         EnableMinorVersions: boolean;
//         EnableModeration: boolean;
//         EnableRequestSignOff: boolean;
//         EnableVersioning: boolean;
//         EntityTypeName: string;
//         ExemptFromBlockDownloadOfNonViewableFiles: boolean;
//         FileSavePostProcessingEnabled: boolean;
//         ForceCheckout: boolean;
//         HasExternalDataSource: boolean;
//         Hidden: boolean;
//         Id: string;
//         ImagePath: ImagePath;
//         ImageUrl: string;
//         DefaultSensitivityLabelForLibrary: string;
//         IrmEnabled: boolean;
//         IrmExpire: boolean;
//         IrmReject: boolean;
//         IsApplicationList: boolean;
//         IsCatalog: boolean;
//         IsPrivate: boolean;
//         ItemCount: number;
//         LastItemDeletedDate: string;
//         LastItemModifiedDate: string;
//         LastItemUserModifiedDate: string;
//         ListExperienceOptions: number;
//         ListItemEntityTypeFullName: string;
//         MajorVersionLimit: number;
//         MajorWithMinorVersionsLimit: number;
//         MultipleDataList: boolean;
//         NoCrawl: boolean;
//         ParentWebPath: ImagePath;
//         ParentWebUrl: string;
//         ParserDisabled: boolean;
//         ServerTemplateCanCreateFolders: boolean;
//         TemplateFeatureId: string;
//         Title: string;
//     }

//     interface ImagePath {
//         __metadata: Metadata2;
//         DecodedUrl: string;
//     }

//     interface CurrentChangeToken {
//         __metadata: Metadata2;
//         StringValue: string;
//     }

//     interface Metadata2 {
//         type: string;
//     }

//     interface FirstUniqueAncestorSecurableObject {
//         __deferred: Deferred;
//     }

//     interface Deferred {
//         uri: string;
//     }

//     interface Metadata {
//         id: string;
//         uri: string;
//         etag: string;
//         type: string;
//     }
// }

// interface Fields {
//     internalName: string
//     displayName: string;
//     TypeAsString: string;
// }

// interface infContentType {
//     Id: string;
//     Name: string;
//     fields: Fields[]
// }

// class spLstInfo {
//     displayFormUrl: string;
//     editFormUrl: string;
//     newFormUrl: string;
//     internalName: string
//     displayName: string;
//     contentTypes: Array<infContentType>;
// }

/**
 * This code is replace by the superior bit that took me 10 years to find :)
 * 
 * // export class rUri_listProperties extends r_common {
//     constructor(lstGuid: string) {
//         super();
//         const lstInfo = new spLstInfo();
//         lstInfo.contentTypes = new Array<infContentType>();

//         const select = [
//             'Id',
//             'Title',
//             'ContentTypes',
//             'ContentTypes/id',
//             'ContentTypes/Fields',
//             'ContentTypes/Name',
//             'Description',
//             'RootFolder',
//             'EntityTypeName',
//             'ListItemEntityTypeFullName',
//             'Forms',
//             'Forms/ServerRelativeUrl',
//             'Forms/FormType'
//         ] as Array<keyof oLISTS.RootObject>;

//         const expand = [
//             'Forms',
//             'RootFolder',
//             'ContentTypes',
//             'ContentTypes/Fields', //TODO:  Remember to narrow tihs down!
//             // 'FieldValuesAsHtml',
//         ];

//         const params = `${`$select=${select.join(',')}&$expand=${expand.join(',')}`}`;
//         this.URI = `web/lists(guid'${lstGuid}')?${params}`;
//     }

// }
 * 
 * 
 */
