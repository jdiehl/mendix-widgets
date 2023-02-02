/**
 * This file was generated from NativeRegionsMap.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface NativeRegionsMapProps<Style> {
    name: string;
    style: Style[];
    postalCode?: DynamicValue<string>;
}

export interface NativeRegionsMapPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    postalCode: string;
}
