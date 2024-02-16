export interface ITalk {
  role: "user" | "system" | "assistant";
  content: string;
}

export interface IAnswered {
  choices: Array<{ message: ITalk }>;
}
