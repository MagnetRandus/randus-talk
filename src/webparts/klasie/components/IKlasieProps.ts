import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ITalk } from "../interfaces/talk";
import { REST } from "@toolshed/services/r-route";

export interface IKlasieWebPartProps {
  GPTModel: "gpt-3.5-turbo";
  description: string;
  initData?: ITalk[];
  context: WebPartContext;
}

export interface IKlasieProps extends IKlasieWebPartProps {
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}

export interface initConv {
  cnvId: string;
  cnv: Array<ITalk>;
  REST: REST<WebPartContext>;
}
