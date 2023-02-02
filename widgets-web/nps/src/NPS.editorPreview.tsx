import { ReactElement, createElement } from "react";
import { NPSControls } from "./components/NPSControls";

export function preview(): ReactElement {
    return <NPSControls value={0} />;
}

export function getPreviewCss(): string {
    return require("./ui/NPS.css");
}
