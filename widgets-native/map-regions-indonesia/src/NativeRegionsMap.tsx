import { ReactElement, createElement } from "react";
import { ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { RegionsMap } from "./components/RegionsMap";
import { NativeRegionsMapProps } from "../typings/NativeRegionsMapProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
}

export function NativeRegionsMap({ postalCode, style }: NativeRegionsMapProps<CustomStyle>): ReactElement {
    const code = postalCode?.status === "available" ? postalCode.value : undefined;
    return <RegionsMap code={code} style={style} />;
}
