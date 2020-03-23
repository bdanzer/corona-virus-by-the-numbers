const csv2json = require("csvtojson");
const axios = require("axios");
const _ = require("lodash");

export const getWorldData = async () => {
    let res = await axios.get(
        "https://covid.ourworldindata.org/data/ecdc/full_data.csv"
    );
    let data = await res.data;

    let csv = await csv2json().fromString(data);

    // let res3 = await axios.get(
    //     "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-20-2020.csv"
    // );
    // let data3 = await res3.data;

    // let csv3 = await csv2json().fromString(data3);
    // let grouped = _.groupBy(csv3, data => data["Country/Region"]);

    // let num = grouped.US.reduce((prev, current) => {
    //     return prev + current.Confirmed * 1;
    // }, 0);

    let groupBy = _.groupBy(csv, data => data.location);

    let countryCoronaData = [];

    _.forEach(groupBy, (data, country) => {
        let template = {
            country: country,
            dataSet: data,
            totalCases: _.last(data).total_cases * 1,
            count: data.length * 1
        };

        countryCoronaData.push(template);
    });

    return countryCoronaData;
};

export const getStateData = async () => {
    let res2 = await axios.get(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
    );
    let data2 = await res2.data;

    let csv2 = await csv2json().fromString(data2);
    let group2 = _.groupBy(csv2, data => data["Country/Region"]);

    let amount = 0;

    let newThing = [];

    group2.US.map(data => {
        if (data["Province/State"].indexOf(",") !== -1) return;

        let newObj = {
            country: data["Province/State"]
                ? data["Province/State"]
                : data["Country/Region"],
            dataSet: [],
            totalCases: 0
        };

        let lastCase;

        for (let key in data) {
            if (
                key !== "Province/State" &&
                key !== "Country/Region" &&
                key !== "Lat" &&
                key !== "Long"
            ) {
                let newCase =
                    typeof lastCase !== "undefined"
                        ? Math.abs(data[key] * 1 - lastCase)
                        : 0;
                lastCase = data[key] * 1;

                newObj.dataSet.push({
                    name: key,
                    total_cases: data[key] * 1,
                    new_cases: newCase
                });
            }
        }

        newObj.totalCases =
            newObj.dataSet[newObj.dataSet.length - 1].totalCases;

        newThing.push(newObj);
    });

    return newThing;
};
