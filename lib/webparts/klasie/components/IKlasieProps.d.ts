export interface IKlasieWebPartProps {
    GPTModel: "gpt-3.5-turbo";
    description: string;
}
export interface IKlasieProps extends IKlasieWebPartProps {
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
}
//# sourceMappingURL=IKlasieProps.d.ts.map