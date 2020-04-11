import React from "react";
import _ from "lodash";

export default function Info({ countryData, fullData }) {
    let lastData = countryData ? _.last(countryData.dataSet).date : "";

    return (
        <>
            <h1
                style={{
                    color: "white"
                }}
            >
                Corona Virus by the Numbers
            </h1>
            <div className="box">
                <p>Last Updated: {lastData}</p>
                <p>Paramaters of data</p>
                <li>
                    The data is filtered based on the top 10 most reported cases
                </li>
                <li>
                    All the data aligns with the first day of reporting with at
                    least 1 case for each country
                </li>
                <p>Stats for {countryData ? countryData.country : ""}</p>
                <ul>
                    <li>
                        <span className="highlight">
                            {countryData ? countryData.dataSet.length : 0}
                        </span>{" "}
                        days of reports
                    </li>
                    <li>
                        <span className="highlight">
                            {countryData ? countryData.totalCases : ""}
                        </span>
                        reported cases
                    </li>
                    <li>
                        <span className="highlight">
                            {countryData
                                ? _.last(countryData.dataSet).total_deaths
                                : 0}
                        </span>
                        total deaths
                    </li>
                </ul>
                <p>To filter data below click on dots or hover to single out</p>
                <p>
                    This data is updated every hour when made available by the
                    CDC, Johnhopkins, and WHO
                </p>
            </div>
        </>
    );
}
