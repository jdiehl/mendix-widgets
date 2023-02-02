import { createElement, FunctionComponent, useRef } from "react";

interface DoorProps {
    imageUrl: string;
    side: "left" | "right";
    onClick: () => void;
}

export const Door: FunctionComponent<DoorProps> = ({ imageUrl, side, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const className = `xmas-day-door ${side}`;
    return <div onClick={onClick} ref={ref} className={className} style={{ backgroundImage: `url('${imageUrl}')` }} />;
};
