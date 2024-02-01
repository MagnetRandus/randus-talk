import * as React from "react";
import styles from "./Klasie.module.scss";
import type { IKlasieProps } from "./IKlasieProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class Klasie extends React.Component<IKlasieProps, {}> {
  public render(): React.ReactElement<IKlasieProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    isDarkTheme ? console.log("Dark") : console.log("Light");
    console.log(environmentMessage);
    return (
      <section
        className={`${styles.klasie} ${hasTeamsContext ? styles.teams : ""}`}
      >
        <div className={styles.welcome}>
          {/* <img
            alt=""
            src={
              isDarkTheme
                ? require("../assets/welcome-dark.png")
                : require("../assets/welcome-light.png")
            }
            className={styles.welcomeImage}
          /> */}
          <h2>Hi {escape(userDisplayName)}!</h2>

          <div>
            <strong>{escape(description)}</strong>
          </div>
        </div>
      </section>
    );
  }
}
