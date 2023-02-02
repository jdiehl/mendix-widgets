/**
 * This file was generated from Mapbox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface MapboxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    accessToken: string;
    incidences?: ListValue;
    rsAttr?: ListAttributeValue<string>;
    levelAttr?: ListAttributeValue<Big>;
    width: string;
    height: string;
}

export interface MapboxPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    accessToken: string;
    incidences: {} | { type: string } | null;
    rsAttr: string;
    levelAttr: string;
    width: string;
    height: string;
}
