import React, { useState, useEffect } from "react";

import _ from "lodash";
import { getWorldData, getStateData } from "../csv/csv";
import mixedColors from "../csv/mixed-colors.json";

import ApexChart from "./ApexChart";
import Info from "./Info";
import References from "./References";
import Menu from "./Menu";
import Charts from "./Charts";

function App({ coronaData, selectedCountry, entireData }) {
    const [allCases, setAllCases] = useState([
        {
            name: null,
            data: {
                dailyCases: [],
                totalCases: [],
                totalDeaths: [],
                dailyDeaths: [],
                deathPercentage: []
            }
        }
    ]);
    const [globalData, setGlobalData] = useState();
    const [fullData, setFullData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [dailyStateData, setDailyStateData] = useState([]);
    const [currentSelectedCases, setCurrentSelectedCases] = useState([]);
    const [chartData, setChartData] = useState([]);

    const orderByHighest = data => {
        return _.orderBy(data, ["totalCases"], ["desc"]);
    };

    useEffect(() => {
        (async () => {
            let fullData;

            if (!coronaData) {
                fullData = await getWorldData();
                fullData = orderByHighest(fullData);
                fullData = fullData.filter((data, i) => i < 11);
            } else {
                fullData = coronaData;
            }

            if (selectedCountry) {
                selectedCountry = selectedCountry;
            } else {
                selectedCountry = fullData.find(
                    data => data.country === "World"
                );
            }

            setFullData(fullData);
            setGlobalData(selectedCountry);
        })();
    }, []);

    useEffect(() => {
        let filteredData = fullData;

        if (selectedCountry) {
            let selectedCases = {
                name: selectedCountry.country,
                data: selectedCountry.dataSet.map(data =>
                    data.total_cases ? data.new_cases * 1 : 0
                )
            };

            console.log("currentSelected", selectedCases);

            setCurrentSelectedCases(selectedCases);
        }

        let allCases = filteredData.map(countryData => {
            let template = {
                dailyCases: [],
                totalCases: [],
                totalDeaths: [],
                dailyDeaths: [],
                deathPercentage: []
            };

            countryData.dataSet.map(data => {
                template.dailyCases.push(
                    data.new_cases ? data.new_cases * 1 : 0
                );
                template.totalCases.push(data.total_cases * 1);
                template.dailyDeaths.push(
                    data.new_deaths ? data.new_deaths * 1 : 0
                );
                template.totalDeaths.push(data.total_deaths * 1);
                template.deathPercentage.push(getDeathPercentage(data));
            });

            return {
                name: countryData.country,
                data: template
            };
        });

        console.log("ALL", allCases);
        console.log(
            allCases.map(cases => ({
                name: cases.name,
                data: cases.data.totalCases
            }))
        );

        setAllCases(allCases);

        let xaxis = {
            type: "numeric",
            tickAmount: 5,
            title: {
                text: "Days"
            },
            min: 20
        };

        let options = {
            colors: mixedColors[0]
        };

        let charts = [
            // {
            //     title: `Total Cases for ${
            //         selectedCountry ? selectedCountry.country : ""
            //     }`,
            //     series: [currentSelectedCases],
            //     xaxis: {
            //         ...xaxis,
            //         min: 1
            //     },
            //     options
            // },
            {
                title: "Total Cases vs The World",
                series: getSeries("totalCases"),
                xaxis,
                options
            },
            {
                title: "New Daily Cases vs The World",
                series: getSeries("dailyCases"),
                xaxis,
                options
            },
            {
                title: "Total Deaths",
                series: getSeries("totalDeaths"),
                xaxis,
                options
            },
            {
                title: "New Daily Deaths",
                series: getSeries("dailyDeaths"),
                xaxis,
                options
            },
            {
                title: "Total Death Rate Percentage",
                series: getSeries("deathPercentage"),
                xaxis: {
                    ...xaxis,
                    min: 1
                },
                yaxis: {
                    max: 20,
                    title: {
                        text: "percent"
                    }
                },
                options
            }
            // {
            //     title: `${
            //         selectedCountry ? selectedCountry.country : ""
            //     } vs Total Cases in US States`,
            //     series: stateData,
            //     xaxis: {
            //         ...xaxis,
            //         min: 45
            //     },
            //     options
            // },
            // {
            //     title: `${
            //         selectedCountry ? selectedCountry.country : ""
            //     } vs Daily Cases in US States`,
            //     series: dailyStateData,
            //     xaxis: {
            //         ...xaxis,
            //         min: 45
            //     },
            //     options
            // }
        ];

        setChartData(charts);
        // setDailyCases(allCases);
        // setTotalCases(totalCases);
        // setDailyDeaths(dailyDeaths);
        // setTotalDeaths(totalDeaths);
        // setTotalDeathRates(totalDeathRates);
    }, [fullData, selectedCountry]);

    const getDeathPercentage = data => {
        let totalDeaths = data.total_deaths * 1;
        let totalCases = data.total_cases * 1;

        let rate =
            totalDeaths != 0 && totalCases != 0
                ? (totalDeaths / totalCases) * 100
                : 0;
        return rate.toFixed(2);
    };

    useEffect(() => {
        (async () => {
            // let stateDataFetch = await getStateData();
            // let orderedStateData = _.orderBy(
            //     stateDataFetch,
            //     ["total_cases"],
            //     ["desc"]
            // );
            // let filteredData = orderedStateData.filter((data, i) => i < 10);
            // if (selectedCountry) {
            //     filteredData.unshift(selectedCountry);
            // }
            // let totalStateCases = filteredData.map(countryData => ({
            //     name: countryData.country,
            //     data: countryData.dataSet.map((data, i) => data.total_cases)
            // }));
            // console.log("total state", totalStateCases);
            // setStateData(totalStateCases);
            // let dailyStateCases = filteredData.map(countryData => ({
            //     name: countryData.country,
            //     data: countryData.dataSet.map((data, i) => data.new_cases)
            // }));
            // setDailyStateData(dailyStateCases);
        })();
    }, [selectedCountry]);

    const getSeries = item => {
        return allCases.map(cases => ({
            name: cases.name,
            data: cases.data[item]
        }));
    };

    return (
        <>
            <Menu data={entireData ? entireData : fullData} />
            <div className="App">
                <Info countryData={globalData} fullData={fullData} />
                <Charts charts={chartData} />
                <References />
            </div>
        </>
    );
}

export default App;
