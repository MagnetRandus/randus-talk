// import * as React from "react";
// import styles from "./Klasie.module.scss"; // Replace with your actual styles import
// import Stuur from "./Navigate";
// import { IAPIInf } from "./IKlasieProps";
// import { ITalk } from "./types/talk";
// import bridgedGap from "../api/talk";
// const Geselsie_old: React.FC<IAPIInf> = ({ GPTModel }) => {
//   const [myAsk, setMyAsk] = React.useState<ITalk>();
//   const [comms, setComms] = React.useState<string>(`Resting`);
//   const [qVersation] = React.useState<Array<ITalk>>([
//     {
//       role: "system",
//       content:
//         "Your name is Klasie and you are a helpful assistant that speaks Afrikaans.",
//     },
//   ]);
//   const engage = async (): Promise<void> => {
//     if (!myAsk) return; // Safety check
//     try {
//       setComms("Asking");
//       const response = await bridgedGap(myAsk);
//       const reply = response.data.choices.map((h) => h.message);
//       console.dir(reply);
//       setComms("Answered");
//       //   setQVersation((prevQVersation) => [
//       //     ...prevQVersation,
//       //     myAsk,
//       //     { role: "assistant", content: reply[0].content },
//       //   ]);
//     } catch (error) {
//       console.error("Error calling OpenAI's API:", error);
//       setComms("Error");
//     }
//   };
//   const refComms = React.useRef<HTMLDivElement>(null);
//   const refVra = React.useRef<HTMLButtonElement>(null);
//   const refAsk = React.useRef<HTMLInputElement>(null);
//   // Inside Klasie component
//   // The rest of the Klasie component remains unchanged until useEffect
//   React.useEffect(() => {
//     if (comms !== "Resting" && comms !== "Asking") {
//       const timerId = setTimeout(() => {
//         setComms("Resting");
//       }, 4000);
//       return () => clearTimeout(timerId);
//     }
//   }, [comms]); // This effect depends on the 'comms' state
//   return (
//     <div>
//       <div className={styles.klasie}>
//         <section>
//           <h3>Kl@sie</h3>
//           <div className={styles.QVersation}>
//             <ul>
//               {qVersation
//                 .filter((h) => h.role !== "system")
//                 .map((h, i) => (
//                   <li key={i} className={`${styles[h.role]}`}>
//                     {String(h.content)}
//                   </li>
//                 ))}
//             </ul>
//             <section className={styles.Controls}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <input
//                         type="text"
//                         name="PraatHier"
//                         id="PraatHier"
//                         placeholder="Praat hier"
//                         ref={refAsk}
//                         className={styles.PraatHier}
//                         onKeyUp={(ev) => {
//                           if (ev.key == "Enter") {
//                             if (refVra.current) {
//                               refVra.current.click();
//                             }
//                           }
//                         }}
//                         onChange={(ev) => {
//                           setComms("Typing");
//                           setMyAsk({
//                             role: "user",
//                             content: `${ev.target.value}`,
//                           });
//                         }}
//                       />
//                     </td>
//                     <td>
//                       <div>
//                         <div ref={refComms} className={styles.Comms}>
//                           {comms}
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <button
//                         ref={refVra}
//                         type="button"
//                         onClick={() => {
//                           engage();
//                           if (refAsk.current) refAsk.current.value = "";
//                         }}
//                       >
//                         Praat
//                       </button>
//                     </td>
//                     <td>&nbsp;</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </section>
//             <Stuur />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
// export default Geselsie_old;
//# sourceMappingURL=Geselsie_old.js.map