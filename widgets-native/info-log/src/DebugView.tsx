import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { DebugViewProps } from "../typings/DebugViewProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function DebugView({ text }: DebugViewProps<CustomStyle>): null {
    if (text?.status === "available") {
        console.info(`Rendering DebugView "${text.value}"`);
    }
    return null;
}
