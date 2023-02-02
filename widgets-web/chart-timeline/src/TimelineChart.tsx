import { FunctionComponent, createElement } from "react";
import { LineChart } from "./components/PlotlyChart";

import { TimelineChartContainerProps } from "../typings/TimelineChartProps";

import "./ui/TimelineChart.css";

const TimelineChart: FunctionComponent<TimelineChartContainerProps> = ({ data, dataTime, dataValue, color }) => {
    if (!data?.items || !dataTime || !dataValue || !color?.value) {
        return <LineChart data={[]} color={"#000000"} />;
    }

    const plotData: any[] = data.items.map(item => {
        const x = dataTime.get(item).value;
        const y = dataValue.get(item).value?.toNumber();
        return { x, y };
    });

    return <LineChart data={plotData} color={color.value} />;
};

export default TimelineChart;
