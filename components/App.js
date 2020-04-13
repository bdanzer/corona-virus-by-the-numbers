import React, { useState, useEffect } from "react";

import _ from "lodash";
import mixedColors from "../csv/mixed-colors.json";

import Info from "./Info";
import References from "./References";
import Menu from "./Menu";
import Charts from "./Charts";

function App({ data, placeName, placeType, currentSlug }) {
    const [chartData, setChartData] = useState([]);
    const [filtered, setFiltered] = useState();

    const orderByHighest = (data) => {
        return _.orderBy(data, ["totalCases"], ["desc"]);
    };

    const filterCurrentSlug = (data, slug) => {
        let thingFiltered;

        let filtered = data.filter((dataThing) => {
            if (dataThing.slug === slug) {
                thingFiltered = dataThing;
            }

            return dataThing.slug !== slug;
        });

        return [filtered, thingFiltered];
    };

    const top10Highest = (data) => _.take(orderByHighest(data), 10);

    const getData = (data, key) =>
        data.map((countyData) => ({
            name: countyData.name,
            data: countyData.dataSet.map(
                (countyDataItem) => countyDataItem[key]
            ),
        }));

    const pieChart = (data, key) => data.map((countyData) => countyData[key]);
    const pieChartLabels = (data, key) =>
        data.map((countyData) => countyData[key]);

    useEffect(() => {
        const [filtered, thingFiltered] = filterCurrentSlug(data, currentSlug);
        setFiltered(thingFiltered);

        let top10 = top10Highest(filtered);

        top10.unshift(thingFiltered);

        // console.log("top10", top10);

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
        //     height: 350,
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
                    height: 350,
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
                    height: 350,
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
                    height: 350,
                },
            },
            {
                title: `${placeName} Total Death Percentage vs Other ${placeType}`,
                series: totalDeathPercentage,
                options,
                xaxis,
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
                    height: 350,
                },
            },
        ];

        setChartData(charts);
    }, [data]);

    return (
        <>
            <Menu />
            <div className="App">
                {filtered && <Info countryData={filtered} />}
                <Charts charts={chartData} />
                <References />
            </div>
        </>
    );
}

export default App;
