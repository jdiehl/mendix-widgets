import { ReactElement, createElement } from "react";
import { PieChart as PieChartWidget } from "react-minimal-pie-chart";

import { PieChartContainerProps } from "../typings/PieChartProps";

const Palette = ["#264ae5", "#3cb33d", "#eca51c", "#e33f4e"];
export function PieChart({ mxData, mxTitle, mxValue }: PieChartContainerProps): ReactElement | null {
    const data = mxData.items?.map((item, i) => ({
        title: mxTitle.get(item).value!,
        value: mxValue.get(item).value!.toNumber(),
        color: Palette[i % Palette.length]
    }));

    if (!data) {
        return null;
    }

    const legend = (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {data?.map((item, i) => (
                <div key={i} style={{ marginRight: 8 }}>
                    <span style={{ color: item.color }}>◼</span> {item.title}
                </div>
            ))}
        </div>
    );

    return (
        <div>
            {legend}
            <PieChartWidget
                style={{
                    fontSize: "8px"
                }}
                data={data}
                startAngle={270}
                radius={44}
                lineWidth={60}
                segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                segmentsShift={index => (index === 0 ? 6 : 1)}
                animate
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
                labelPosition={100 - 60 / 2}
                labelStyle={{
                    fill: "#fff",
                    opacity: 0.75,
                    pointerEvents: "none"
                }}
            />
        </div>
    );
}
