import { Component, ReactNode, createElement } from "react";
import { DropdownPreviewProps } from "../typings/DropdownProps";

declare function require(name: string): string;

export class preview extends Component<DropdownPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/Dropdown.css");
}
