import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import _ from "lodash";

export default function ApexChart({
    cats,
    series,
    xaxis = {},
    yaxis = {},
    options = {}
}) {
    let state = {
        options: {
            chart: {
                id: "basic-bar",
                height: 500
            },
            xaxis: {
                ...xaxis
            },
            yaxis: {
                ...yaxis
            },
            ...options
        },
        series: series
    };

    return (
        <div className="box">
            <Chart options={state.options} series={state.series} />
        </div>
    );
}
