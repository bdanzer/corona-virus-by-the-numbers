import React, { useEffect, useState } from "react";

import _ from "lodash";
import slugify from "slugify";

import * as tools from "../../utils/tools";

import { getNewStateData } from "../../csv/csv";

import mixedColors from "../../csv/mixed-colors.json";

import Charts from "../../components/Charts";
import Header from "../../components/Head";

export default function State({ chartData }) {
    return (
        <>
            <div className="App">
                <Charts charts={chartData} />
                <Header title={"Test"} />
                {/* <App {...props} /> */}
                {/* <Footer /> */}
            </div>
        </>
    );
}

const getSlugged = slug => {
    return slug
        ? slugify(slug.replace(/\./g, ""), {
              lower: true
          })
        : "";
};

const unSlug = slug => {
    console.log("slug", slug);
    return slug ? _.capitalize(slug.replace(/-/g, " ")) : "";
};

const getThings = (name, selectedData, obj) => {
    return {
        name,
        data: _.map(selectedData, data => (data[obj] ? data[obj] * 1 : 0))
    };
};

export async function getServerSideProps({ params }) {
    const { state } = params;
    let unSluggedState = unSlug(state);
    let newStateData = await getNewStateData();

    let things = _.map(newStateData, (data, i) => {
        return getThings(data[0].state, data, "cases");
    });

    things = _.chain(things)
        .orderBy(order => _.last(order.data), ["desc"])
        .sortBy(item => {
            if (item.name === unSluggedState) {
                return 0;
            }
        })
        .chunk(10)
        .value();

    let things2 = _.map(newStateData, (data, i) => {
        return getThings(data[0].state, data, "newCases");
    });

    things2 = _.chain(things2)
        .orderBy(order => _.last(order.data), ["desc"])
        .sortBy(item => {
            if (item.name === unSluggedState) {
                return 0;
            }
        })
        .chunk(10)
        .value();

    let things3 = _.map(newStateData, (data, i) => {
        return getThings(data[0].state, data, "newDeaths");
    });

    things3 = _.chain(things3)
        .orderBy(order => _.last(order.data), ["desc"])
        .sortBy(item => {
            if (item.name === unSluggedState) {
                return 0;
            }
        })
        .chunk(10)
        .value();

    let xaxis = {
        type: "numeric",
        tickAmount: 5,
        title: {
            text: "Days"
        },
        min: 20
    };

    let options = {
        colors: mixedColors[0],
        chart: {
            foreColor: "#fff"
        }
    };

    let charts = [
        {
            title: `Total Cases for ${unSluggedState} vs top 9 states`,
            series: things[0],
            xaxis: {
                ...xaxis,
                min: 1
            },
            // yaxis: {
            //     labels: {
            //         formatter: val => tools.kFormatter(val)
            //     }
            // },
            options,
            props: {
                height: 400,
                width: "100%"
            }
        },
        {
            title: `Total Cases ${unSluggedState} vs top 9 states`,
            series: things[0].map(thing => _.last(thing.data)),
            options: {
                ...options,
                labels: things[0].map(thing => thing.name),
                stroke: {
                    show: false
                },
                responsive: [
                    {
                        breakpoint: 1085,
                        options: {
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ]
            },
            props: {
                type: "pie",
                height: 350
            }
        },
        {
            title: `Total New Cases for ${unSluggedState} vs top 9 states`,
            series: things2[0],
            xaxis: {
                ...xaxis,
                min: 1
            },
            // yaxis: {
            //     labels: {
            //         formatter: val => tools.kFormatter(val)
            //     }
            // },
            options,
            props: {
                height: 400,
                width: "100%"
            }
        },
        {
            title: `Total New Cases for ${unSluggedState} vs top 9 states`,
            series: things2[0].map(thing => _.last(thing.data)),
            options: {
                ...options,
                labels: things[0].map(thing => thing.name),
                stroke: {
                    show: false
                },
                responsive: [
                    {
                        breakpoint: 1085,
                        options: {
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ]
            },
            props: {
                type: "pie",
                height: 350
            }
        },
        {
            title: `Total New Deaths for ${unSluggedState} vs top 9 states`,
            series: things3[0],
            xaxis: {
                ...xaxis,
                min: 1
            },
            // yaxis: {
            //     labels: {
            //         formatter: val => tools.kFormatter(val)
            //     }
            // },
            options,
            props: {
                height: 400,
                width: "100%"
            }
        },
        {
            title: `Total New Deaths for ${unSluggedState} vs top 9 states`,
            series: things3[0].map(thing => _.last(thing.data)),
            options: {
                ...options,
                labels: things3[0].map(thing => thing.name),
                stroke: {
                    show: false
                },
                responsive: [
                    {
                        breakpoint: 1085,
                        options: {
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ]
            },
            props: {
                type: "pie",
                height: 350
            }
        }
    ];

    return {
        props: {
            chartData: charts
        } // will be passed to the page component as props
    };
}
