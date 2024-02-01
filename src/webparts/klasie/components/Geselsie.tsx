import * as React from "react";

import styles from "./Klasie.module.scss"; // Replace with your actual styles import
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import Stuur from "./Navigate";

interface iProps {
  openai35: OpenAI;
}

const Klasie: React.FC<iProps> = ({ openai35: openai }) => {
  const [myAsk, setMyAsk] = React.useState<ChatCompletionMessageParam>();

  const [comms, setComms] = React.useState<string>(`Resting`);

  const [qVersation, setQVersation] = React.useState<
    Array<ChatCompletionMessageParam>
  >([
    {
      role: "system",
      content:
        "Your name is Klasie and you are a helpful assistant that speaks Afrikaans.",
    },
  ]);

  const engage = async (): Promise<void> => {
    if (!myAsk) return; // Safety check

    try {
      setComms("Asking");
      const response = await openai.chat.completions.create({
        messages: [...qVersation, myAsk], // Immutable update
        model: "gpt-3.5-turbo",
      });

      const reply = response.choices.map((h) => h.message);

      setComms("Answered");
      setQVersation((prevQVersation) => [
        ...prevQVersation,
        myAsk,
        { role: "assistant", content: reply[0].content },
      ]);
    } catch (error) {
      console.error("Error calling OpenAI's API:", error);
      setComms("Error");
    }
  };

  const refComms = React.useRef<HTMLDivElement>(null);
  const refVra = React.useRef<HTMLButtonElement>(null);
  const refAsk = React.useRef<HTMLInputElement>(null);

  // Inside Klasie component
  // The rest of the Klasie component remains unchanged until useEffect

  React.useEffect(() => {
    if (comms !== "Resting" && comms !== "Asking") {
      const timerId = setTimeout(() => {
        setComms("Resting");
      }, 4000);

      return () => clearTimeout(timerId);
    }
  }, [comms]); // This effect depends on the 'comms' state

  return (
    <div>
      <div className={styles.klasie}>
        <section>
          <h3>Kl@sie</h3>
          <div className={styles.QVersation}>
            <ul>
              {qVersation
                .filter((h) => h.role !== "system")
                .map((h, i) => (
                  <li key={i} className={`${styles[h.role]}`}>
                    {String(h.content)}
                  </li>
                ))}
            </ul>

            <section className={styles.Controls}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="PraatHier"
                        id="PraatHier"
                        placeholder="Praat hier"
                        ref={refAsk}
                        className={styles.PraatHier}
                        onKeyUp={(ev) => {
                          if (ev.key == "Enter") {
                            if (refVra.current) {
                              refVra.current.click();
                            }
                          }
                        }}
                        onChange={(ev) => {
                          setComms("Typing");
                          setMyAsk({
                            role: "user",
                            content: `${ev.target.value}`,
                          });
                        }}
                      />
                    </td>
                    <td>
                      <div>
                        <div ref={refComms} className={styles.Comms}>
                          {comms}
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        ref={refVra}
                        type="button"
                        onClick={() => {
                          engage();
                          if (refAsk.current) refAsk.current.value = "";
                        }}
                      >
                        Praat
                      </button>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <Stuur />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Klasie;
