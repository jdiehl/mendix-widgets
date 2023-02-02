import { ReactElement, createElement, Fragment } from "react";
import { Big } from "big.js";
import { NPSControls } from "./components/NPSControls";

import { NPSContainerProps } from "../typings/NPSProps";

import "./ui/NPS.css";
import { Alert } from "./components/Alert";

export function NPS({ npsAttribute, onChange }: NPSContainerProps): ReactElement | null {
    if (!npsAttribute || npsAttribute.status !== "available" || npsAttribute.value === undefined) {
        return null;
    }

    const update = (value: number): void => {
        npsAttribute.setValue(new Big(value));
        if (onChange?.canExecute && !onChange.isExecuting) {
            onChange.execute();
        }
    };

    return (
        <Fragment>
            <div className="nps-labels">
                <span>Disagree</span>
                <span>Agree</span>
            </div>
            <NPSControls value={npsAttribute.value.toNumber()} onChange={update} />
            <Alert>{npsAttribute.validation}</Alert>
        </Fragment>
    );
}
