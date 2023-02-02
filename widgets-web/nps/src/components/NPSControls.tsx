import { createElement, ReactElement } from "react";

interface NPSControlsProps {
    value: number;
    onChange?: (value: number) => void;
}

export function NPSControls({ value, onChange }: NPSControlsProps): ReactElement {
    const controls: ReactElement[] = [];
    for (let i = 1; i <= 10; i++) {
        const active = i === value;
        const onClick = (): void => {
            if (!active && onChange) {
                onChange(i);
            }
        };
        controls.push(
            <div key={i} onClick={onClick} className={active ? "active" : ""}>
                {i}
            </div>
        );
    }

    return <div className="nps-rating">{controls}</div>;
}
