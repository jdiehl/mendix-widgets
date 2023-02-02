export function contentStyle(state: "start" | "end", el: HTMLDivElement): any {
    if (state === "start") {
        const { clientWidth, clientHeight } = document.documentElement;
        const { left, top, width, height } = el.getBoundingClientRect();
        return {
            left,
            top,
            right: clientWidth - left - width,
            bottom: clientHeight - top - height,
            width: "auto",
            height: "auto",
            position: "fixed"
        };
    } else {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: "auto",
            height: "auto",
            position: "fixed",
            transition: "all 0.5s ease-in-out",
            zIndex: 100
        };
    }
}
