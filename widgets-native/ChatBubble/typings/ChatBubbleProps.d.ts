/**
 * This file was generated from ChatBubble.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface ChatBubbleProps<Style> {
    name: string;
    style: Style[];
    remote: DynamicValue<boolean>;
    text: DynamicValue<string>;
}

export interface ChatBubblePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    remote: string;
    text: string;
}
