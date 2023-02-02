/**
 * This file was generated from XmasDay.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export interface XmasDayContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    imageUrl: DynamicValue<string>;
    canOpen: DynamicValue<boolean>;
    content: ReactNode;
}

export interface XmasDayPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    imageUrl: string;
    canOpen: string;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
