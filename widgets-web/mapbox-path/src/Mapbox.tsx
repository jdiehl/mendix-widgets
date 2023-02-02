import { createElement, FunctionComponent } from "react";
import { LatLngExpression } from "leaflet";
import { Map } from "./components/Map";

import { MapboxContainerProps } from "../typings/MapboxProps";

import "leaflet/dist/leaflet.css";

const Mapbox: FunctionComponent<MapboxContainerProps> = props => {
    const { width, height, mapboxToken, pointList, latitudeAttr, longitudeAttr, pathList, pathAttr } = props;

    // make sure mapbox token is set
    if (!mapboxToken.value) {
        return null;
    }

    const paths: LatLngExpression[][] = [];

    // load point list
    if (pointList && latitudeAttr && longitudeAttr) {
        if (pointList.status !== "available" || pointList.items === undefined) {
            return null;
        }
        paths.push(
            pointList.items.map(item => [
                latitudeAttr.get(item).value!.toNumber(),
                longitudeAttr.get(item).value!.toNumber()
            ])
        );
    }

    // load path list
    else if (pathList && pathAttr) {
        if (pathList.status !== "available" || pathList.items === undefined) {
            return null;
        }
        for (const item of pathList.items) {
            const path = pathAttr.get(item).value;
            if (path) {
                paths.push(JSON.parse(path));
            }
        }
    }

    // set up styles
    const style = { width, height };

    return <Map style={style} mapboxToken={mapboxToken.value} paths={paths} />;
};

export default Mapbox;
