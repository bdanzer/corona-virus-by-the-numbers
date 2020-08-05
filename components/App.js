import React, { useState, useEffect } from "react";

import _ from "lodash";
import mixedColors from "../csv/mixed-colors.json";

import Info from "./Info";
import References from "./References";
import Menu from "./Menu";
import Charts from "./Charts";

function App({ data, placeName, placeType, currentSlug, dataForPage }) {
    const [chartData, setChartData] = useState([]);
    const [filtered, setFiltered] = useState();

    const orderByHighest = (data) => {
        return _.orderBy(data, ["totalCases"], ["desc"]);
    };

    const filterCurrentSlug = (data, slug) => {
        let filtered = data.filter((dataThing) => {
            return dataThing.slug !== slug || dataThing.slug !== "Unknown";
        });

        return [filtered, dataForPage];
    };

    const top10Highest = (data) => _.take(orderByHighest(data), 10);

    const getData = (data, key) =>
        data.map((countyData) => ({
            name: countyData.name,
            data: countyData.dataSet.map(
                (countyDataItem) => countyDataItem[key]
            ),
        }));

    const pieChart = (data, key) => {
        console.log(data);
        return data.map((countyData) => countyData[key]);
    };
    const pieChartLabels = (data, key) =>
        data.map((countyData) => countyData[key]);

    const start = async () => {
        const [filtered, thingFiltered] = filterCurrentSlug(data, currentSlug);
        setFiltered(thingFiltered);

        let top10 = top10Highest(filtered);

        top10.unshift(thingFiltered);

        console.log("top10", top10);

        let totalCases = getData(top10, "totalCases");
        let newCases = getData(top10, "newCases");
        let totalDeaths = getData(top10, "totalDeaths");
        let totalDeathPercentage = getData(top10, "totalDeathPercentage");

        // console.log("stuff", totalDeathPercentage, top10);

        let xaxis = {
            type: "numeric",
            tickAmount: 5,
            title: {
                text: "Days",
            },
            min: 1,
        };

        let options = {
            colors: mixedColors[0],
            stroke: {
                width: 2,
            },
            chart: {
                // foreColor: "#fff",
            },
            legend: {
                position: "bottom",
            },
        };

        let props = {
            height: 500,
        };

        // props: {
        //     type: "pie",
        //     height: 400,
        // },

        // responsive: [
        //     {
        //         breakpoint: 1085,
        //         options: {
        //             legend: {
        //                 position: "bottom",
        //             },
        //         },
        //     },
        // ],
        console.log("top10", pieChart(top10, "totalDeathPercentage"));

        let charts = [
            {
                title: `${placeName} total cases vs other ${placeType}`,
                series: totalCases,
                xaxis,
                options,
                props,
            },
            {
                title: "Total Cases Pie",
                series: pieChart(top10, "totalCases"),
                options: {
                    ...options,
                    labels: pieChartLabels(top10, "name"),
                    stroke: {
                        show: false,
                    },
                },
                props: {
                    type: "pie",
                    height: 400,
                },
            },
            {
                title: `${placeName} New Cases vs Other ${placeType}`,
                series: newCases,
                options,
                xaxis,
                props,
            },
            {
                title: "New Cases Pie",
                series: pieChart(top10, "totalNewCases"),
                options: {
                    ...options,
                    labels: pieChartLabels(top10, "name"),
                    stroke: {
                        show: false,
                    },
                },
                props: {
                    type: "pie",
                    height: 400,
                },
            },
            {
                title: `${placeName} Total Deaths vs Other ${placeType}`,
                series: totalDeaths,
                options,
                xaxis,
                props,
            },
            {
                title: "Total Deaths",
                series: pieChart(top10, "totalDeaths"),
                options: {
                    ...options,
                    labels: pieChartLabels(top10, "name"),
                    stroke: {
                        show: false,
                    },
                },
                props: {
                    type: "pie",
                    height: 400,
                },
            },
            {
                title: `${placeName} Total Death Percentage vs Other ${placeType}`,
                series: totalDeathPercentage,
                options,
                xaxis,
                yaxis: {
                    max: 20,
                },
                props,
            },
            {
                title: "Total Death Percentage",
                series: pieChart(top10, "totalDeathPercentage"),
                options: {
                    ...options,
                    labels: pieChartLabels(top10, "name"),
                    stroke: {
                        show: false,
                    },
                },
                props: {
                    type: "pie",
                    height: 400,
                },
            },
        ];

        setChartData(charts);
    };

    useEffect(() => {
        start();
    }, [data]);

    let chunk = _.chunk(orderByHighest(data), 10);

    return (
        <>
            <Menu />
            <div className="App">
                {filtered && <Info countryData={filtered} />}
                <Charts charts={chartData} />
                <References />
                <div class="box">
                    <h2>Related Data</h2>

                    {chunk[0].map((filter) => (
                        <a class="related-data" href={filter.path}>
                            {filter.fullName}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
