import { interactionInitiator } from "./sysConversations";

export interface ITalk {
  role: interactionInitiator;
  content: string;
}
