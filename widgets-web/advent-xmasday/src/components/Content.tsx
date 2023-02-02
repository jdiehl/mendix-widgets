import { createElement, FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from "react";
import { contentStyle } from "../util/styleHelpers";

interface ContentProps {
    open: boolean;
}

export const Content: FunctionComponent<PropsWithChildren<ContentProps>> = ({ open, children }) => {
    const [style, setStyle] = useState<any>({});
    const [showContent, setShowContent] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        if (!open) {
            setStyle({});
            setShowContent(false);
            return;
        }
        setStyle(contentStyle("start", ref.current));
        const timers = [
            setTimeout(() => setStyle(contentStyle("end", ref.current!)), 500),
            setTimeout(() => setShowContent(true), 1000)
        ];
        return () => timers.forEach(timer => clearTimeout(timer));
    }, [open]);

    return (
        <div ref={ref} className="xmas-day-content" style={style}>
            {showContent ? children : null}
        </div>
    );
};
