import { createElement, FunctionComponent, useState } from "react";

import { XmasDayContainerProps } from "../typings/XmasDayProps";
import { Door } from "./components/Door";
import { Content } from "./components/Content";

import "./ui/XmasDay.scss";

const XmasDay: FunctionComponent<XmasDayContainerProps> = ({ canOpen, imageUrl, content }) => {
    const [open, setOpen] = useState(false);

    if (imageUrl?.value === undefined || canOpen?.value === undefined) {
        return null;
    }

    if (!canOpen.value) {
        return <div className="xmas-day locked" style={{ backgroundImage: `url('${imageUrl.value}')` }} />;
    }

    const className = `xmas-day ${open ? "opened" : "closed"}`;

    return (
        <div className={className}>
            <Content open={open}>
                <div className="xmas-day-close" onClick={() => setOpen(false)}>
                    Close
                </div>
                {content}
            </Content>
            <Door imageUrl={imageUrl.value} side="left" onClick={() => setOpen(true)} />
            <Door imageUrl={imageUrl.value} side="right" onClick={() => setOpen(true)} />
        </div>
    );
};

export default XmasDay;
