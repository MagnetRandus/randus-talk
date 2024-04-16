const list_names = ["sysSettings", "Access Requests", "wte", "Shared Documents", "argief", "fotoveilig", "fotografie", "sysConversations"] as const;
export type listNames = (typeof list_names)[number];
