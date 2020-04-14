import React from "react";
import _ from "lodash";
import moment from "moment";
import commaNumbers from "comma-number";

export default function Info({ countryData }) {
    let lastData = moment(_.last(countryData.dataSet).date).format(
        "MMMM Do, YYYY"
    );

    let json = [
        {
            title: "Total Reports",
            data: commaNumbers(countryData.count),
        },
        {
            title: "Total Cases",
            data: commaNumbers(countryData.totalCases),
        },
        {
            title: `New Cases`,
            data: commaNumbers(countryData.totalNewCases),
        },
        {
            title: "Total Deaths",
            data: commaNumbers(countryData.totalDeaths),
        },
        {
            title: "New Deaths",
            data: commaNumbers(countryData.totalNewDeaths),
        },
        {
            title: "Total Death Percentage",
            data: `${countryData.totalDeathPercentage}%`,
        },
    ];

    return (
        <>
            <h1 className="main-title">
                {`${countryData.fullName} Corona Data for ${lastData}`}
            </h1>
            <div className="box info-box">
                <div className="new-row">
                    {json.map((data, i) => (
                        <div key={i} className="info-wrap col-md-2">
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
