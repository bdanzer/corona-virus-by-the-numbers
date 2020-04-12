import React from "react";
import _ from "lodash";
import moment from "moment";

export default function Info({ countryData }) {
    let lastData = moment(_.last(countryData.dataSet).date).format(
        "MMMM Do, YYYY"
    );

    let json = [
        {
            title: "Total Reports",
            data: countryData.count,
        },
        {
            title: "Total Cases",
            data: countryData.totalCases,
        },
        {
            title: `New Cases`,
            data: countryData.totalNewCases,
        },
        {
            title: "Total Deaths",
            data: countryData.totalDeaths,
        },
        {
            title: "New Deaths",
            data: countryData.totalNewDeaths,
        },
        {
            title: "Total Death Percentage",
            data: `${countryData.totalDeathPercentage}%`,
        },
    ];

    return (
        <>
            <h1 className="main-title">
                {`${countryData.name} Corona Data for ${lastData}`}
            </h1>
            <div className="box info-box">
                <div className="new-row">
                    {json.map((data) => (
                        <div className="info-wrap col-md-2">
                            <div className="info-title">{data.title}</div>
                            <div className="info-data">
                                <span className="highlight">{data.data}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
