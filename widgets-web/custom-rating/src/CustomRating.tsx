import { ReactElement, createElement, Fragment } from "react";
import { Big } from "big.js";
import { RatingControls } from "./components/RatingControls";
import { Alert } from "./components/Alert";

import { CustomRatingContainerProps } from "../typings/CustomRatingProps";

import "./ui/CustomRating.css";

export function CustomRating({ type, rateAttribute, onChange }: CustomRatingContainerProps): ReactElement | null {
    if (!rateAttribute || rateAttribute.status !== "available" || rateAttribute.value === undefined) {
        return null;
    }

    const update = (value: number): void => {
        rateAttribute.setValue(new Big(value));
        if (onChange?.canExecute && !onChange.isExecuting) {
            onChange.execute();
        }
    };

    return (
        <Fragment>
            <RatingControls type={type} value={rateAttribute.value.toNumber()} onChange={update} />
            <Alert>{rateAttribute.validation}</Alert>
        </Fragment>
    );
}
