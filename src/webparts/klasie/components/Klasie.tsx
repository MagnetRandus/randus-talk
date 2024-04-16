import * as React from "react";
import styles from "./Klasie.module.scss";
import type { IKlasieProps } from "./IKlasieProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Geselsie from "./Geselsie";
import bridgedGap from "../api/talk";
import { ITalk } from "../interfaces/talk";
import generateGUID from "../tools/guid";
import { REST } from "@toolshed/services/r-route";
import { WebPartContext } from "@microsoft/sp-webpart-base";

interface IState {
  description: string;
  GPTModel: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  initData: ITalk[] | null; // use appropriate data type here
  cnvId: string;
  REST: REST<WebPartContext>;
}

export default class Klasie extends React.Component<IKlasieProps, IState> {
  constructor(props: IKlasieProps) {
    super(props);
    this.state = {
      ...props,
      initData: null,
      REST: new REST(this.props.context),
      cnvId: generateGUID(),
    };
    this.init = this.init.bind(this);
  }
  componentDidMount(): void {
    console.log("Component did mount");
    this.init();
  }
  async init() {
    try {
      const initConv: ITalk = {
        role: "system",
        content: `Jy is 'n afrikaansprekende- (nie "Hollands") hulpvaardige- assistent wat kinders help met hulle vra. Moenie enige nederlandse/hollandse woorde gebruik nie.`,
      };
      const v = await bridgedGap([initConv], "gpt-3.5-turbo", this.state.REST, this.state.cnvId);
      this.setState({
        initData: v,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }
  public render(): React.ReactElement<IKlasieProps> {
    const { description, GPTModel, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    isDarkTheme ? console.log("Dark") : console.log("Light");

    const { initData, cnvId, REST } = this.state;

    return (
      <div>
        {initData ? (
          <section className={`${styles.main} ${hasTeamsContext ? styles.teams : ""}`}>
            <div>
              <div className={styles.HideMe}>Hi {escape(userDisplayName)}!</div>
              <div className={styles.HideMe}>GPTModel:{escape(GPTModel)}--</div>
              <div className={styles.HideMe}>env:{escape(environmentMessage)}--</div>
              <div className={styles.HideMe}>
                <strong>{escape(description)}</strong>
              </div>
              <Geselsie cnv={initData} cnvId={cnvId} REST={REST} />
            </div>
          </section>
        ) : (
          <div>Still loading</div>
        )}
      </div>
    );
  }
}
