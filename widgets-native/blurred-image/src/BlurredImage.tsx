import { ReactNode, createElement } from "react";
import { Image, ImageStyle, ImageURISource } from "react-native";

import { mergeNativeStyles, Style } from "@mendix/pluggable-widgets-tools";
// import { Image } from "mendix/components/native/Image";

import { BlurredImageProps } from "../typings/BlurredImageProps";

export interface CustomStyle extends Style {
    image: ImageStyle;
}

// just for testing
const defaultStyle: CustomStyle = {
    image: {
        resizeMode: "contain"
    }
};

export function BlurredImage({ image, blurRadius, width, height, style }: BlurredImageProps<CustomStyle>): ReactNode {
    // wait for the image to be available
    if (image?.status !== "available") {
        return null;
    }

    // extract image source
    const source: ImageURISource = { uri: (image.value as any).uri };
    if (source.uri && !source.uri.includes("://")) {
        source.uri = "file://" + source.uri;
    }

    // merge styles
    const styles = mergeNativeStyles(defaultStyle, style);

    styles.image.width = width;
    styles.image.height = height;

    // render the react native image
    return <Image source={source} style={styles.image} blurRadius={blurRadius} />;
}
