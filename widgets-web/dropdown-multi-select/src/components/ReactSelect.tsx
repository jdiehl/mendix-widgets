import { ReactElement, createElement, useMemo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export interface ReactSelectOption {
    label: string;
    value: string;
}

export interface ReactSelectProps {
    options: ReactSelectOption[];
    multi?: boolean;
    onChange?: (newValue: ReactSelectOption) => void;
}

export function ReactSelect({ options, multi, onChange }: ReactSelectProps): ReactElement {
    const animatedComponents = useMemo(() => makeAnimated(), []);
    return (
        <Select
            options={options}
            components={animatedComponents}
            closeMenuOnSelect={!multi}
            isMulti={!!multi}
            onChange={onChange}
        />
    );
}
