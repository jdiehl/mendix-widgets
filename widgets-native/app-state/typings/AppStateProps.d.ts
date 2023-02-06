/**
 * This file was generated from AppState.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface AppStateProps<Style> {
    name: string;
    style: Style[];
    onActive?: ActionValue;
    onBackground?: ActionValue;
    onInactive?: ActionValue;
}

export interface AppStatePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    onActive: {} | null;
    onBackground: {} | null;
    onInactive: {} | null;
}
