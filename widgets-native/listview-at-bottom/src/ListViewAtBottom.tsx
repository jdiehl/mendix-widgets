import { ReactElement, createElement, useRef, useMemo } from "react";
import { ScrollView, ViewStyle } from "react-native";

import { mergeNativeStyles, Style } from "@mendix/pluggable-widgets-tools";

import { ListViewAtBottomProps } from "../typings/ListViewAtBottomProps";

const defaultStyle: CustomStyle = {
    container: {}
};

export interface CustomStyle extends Style {
    container: ViewStyle;
}

export function ListViewAtBottom({ style, data, widgets }: ListViewAtBottomProps<CustomStyle>): ReactElement | null {
    const ref = useRef(null);

    const children = useMemo(() => {
        return data.items ? data.items.map(item => widgets.get(item)) : [];
    }, [data, widgets]);

    const styles = useMemo(() => mergeNativeStyles(defaultStyle, style), [style]);

    const contentSizeChange = (): void => {
        if (!ref.current) {
            return;
        }
        const scrollView: ScrollView = ref.current;
        scrollView.scrollToEnd({ animated: true });
        console.info("scroll to end");
    };

    return (
        <ScrollView ref={ref} onContentSizeChange={contentSizeChange} style={styles.container}>
            {children}
        </ScrollView>
    );
}
