import { Component, ReactNode, createElement } from "react";
import { TimelineChartPreviewProps } from "../typings/TimelineChartProps";

declare function require(name: string): string;

export class preview extends Component<TimelineChartPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TimelineChart.css");
}
