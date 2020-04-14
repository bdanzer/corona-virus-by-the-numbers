import React from "react";
import dynamic from "next/dynamic";

dynamic(
    () => {
        import("eligrey-classlist-js-polyfill");
        import("promise-polyfill");
    },
    { ssr: false }
);

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import _ from "lodash";

export default function ApexChart({
    series,
    xaxis = {},
    yaxis = {},
    options = {},
    props,
}) {
    let state = {
        options: {
            chart: {
                id: "basic-bar",
                height: "500px",
            },
            xaxis: {
                ...xaxis,
            },
            yaxis: {
                ...yaxis,
            },
            ...options,
        },
        series: series,
    };

    return (
        <div className="box chart-wrap">
            <Chart
                options={state.options}
                series={state.series}
                type={state.options.type}
                {...props}
            />
        </div>
    );
}
