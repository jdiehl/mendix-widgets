import { createElement, FunctionComponent } from "react";
const Plot = require("react-plotly.js").default;
import { Data, Layout, Config } from "plotly.js";

export interface LineChartProps {
    data: Array<{ x: Date; y: number }>;
    color: string;
}

export const LineChart: FunctionComponent<LineChartProps> = ({ data, color }) => {
    const plotData: Data[] = [
        {
            type: "scatter",
            mode: "lines",
            x: data.map(item => item.x),
            y: data.map(item => item.y),
            line: { color }
        }
    ];

    const layout: Partial<Layout> = {
        autosize: true
    };

    const config: Partial<Config> = {
        responsive: true
    };

    const style = {
        width: "100%",
        height: "100%"
    };

    return <Plot data={plotData} layout={layout} config={config} style={style} />;
};
