import { createElement, ReactElement } from "react";
import { RatingIcon } from "./RatingIcon";

interface RatingControlsProps {
    type: string;
    value: number;
    onChange?: (value: number) => void;
}

function maxLevel(type: string): number {
    switch (type) {
        case "Happiness":
            return 5;
        case "StateOfMind":
            return 4;
        default:
            throw new Error("Invalid type");
    }
}

export function RatingControls({ type, value, onChange }: RatingControlsProps): ReactElement | null {
    if (type !== "Happiness" && type !== "StateOfMind") {
        console.error(`Invalid type: ${type}`);
        return null;
    }

    const controls: ReactElement[] = [];
    for (let level = 1; level <= maxLevel(type); level++) {
        const onClick = (): void => {
            if (level !== value && onChange) {
                onChange(level);
            }
        };
        controls.push(
            <RatingIcon key={level} type={type} level={level} disabled={level !== value} onClick={onClick} />
        );
    }

    return <div className="custom-rating">{controls}</div>;
}
