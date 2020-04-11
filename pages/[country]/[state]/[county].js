import React, { useEffect } from "react";
import { useRouter } from "next/router";

import _ from "lodash";

import { getCountyData } from "../../../csv/csv";

import slugify from "slugify";

export default function County(props) {
    const router = useRouter();
    const { state, county } = router.query;

    console.log(state, county);

    const getSlugged = slug => {
        return slugify(slug.replace(/\./g, ""), {
            lower: true
        });
    };

    useEffect(() => {
        (async () => {
            if (!state) {
                return;
            }

            let data = await getCountyData();

            let stateData = data[_.capitalize(state)];

            if (stateData) {
                let counties = _.groupBy(stateData, data => data["county"]);

                for (let city in counties) {
                    console.log(city);

                    if (county === getSlugged(city)) {
                        console.log(counties[city]);
                        break;
                    }
                }
            }

            // _.findKey(data, function(o) {
            //     console.log("things", o);
            // });
        })();
    }, [state]);

    return (
        <>
            {/* <Header title={simpleUnSlugify(country)} /> */}
            {/* <App {...props} /> */}
            {/* <Footer /> */}
        </>
    );
}
