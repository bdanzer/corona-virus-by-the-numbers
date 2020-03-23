import React, { useState, useEffect } from "react";

import _ from "lodash";
import { getWorldData, getStateData } from "../csv/csv";
import mixedColors from "../csv/mixed-colors.json";

import ApexChart from "./ApexChart";
import Info from "./Info";
import References from "./References";
import Menu from "./Menu";

function App({ coronaData, selectedCountry, entireData }) {
    const [limit, setLimit] = useState(5000);
    const [dailyCases, setDailyCases] = useState([]);
    const [totalCases, setTotalCases] = useState([]);
    const [dailyDeaths, setDailyDeaths] = useState([]);
    const [totalDeaths, setTotalDeaths] = useState([]);
    const [globalData, setGlobalData] = useState();
    const [fullData, setFullData] = useState([]);
    const [dailyDeathRates, setDailyDeathRates] = useState([]);
    const [totalDeathRates, setTotalDeathRates] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [dailyStateData, setDailyStateData] = useState([]);

    const orderByHighest = data => {
        return _.orderBy(data, ["totalCases"], ["desc"]);
    };

    useEffect(() => {
        (async () => {
            let fullData;
            let globalData;

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

        let dailyCases = filteredData.map(countryData => ({
            name: countryData.country,
            // data: countryData.dataSet.map(data => data.total_cases)
            data: countryData.dataSet.map(data =>
                data.total_cases ? data.new_cases * 1 : 0
            )
        }));

        setDailyCases(dailyCases);

        let totalCases = filteredData.map(countryData => ({
            name: countryData.country,
            data: countryData.dataSet.map(data => data.total_cases * 1)
        }));

        setTotalCases(totalCases);

        let dailyDeaths = filteredData.map(countryData => ({
            name: countryData.country,
            data: countryData.dataSet.map(data =>
                data.new_deaths ? data.new_deaths * 1 : 0
            )
        }));

        setDailyDeaths(dailyDeaths);

        let totalDeaths = filteredData.map(countryData => ({
            name: countryData.country,
            data: countryData.dataSet.map(data =>
                data.new_deaths ? data.total_deaths * 1 : 0
            )
        }));

        setTotalDeaths(totalDeaths);

        // let dailyDeathRates = filteredData.map((cases, i) => ({
        //     name: cases.country,
        //     data: cases.dataSet.map(data => {
        //         let newDeath = data.new_deaths * 1;
        //         let totalCases = data.total_cases * 1;

        //         let rate =
        //             newDeath != 0 && totalCases != 0
        //                 ? (newDeath / totalCases) * 100
        //                 : 0;
        //         return rate.toFixed(2);
        //     })
        // }));

        // setDailyDeathRates(dailyDeathRates);

        let totalDeathRates = filteredData.map((cases, i) => ({
            name: cases.country,
            data: cases.dataSet.map(data => {
                let totalDeaths = data.total_deaths * 1;
                let totalCases = data.total_cases * 1;

                let rate =
                    totalDeaths != 0 && totalCases != 0
                        ? (totalDeaths / totalCases) * 100
                        : 0;
                return rate.toFixed(2);
            })
        }));

        setTotalDeathRates(totalDeathRates);
    }, [limit, globalData]);

    useEffect(() => {
        (async () => {
            let stateData = await getStateData();

            let orderedStateData = _.orderBy(
                stateData,
                ["total_cases"],
                ["desc"]
            );

            let filteredData = orderedStateData.filter((data, i) => i < 10);

            filteredData.unshift(selectedCountry);

            // console.log("selectedcountry", selectedCountry);

            let totalStateCases = filteredData.map(countryData => ({
                name: countryData.country,
                data: countryData.dataSet.map((data, i) => data.total_cases)
            }));

            setStateData(totalStateCases);

            let dailyStateCases = filteredData.map(countryData => ({
                name: countryData.country,
                data: countryData.dataSet.map((data, i) => data.new_cases)
            }));

            setDailyStateData(dailyStateCases);
        })();
    }, [selectedCountry]);

    const Charts = () => {
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
            {
                title: "Total Cases",
                series: totalCases,
                xaxis,
                options
            },
            {
                title: "New Daily Cases",
                series: dailyCases,
                xaxis,
                options
            },
            {
                title: "Total Deaths",
                series: totalDeaths,
                xaxis,
                options
            },
            {
                title: "New Daily Deaths",
                series: dailyDeaths,
                xaxis,
                options
            },
            // {
            //     title: "Daily Death Rates Percentage",
            //     series: dailyDeathRates,
            //     xaxis,
            //     yaxis: {
            //         max: 100
            //     }
            // },
            {
                title: "Total Death Rate Percentage",
                series: totalDeathRates,
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
            },
            {
                title: `${
                    selectedCountry ? selectedCountry.country : ""
                } vs Total Cases in US States`,
                series: stateData,
                xaxis: {
                    ...xaxis,
                    min: 45
                },
                options
            },
            {
                title: `${
                    selectedCountry ? selectedCountry.country : ""
                } vs Daily Cases in US States`,
                series: dailyStateData,
                xaxis: {
                    ...xaxis,
                    min: 45
                },
                options
            }
        ];

        return charts.map((item, i) => (
            <div>
                <h2
                    style={{
                        color: "white"
                    }}
                >
                    {item.title}
                </h2>
                <ApexChart key={i} {...item} />
            </div>
        ));
    };

    return (
        <>
            <Menu data={entireData ? entireData : fullData} />
            <div className="App">
                <Info
                    countryData={globalData}
                    limit={limit}
                    fullData={fullData}
                />
                <Charts />
                <References />
            </div>
        </>
    );
}

export default App;
