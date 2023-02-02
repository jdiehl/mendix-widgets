/**
 * This file was generated from CustomRating.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type TypeEnum = "Happiness" | "StateOfMind";

export interface CustomRatingContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    rateAttribute: EditableValue<Big>;
    type: TypeEnum;
    onChange?: ActionValue;
}

export interface CustomRatingPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    rateAttribute: string;
    type: TypeEnum;
    onChange: {} | null;
}
