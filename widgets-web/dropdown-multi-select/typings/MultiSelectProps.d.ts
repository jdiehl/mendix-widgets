/**
 * This file was generated from MultiSelect.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListExpressionValue } from "mendix";

export interface MultiSelectContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    attribute: EditableValue<string>;
    options: ListValue;
    optionsValue: ListExpressionValue<string>;
    optionsLabel: ListExpressionValue<string>;
    multi: boolean;
}

export interface MultiSelectPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    attribute: string;
    options: {} | { type: string } | null;
    optionsValue: string;
    optionsLabel: string;
    multi: boolean;
}
