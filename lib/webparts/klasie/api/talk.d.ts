import { ITalk } from "../interfaces/talk";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { REST } from "@toolshed/services/r-route";
declare function bridgedGap(conversation: ITalk[], model: string, r: REST<WebPartContext>, cnvId: string): Promise<ITalk[]>;
export default bridgedGap;
//# sourceMappingURL=talk.d.ts.map