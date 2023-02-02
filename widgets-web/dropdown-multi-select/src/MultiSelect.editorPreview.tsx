import { ReactElement, createElement } from "react";
import { ReactSelect } from "./components/ReactSelect";
import { MultiSelectPreviewProps } from "../typings/MultiSelectProps";

export function preview({ multi }: MultiSelectPreviewProps): ReactElement {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ];
    return <ReactSelect options={options} multi={multi} />;
}

export function getPreviewCss(): string {
    return require("./ui/MultiSelect.css");
}
