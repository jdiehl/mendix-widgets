import { ReactElement, createElement, useMemo } from "react";
import { ReactSelect, ReactSelectOption } from "./components/ReactSelect";

import { MultiSelectContainerProps } from "../typings/MultiSelectProps";

import "./ui/MultiSelect.css";

export function MultiSelect(props: MultiSelectContainerProps): ReactElement | null {
    const { attribute, multi, options, optionsLabel, optionsValue } = props;

    const selectOptions = useMemo(() => {
        if (options.status !== "available" || !options.items) {
            return [];
        }
        return options.items.map(item => ({
            value: optionsValue.get(item).value!,
            label: optionsLabel.get(item).value!
        }));
    }, [options, optionsValue, optionsLabel]);

    const onChange = useMemo(() => {
        return (newValue: ReactSelectOption) => {
            // todo: multi-select
            attribute.setValue(newValue.value);
        };
    }, [attribute]);

    return <ReactSelect options={selectOptions} multi={multi} onChange={onChange} />;
}
