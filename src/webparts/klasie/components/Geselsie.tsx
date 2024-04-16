import * as React from "react";
import { useState, FormEvent, ChangeEvent } from "react";
import bridgedGap from "../api/talk";
import { ITalk } from "../interfaces/talk";
import { initConv } from "./IKlasieProps";
import styles from "./Klasie.module.scss"; // Replace with your actual styles import

const Geselsie: React.FC<initConv> = ({ cnv, cnvId, REST }) => {
  const [inputValue, setInputValue] = useState<string>("Ek wil graag 'n troeteldier hê, wat sal jy voorstel is 'n goeie een vir 'n beginner?");
  const [conversation, setConversation] = useState<Array<ITalk>>(cnv);

  const [comms, setComms] = React.useState<string>(`Resting`);

  const refLastAnswer = React.useRef<HTMLDivElement>(null);
  const refComms = React.useRef<HTMLDivElement>(null);
  const refAsk = React.useRef<HTMLTextAreaElement>(null);
  const refVra = React.useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComms("Asking");

    try {
      const q = {
        role: "user",
        content: inputValue,
      } as ITalk;

      const response = await bridgedGap([...conversation, q], "gpt-3.5-turbo", REST, cnvId);

      setConversation(response);
      setComms("Answered");
    } catch (err) {
      if (err instanceof Error) setComms(err.message);
    }
  };

  React.useEffect(() => {
    if (refLastAnswer.current) {
      refLastAnswer.current.innerHTML = conversation.slice(-1)[0].content;
    }
  }, [conversation]);

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <table className={styles.interface}>
        <thead>
          <tr>
            <td>Conversation Id:</td>
            <td>{cnvId}</td>
          </tr>
          <tr>
            <td>Comms</td>
            <td>
              <div ref={refComms} className={styles.Comms}>
                {comms}
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <h3>Gebruiker</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <textarea
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
                  handleInputChange(ev);
                }}
                value={inputValue}
              />
              <br />
              <br />
              <button type="submit" className={styles.Stuur}>
                Stuur vraag
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>Kunsmatige Intelligensie</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div lang="af" ref={refLastAnswer} contentEditable="true" suppressContentEditableWarning={true}>
                {refLastAnswer.current ? conversation.slice(-1)[0].content : "Nothing yet..."}
              </div>
              {/* <textarea
                ref={refLastAnswer}
                value={
                  refLastAnswer.current
                    ? conversation.slice(-1)[0].content
                    : `Nothing yet...`
                }
              /> */}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Geselsie;
