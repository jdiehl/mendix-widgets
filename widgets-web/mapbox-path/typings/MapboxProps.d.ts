/**
 * This file was generated from Mapbox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface MapboxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    mapboxToken: DynamicValue<string>;
    pointList?: ListValue;
    latitudeAttr?: ListAttributeValue<Big>;
    longitudeAttr?: ListAttributeValue<Big>;
    pathList?: ListValue;
    pathAttr?: ListAttributeValue<string>;
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
    mapboxToken: string;
    pointList: {} | { type: string } | null;
    latitudeAttr: string;
    longitudeAttr: string;
    pathList: {} | { type: string } | null;
    pathAttr: string;
    width: string;
    height: string;
}
