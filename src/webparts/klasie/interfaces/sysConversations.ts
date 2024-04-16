export type interactionInitiator = "system" | "user" | "assistant";

export interface itmSysConversations {
  Title: string;
  conversationId: string;
  role: interactionInitiator;
  what: string;
}
