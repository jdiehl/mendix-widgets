import { Component, ReactNode, createElement } from "react";
import { XmasDayPreviewProps } from "../typings/XmasDayProps";

declare function require(name: string): string;

export class preview extends Component<XmasDayPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return "";
}
