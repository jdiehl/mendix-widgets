/**
 * This file was generated from BlurredImage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, NativeImage } from "mendix";

export interface BlurredImageProps<Style> {
    name: string;
    style: Style[];
    image: DynamicValue<NativeImage>;
    width: number;
    height: number;
    blurRadius: number;
}

export interface BlurredImagePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    image: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    width: number | null;
    height: number | null;
    blurRadius: number | null;
}
