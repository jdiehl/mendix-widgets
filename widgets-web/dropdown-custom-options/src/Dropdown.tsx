import { Component, ReactNode, createElement, ChangeEvent } from "react";

import { DropdownContainerProps } from "../typings/DropdownProps";

import "./ui/Dropdown.css";

export default class Dropdown extends Component<DropdownContainerProps> {
    constructor(props: DropdownContainerProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    render(): ReactNode {
        const { objectValue, options, optionsKey, optionsName, showLabel, label } = this.props;
        if (!options.items) {
            return null;
        }
        const selectedKey = objectValue.value;
        const optionElements = options.items.map(item => {
            const key = optionsKey.get(item).value;
            const name = optionsName.get(item).value;
            const selected = key === selectedKey;
            return (
                <option key={key} value={key} selected={selected}>
                    {name}
                </option>
            );
        });
        return (
            <div className="mx-name-dropDown2 mx-dropdown form-group">
                {showLabel ? <label className="control-label col-sm-3">{label.value}</label> : null}
                <div className="col-sm-9">
                    <select className="form-control" onChange={this.onChange}>
                        <option />
                        {optionElements}
                    </select>
                </div>
            </div>
        );
    }
    onChange(event: ChangeEvent<HTMLSelectElement>): void {
        const { objectValue, onChange } = this.props;
        const value = event.target.value;
        objectValue.setValue(value);
        if (onChange?.canExecute) {
            onChange.execute();
        }
    }
}
