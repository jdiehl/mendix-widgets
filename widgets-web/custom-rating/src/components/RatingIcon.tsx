import { createElement, useMemo, ReactElement } from "react";

const ICON: any = {
    Happiness: {
        enabled: {
            1: require("../icons/Happiness_1.svg"),
            2: require("../icons/Happiness_2.svg"),
            3: require("../icons/Happiness_3.svg"),
            4: require("../icons/Happiness_4.svg"),
            5: require("../icons/Happiness_5.svg")
        },
        disabled: {
            1: require("../icons/Happiness_1_disabled.svg"),
            2: require("../icons/Happiness_2_disabled.svg"),
            3: require("../icons/Happiness_3_disabled.svg"),
            4: require("../icons/Happiness_4_disabled.svg"),
            5: require("../icons/Happiness_5_disabled.svg")
        }
    },
    StateOfMind: {
        enabled: {
            1: require("../icons/StateOfMind_1.svg"),
            2: require("../icons/StateOfMind_2.svg"),
            3: require("../icons/StateOfMind_3.svg"),
            4: require("../icons/StateOfMind_4.svg")
        },
        disabled: {
            1: require("../icons/StateOfMind_1_disabled.svg"),
            2: require("../icons/StateOfMind_2_disabled.svg"),
            3: require("../icons/StateOfMind_3_disabled.svg"),
            4: require("../icons/StateOfMind_4_disabled.svg")
        }
    }
};

function getIconData(type: string, level: number, disabled: boolean): string {
    const data = ICON[type][disabled ? "disabled" : "enabled"][level];
    return data || "";
}

interface RatingIconProps {
    type: string;
    level: number;
    disabled: boolean;
    onClick?: () => void;
}

export function RatingIcon({ type, level, disabled, onClick }: RatingIconProps): ReactElement {
    const data = useMemo(() => getIconData(type, level, disabled), [type, level, disabled]);
    return <img width={72} height={72} src={data} onClick={onClick} />;
}
