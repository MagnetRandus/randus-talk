import * as React from "react";
import styles from "./Klasie.module.scss";
import type { IKlasieProps } from "./IKlasieProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Geselsie from "./Geselsie";

export default class Klasie extends React.Component<IKlasieProps, {}> {
  public render(): React.ReactElement<IKlasieProps> {
    const {
      description,
      GPTModel,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    isDarkTheme ? console.log("Dark") : console.log("Light");

    console.log(environmentMessage);
    return (
      <section
        className={`${styles.main} ${hasTeamsContext ? styles.teams : ""}`}
      >
        <div>
          <h2>Hi {escape(userDisplayName)}!</h2>
          <div>GPTModel:{escape(GPTModel)}--</div>
          <div>env:{escape(environmentMessage)}--</div>
          <div>
            <strong>{escape(description)}</strong>
          </div>
          <Geselsie GPTModel="gpt-3.5-turbo" description={description} />
        </div>
      </section>
    );
  }
}
