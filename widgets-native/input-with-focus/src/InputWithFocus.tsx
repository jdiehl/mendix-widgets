import { ReactElement, createElement, useEffect, useState, useRef } from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { InputWithFocusProps } from "../typings/InputWithFocusProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function InputWithFocus({}: InputWithFocusProps<CustomStyle>): ReactElement {
    const [text, onChangeText] = useState("");
    const ref = useRef<TextInput>(null);

    useEffect(() => {
        ref.current?.focus();
    }, [ref]);

    const onBlur = (): void => {
        ref.current?.focus();
    };

    return <TextInput ref={ref} onChangeText={onChangeText} value={text} onBlur={onBlur} />;
}
