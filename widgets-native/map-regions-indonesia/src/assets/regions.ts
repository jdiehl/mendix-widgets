import { FeatureCollection, MultiPolygon } from "geojson";
const regions: any = {
    1101010: require("./1101010.json"),
    1101020: require("./1101020.json"),
    1101021: require("./1101021.json"),
    1101022: require("./1101022.json"),
    1101030: require("./1101030.json"),
    1101031: require("./1101031.json"),
    1101032: require("./1101032.json"),
    1101040: require("./1101040.json"),
    1101050: require("./1101050.json"),
    1101051: require("./1101051.json")
};

export default function getRegion(code?: string): FeatureCollection<MultiPolygon> | undefined {
    if (!code) {
        return undefined;
    }
    return regions[code];
}
