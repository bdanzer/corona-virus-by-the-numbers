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
    let groupBy = _.groupBy(csv, (data) => data.location);
    let countryCoronaData = [];

    _.forEach(groupBy, (data, country) => {
        let changedDataSet = data.map((current) => {
            // console.log("before", current.total_cases, current.total_deaths);
            let slug = getSlugged(country);

            return {
                name: country,
                date: current.date,
                slug,
                fullName: country,
                path: `/${slug}`,
                location: current.location,
                totalCases: current.total_cases * 1,
                newCases: current.new_cases * 1,
                totalDeaths: current.total_deaths * 1,
                newDeaths: current.new_deaths * 1,
                totalDeathPercentage: getPercentage(
                    current.total_deaths * 1,
                    current.total_cases * 1
                ),
            };
        });

        let countryData = template(country, changedDataSet);
        countryCoronaData.push(countryData);
    });

    return countryCoronaData;
};

const getPercentage = (top, bottom) =>
    _.round((top / bottom) * 100, 2).toFixed(2) * 1;

const getSlugged = (slug) => {
    return slugify(slug.replace(/\./g, ""), {
        lower: true,
    });
};

export const getNewStateData = async () => {
    let res2 = await axios.get(
        "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv"
    );
    let data2 = await res2.data;
    let csv2 = await csv2json().fromString(data2);
    csv2 = _.sortBy(csv2, "state");

    let arr = [];

    _.chain(csv2)
        .map((item, i) => {
            let newCases = i != 0 ? item.cases * 1 - csv2[i - 1].cases * 1 : 0;
            newCases = Math.sign(newCases) == -1 ? 0 : newCases;

            let newDeaths =
                i != 0 ? item.deaths * 1 - csv2[i - 1].deaths * 1 : 0;
            newDeaths = Math.sign(newDeaths) == -1 ? 0 : newDeaths;

            let slug = getSlugged(item.state);

            return {
                date: item.date,
                name: item.state,
                slug,
                fullName: `${item.state}, United States`,
                path: `/united-states/${slug}`,
                totalCases: item.cases * 1,
                newCases,
                totalDeaths: item.deaths * 1,
                newDeaths,
                totalDeathPercentage: getPercentage(
                    item.deaths * 1,
                    item.cases * 1
                ),
            };
        })

        .groupBy("name")
        .forEach((data, state) => {
            arr.push(template(state, data));
        })
        .value();
    return arr;
};

const template = (name, data) => {
    let lastData = _.last(data);

    let totalCases = lastData.totalCases ? lastData.totalCases * 1 : 0;
    let totalDeaths = lastData.totalDeaths ? lastData.totalDeaths * 1 : 0;

    return {
        name: name,
        date: lastData.date,
        slug: getSlugged(name),
        path: lastData.path,
        fullName: lastData.fullName,
        totalCases,
        totalDeaths,
        totalDeathPercentage: getPercentage(totalDeaths, totalCases),
        totalNewCases: lastData.newCases,
        totalNewDeaths: lastData.newDeaths,
        count: data.length * 1,
        dataSet: data,
    };
};

const getNewData = (i, data, currentDataObj, part) => {
    let newData = i != 0 ? currentDataObj[part] * 1 - data[i - 1][part] * 1 : 0;
    return Math.sign(newData) == -1 ? 0 : newData;
};

export const getCountyData = async (state = "all") => {
    let res = await axios.get(
        "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
    );
    let data = await res.data;
    let csv = await csv2json().fromString(data);

    const handleGroupBy = (stateData) => {
        let slug = getSlugged(stateData.state.toLowerCase());

        if (slug === state) {
            return slug;
        }
    };

    let organize = [];

    if (state === "all") {
        let states = _.groupBy(csv, "state");
        _.forEach(states, (data, state) => {
            let counties = _.groupBy(data, "county");
            organizeCounties(counties);
        });
    } else {
        let states = _.groupBy(csv, handleGroupBy);
        let counties = _.groupBy(states[state], "county");
        organizeCounties(counties);
    }

    function organizeCounties(counties) {
        _.forEach(counties, (data, county) => {
            data = data.map((item, i) => {
                let newCases = getNewData(i, data, item, "cases");
                let newDeaths = getNewData(i, data, item, "deaths");

                let stateSlug = getSlugged(item.state);
                let countySlug = getSlugged(item.county);

                return {
                    date: item.date,
                    name: item.county,
                    state: item.state,
                    stateSlug,
                    countySlug,
                    path: `/united-states/${stateSlug}/${countySlug}`,
                    fullName: `${item.county}, ${item.state}, United States`,
                    totalCases: item.cases * 1,
                    newCases,
                    totalDeaths: item.deaths * 1,
                    newDeaths,
                    totalDeathPercentage: getPercentage(
                        item.deaths * 1,
                        item.cases * 1
                    ),
                    fips: item.fips,
                };
            });

            organize.push({
                ...template(county, data),
                dataSet: data,
            });
        });
    }

    return organize;
};
