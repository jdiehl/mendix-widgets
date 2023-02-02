/**
 * This file was generated from Dropdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListExpressionValue } from "mendix";

export interface DropdownContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    objectValue: EditableValue<string>;
    options: ListValue;
    optionsKey: ListExpressionValue<string>;
    optionsName: ListExpressionValue<string>;
    showLabel: boolean;
    label: DynamicValue<string>;
    onChange?: ActionValue;
}

export interface DropdownPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    objectValue: string;
    options: {} | { type: string } | null;
    optionsKey: string;
    optionsName: string;
    showLabel: boolean;
    label: string;
    onChange: {} | null;
}
