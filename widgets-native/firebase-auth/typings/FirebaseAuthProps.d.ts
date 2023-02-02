/**
 * This file was generated from FirebaseAuth.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type SigninTypeEnum = "apple" | "google";

export interface FirebaseAuthProps<Style> {
    name: string;
    style: Style[];
    signinType: SigninTypeEnum;
    uidAttr?: EditableValue<string>;
    nameAttr?: EditableValue<string>;
    emailAttr?: EditableValue<string>;
    photoUrlAttr?: EditableValue<string>;
    idTokenAttr: EditableValue<string>;
}

export interface FirebaseAuthPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    signinType: SigninTypeEnum;
    signInAction: {} | null;
    uidAttr: string;
    nameAttr: string;
    emailAttr: string;
    photoUrlAttr: string;
    idTokenAttr: string;
}
