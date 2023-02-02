import { ReactElement, createElement } from "react";
import { CustomRatingPreviewProps } from "../typings/CustomRatingProps";
import { RatingControls } from "./components/RatingControls";

export function preview({ type }: CustomRatingPreviewProps): ReactElement {
    return <RatingControls type={type} value={0} />;
}

export function getPreviewCss(): string {
    return require("./ui/CustomRating.css");
}
