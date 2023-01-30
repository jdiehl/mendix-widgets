import { Component, ReactNode, createElement } from "react";
import LicensePlate from "./components/LicensePlate";

import { LicensePlateContainerProps } from "../typings/LicensePlateProps";

import "./ui/LicensePlate.css";

export default class LicensePlateWidget extends Component<LicensePlateContainerProps> {
    render(): ReactNode {
        const { country, license, height } = this.props;
        return <LicensePlate country={country.value} license={license.value} height={height} />;
    }
}
