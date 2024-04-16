import axios, { AxiosResponse } from "axios";
import { ITalk } from "../interfaces/talk";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { REST } from "@toolshed/services/r-route";
import { r_itemFromList } from "@toolshed/services/r-methods";
import { itmSysConversations } from "@interfaces/sysConversations";
async function bridgedGap(conversation: ITalk[], model: string, r: REST<WebPartContext>, cnvId: string): Promise<ITalk[]> {
  let response: AxiosResponse<ITalk[]> | null;
  let errMessage: string;

  try {
    const praatKlasie = axios.create({
      baseURL: "https://klaas.arendt.co.za", // Base URL for OpenAI API
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-client-key": "klk414T#",
      },
    });

    console.log(`This is submitted!`);
    console.dir(conversation);
    console.dir(r);

    await r.CreateItem<itmSysConversations>(new r_itemFromList("sysConversations"), {
      Title: "asked",
      conversationId: cnvId,
      role: conversation[conversation.length - 1].role,
      what: conversation[conversation.length - 1].content,
    });

    console.log(`ASK ADDED`);

    response = await praatKlasie.post(`/submit-data?model=${model}`, conversation);

    if (response && response.data) {
      const answered = response.data;

      const replied = {
        Title: "answered",
        conversationId: cnvId,
        role: answered[answered.length - 1].role,
        what: answered[answered.length - 1].content,
      };

      console.dir(replied);

      await r.CreateItem<itmSysConversations>(new r_itemFromList("sysConversations"), replied);

      console.log(`REPLY ADDED`);
      console.log(`This is replied:`);
      console.dir(response?.data);
    } else {
      throw new Error("invalid response from server");
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      response = null;
      errMessage = error.message;
    }
  }
  return new Promise<ITalk[]>((resolve, reject) => {
    if (response) resolve(response.data);
    else reject(errMessage);
  });
}

export default bridgedGap;
