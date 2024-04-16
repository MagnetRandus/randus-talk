export interface RootObject {
    __metadata: Metadata;
    Author: Author;
    CheckedOutByUser: Author;
    EffectiveInformationRightsManagementSettings: Author;
    InformationRightsManagementSettings: Author;
    ListItemAllFields: Author;
    LockedByUser: Author;
    ModifiedBy: Author;
    Properties: Author;
    VersionEvents: Author;
    Versions: Author;
    CheckInComment: string;
    CheckOutType: number;
    ContentTag: string;
    CustomizedPageStatus: number;
    ETag: string;
    Exists: boolean;
    IrmEnabled: boolean;
    Length: string;
    Level: number;
    LinkingUri: string;
    LinkingUrl: string;
    MajorVersion: number;
    MinorVersion: number;
    Name: string;
    ServerRelativeUrl: string;
    TimeCreated: string;
    TimeLastModified: string;
    Title: string;
    UIVersion: number;
    UIVersionLabel: string;
    UniqueId: string;
}

interface Author {
    __deferred: Deferred;
}

interface Deferred {
    uri: string;
}

interface Metadata {
    id: string;
    uri: string;
    type: string;
}