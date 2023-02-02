/**
 * This file was generated from ListViewAtBottom.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties } from "react";
import { ListValue, ListWidgetValue } from "mendix";

export interface ListViewAtBottomProps<Style> {
    name: string;
    style: Style[];
    data: ListValue;
    widgets: ListWidgetValue;
}

export interface ListViewAtBottomPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    data: {} | { type: string } | null;
    widgets: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
