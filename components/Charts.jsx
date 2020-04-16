import React from "react";
import dynamic from "next/dynamic";
import ApexChart from "./ApexChart";

import _ from "lodash";

export default function Charts({ charts }) {
    return (
        <div className="row">
            {charts.map((props, i) => {
                return (
                    charts.length && (
                        <div className="col-2" key={i}>
                            <h2
                                style={{
                                    color: "white",
                                }}
                            >
                                {props.title}
                            </h2>
                            <ApexChart {...props} />
                        </div>
                    )
                );
            })}
        </div>
    );
}
