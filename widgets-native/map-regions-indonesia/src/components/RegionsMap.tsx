import { ReactElement, createElement, useMemo } from "react";
import { Text, View } from "react-native";
import MapView, { Polygon, LatLng } from "react-native-maps";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../NativeRegionsMap";

import getRegion from "../assets/regions";

export interface HelloWorldProps {
    code?: string;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {
        minHeight: 500
    }
};

function makePolygons(code?: string): ReactElement[] | null {
    const region = getRegion(code);
    if (!region) {
        return null;
    }
    const out: ReactElement[] = [];
    let i = 0;
    for (const feature of region.features) {
        for (const polygons of feature.geometry.coordinates) {
            for (const points of polygons) {
                const coordinates = points.map(([longitude, latitude]): LatLng => ({ latitude, longitude }));
                out.push(
                    <Polygon
                        key={i++}
                        coordinates={coordinates}
                        strokeColor="rgb(13, 46, 209)"
                        fillColor="rgba(13, 46, 209, 0.3)"
                    />
                );
            }
        }
    }
    return out;
}

export function RegionsMap({ code, style }: HelloWorldProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);
    const geojson = useMemo(() => makePolygons(code), [code]);
    const initialRegion = { latitude: 2.6, longitude: 96.1, latitudeDelta: 1, longitudeDelta: 1 };

    return (
        <View style={styles.container}>
            <Text>{code}</Text>
            <MapView initialRegion={initialRegion} style={{ flex: 1, alignSelf: "stretch" }}>
                {geojson}
            </MapView>
        </View>
    );
}
