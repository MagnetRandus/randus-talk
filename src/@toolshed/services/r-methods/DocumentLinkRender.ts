/* eslint-disable no-useless-escape */
/* eslint-disable no-async-promise-executor */
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { FileProperties } from "./FileProperties.types";

export function OpenDocument(context: WebPartContext, Document_Relative_WebUrl: string, usrFilename: string, fProps: FileProperties): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    const ext = fProps.Name.match(/\.[^\.]+$/);

    if (ext) {
      const absoluteUrl = context.pageContext.web.absoluteUrl;

      const Document_Relative_WebUrl_Encoded = encodeURIComponent(Document_Relative_WebUrl);

      if (ext[0].toLowerCase().indexOf("xls") !== -1 || ext[0].toLowerCase().indexOf("doc") !== -1) {
        if (typeof fProps.LinkingUrl !== "undefined") {
          window.open(`${absoluteUrl}/_layouts/15/WopiFrame.aspx?sourcedoc={${fProps.UniqueId}}&file=${encodeURIComponent(fProps.Name)}&action=default&mobileredirect=true`, "_blank");
          resolve();
        } else {
          reject("Could not open document at url: " + absoluteUrl + Document_Relative_WebUrl_Encoded);
        }
      } else {
        if (ext[0].toLowerCase() !== ".zip" && ext[0].toLowerCase() !== ".msg") {
          window.open(Document_Relative_WebUrl, "_blank");
          resolve();
        } else {
          reject(`This type of file cannot be openend ${ext}`);
        }
      }
    } else {
      reject(`Could not locate an extension`);
    }

    // let sp_runtime = scripts.Get_ScriptLayouts('SP.Runtime.js');
  });
}
