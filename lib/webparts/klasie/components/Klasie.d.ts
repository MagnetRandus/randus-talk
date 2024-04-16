import * as React from "react";
import type { IKlasieProps } from "./IKlasieProps";
import { ITalk } from "../interfaces/talk";
import { REST } from "@toolshed/services/r-route";
import { WebPartContext } from "@microsoft/sp-webpart-base";
interface IState {
    description: string;
    GPTModel: string;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
    initData: ITalk[] | null;
    cnvId: string;
    REST: REST<WebPartContext>;
}
export default class Klasie extends React.Component<IKlasieProps, IState> {
    constructor(props: IKlasieProps);
    componentDidMount(): void;
    init(): Promise<void>;
    render(): React.ReactElement<IKlasieProps>;
}
export {};
//# sourceMappingURL=Klasie.d.ts.map