import { Component, ReactNode, createElement } from "react";
import LicensePlate from "./components/LicensePlate";
import { LicensePlatePreviewProps } from "../typings/LicensePlateProps";

declare function require(name: string): string;

export class preview extends Component<LicensePlatePreviewProps> {
    render(): ReactNode {
        const { country, license, height } = this.props;
        return <LicensePlate country={country} license={license} height={height ?? 150} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/LicensePlate.css");
}
