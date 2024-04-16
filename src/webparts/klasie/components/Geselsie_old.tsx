import * as React from "react";

import bridgedGap from "../api/talk";
import { ITalk } from "../interfaces/talk";
import styles from "./Klasie.module.scss"; // Replace with your actual styles import
import { IKlasieWebPartProps } from "./IKlasieProps";
import { cleanup } from "../tools/cleanup";
import { REST } from "@toolshed/services/r-route";

const GeselsieOld: React.FC<IKlasieWebPartProps> = ({ GPTModel }) => {
  const [myAsk, setMyAsk] = React.useState<ITalk>();

  const [comms, setComms] = React.useState<string>(`Resting`);

  const [qVersation, setQVersation] = React.useState<Array<ITalk>>([
    {
      role: "system",
      content: "Your name is Klasie and you are a helpful assistant that speaks Afrikaans.",
    },
  ]);

  const engage = async (asked: string): Promise<void> => {
    setMyAsk({
      role: "user",
      content: asked,
    });

    try {
      setComms("Asking");

      setQVersation(prevQVersation => [
        ...prevQVersation,
        // myAsk!,
        ...response,
      ]);
      const response = await bridgedGap([myAsk!], GPTModel, new REST({} as any), ""); //this will throw

      setComms("Answered");

      console.dir(qVersation);
    } catch (error) {
      console.error("Error calling OpenAI's API:", error);
      setComms("Error");
    }
  };

  const refComms = React.useRef<HTMLDivElement>(null);
  const refVra = React.useRef<HTMLButtonElement>(null);
  const refAsk = React.useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className={styles.main}>
        <section>
          <h3>Kl@sie</h3>
          <div>
            <ul>
              {qVersation
                .filter(h => h.role !== "system")
                .map((h, i) => (
                  <li key={i} className={`${styles[h.role]}`}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cleanup(String(h.content)),
                      }}
                    />
                  </li>
                ))}
            </ul>

            <section>
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
                        onKeyUp={ev => {
                          if (ev.key == "Enter") {
                            if (refVra.current) {
                              refVra.current.click();
                            }
                          }
                        }}
                        onChange={ev => {
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
                          setQVersation(prevQVersation => [...prevQVersation, myAsk!]);
                          engage(refAsk.current!.value);
                          console.dir(qVersation);
                          console.dir(myAsk);
                          console.log(`Value Typed: ${refAsk.current!.value}`);
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeselsieOld;
