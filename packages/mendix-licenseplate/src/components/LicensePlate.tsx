import { Component, ReactNode, createElement } from "react";
import ReactLicensePlate from "react-license-plate";

function countryToPlateColor(country: string): string {
    switch (country) {
        case "NL":
            return "#FEA500";
        default:
            return "#fff";
    }
}

export interface LicensePlateProps {
    license?: string;
    country?: string;
    height: number;
}

export default class LicensePlate extends Component<LicensePlateProps> {
    render(): ReactNode {
        const { license, country, height } = this.props;

        if (!license || !country) {
            return null;
        }

        const plateColor = countryToPlateColor(country);

        return <ReactLicensePlate plateColor={plateColor} countryCode={country} plateId={license} height={height} />;
    }
}
