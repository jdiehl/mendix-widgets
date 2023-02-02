import { LatLngExpression } from "leaflet";
import { createElement, ReactElement, CSSProperties, PropsWithChildren } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

interface MapProps {
    style: CSSProperties;
    mapboxToken: string;
    paths: LatLngExpression[][];
}

export function Map({ style, mapboxToken, paths }: PropsWithChildren<MapProps>): ReactElement {
    const tileUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`;
    const center: LatLngExpression = paths.length > 0 ? paths[0][0] : [0, 0];
    return (
        <MapContainer style={style} center={center} zoom={13}>
            <TileLayer attribution="Mapbox" url={tileUrl} />
            {paths?.map((path, i) => (
                <Polyline key={i} positions={path} />
            ))}
        </MapContainer>
    );
}
