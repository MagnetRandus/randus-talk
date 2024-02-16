import axios, { AxiosResponse } from "axios";
import { ITalk } from "../components/types/talk";

// function talkagpt(
//   apikey = "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"
// ) {
//   // Create an axios instance for OpenAI API with the necessary headers
//   const openAiClient = axios.create({
//     baseURL: "https://api.openai.com", // Base URL for OpenAI API
//     headers: {
//       Authorization: `Bearer ${apikey}`,
//       "Content-Type": "application/json",
//     },
//   });

//   // Parameters for the API request
//   const requestParams = {
//     prompt: "How are you?",
//     model: "gpt-3.5-turbo", // Specify the model you're using, in this case, it's GPT-3.5-turbo
//     max_tokens: 10,
//     temperature: 0,
//   };

//   // Performing the POST request to the completions endpoint with the parameters
//   openAiClient
//     .post("/v1/completions", requestParams)
//     .then((response) => {
//       // Handling successful response - logging the response data
//       console.log(response.data);
//     })
//     .catch((error) => {
//       // Handling errors - logging the error message
//       console.error("Error:", error);
//     });
// }

async function bridgedGap(
  q: ITalk,
  model: string
): Promise<AxiosResponse<ITalk>> {
  const praatKlasie = axios.create({
    baseURL: "https://localhost", // Base URL for OpenAI API
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return praatKlasie.post(`/ask?model=${model}`, q);
}

export default bridgedGap;
