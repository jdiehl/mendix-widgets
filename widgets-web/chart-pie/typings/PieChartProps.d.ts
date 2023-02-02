/**
 * This file was generated from PieChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListExpressionValue } from "mendix";
import { Big } from "big.js";

export interface PieChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    mxData: ListValue;
    mxTitle: ListExpressionValue<string>;
    mxValue: ListExpressionValue<Big>;
}

export interface PieChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    mxData: {} | { type: string } | null;
    mxTitle: string;
    mxValue: string;
}
