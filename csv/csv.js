const csv2json = require("csvtojson");
const axios = require("axios");
const _ = require("lodash");

const slugify = require("slugify");

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

const getSlugged = slug => {
    return slugify(slug.replace(/\./g, ""), {
        lower: true
    });
};

export const getNewStateData = async () => {
    let res2 = await axios.get(
        "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv"
    );
    let data2 = await res2.data;

    let csv2 = await csv2json().fromString(data2);

    csv2 = _.sortBy(csv2, "state");

    let stuff = _.chain(csv2)
        .map((item, i) => {
            let newCases = i != 0 ? item.cases * 1 - csv2[i - 1].cases * 1 : 0;
            newCases = Math.sign(newCases) == -1 ? 0 : newCases;

            let newDeaths =
                i != 0 ? item.deaths * 1 - csv2[i - 1].deaths * 1 : 0;
            newDeaths = Math.sign(newDeaths) == -1 ? 0 : newDeaths;

            return {
                ...item,
                stateSlug: getSlugged(item.state),
                newCases,
                newDeaths
            };
        })

        .groupBy("stateSlug")
        .value();

    console.log(stuff);

    return stuff;
};

export const getStateData = async () => {
    let res2 = await axios.get(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    );
    let data2 = await res2.data;

    let csv2 = await csv2json().fromString(data2);
    let group2 = _.groupBy(csv2, data => data["Country/Region"]);

    let newThing = [];

    console.log(csv2);

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

export const getCountyData = async () => {
    // https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv
    let res = await axios.get(
        "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
    );
    let data = await res.data;

    let csv = await csv2json().fromString(data);

    let group2 = _.groupBy(csv, data => data["state"]);

    console.log(group2);
    return group2;
};
