import { createElement, FunctionComponent } from "react";

import { MapboxContainerProps } from "../typings/MapboxProps";

declare function require(name: string): string;

export const preview: FunctionComponent<MapboxContainerProps> = () => {
    return <div />;
};

export function getPreviewCss(): string {
    return require("./styles/mapbox-gl.css");
}
