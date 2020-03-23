import React from "react";
import { useRouter } from "next/router";
import { getWorldData } from "../csv/csv";
import slugify from "slugify";
import _ from "lodash";

import App from "../components/App";

export default function Country(props) {
    const router = useRouter();
    const { country } = router.query;

    return <App {...props} />;
}

const slugs = countries => {
    return countries.map(countryData => ({
        params: {
            country: slugify(countryData.country, {
                lower: true
            })
        }
    }));
};

const simpleUnSlugify = slug => {
    return slug.replace(/-/g, " ");
};

const orderByHighestCases = data => {
    return _.orderBy(data, ["totalCases"], ["desc"]);
};

export async function getStaticProps({ params }) {
    let fullData = await getWorldData();
    // res.send(200);
    // try {
    //   // Do the await request here and have it throw an error if no product exists
    // } catch (error) {
    //   // You can 301 or 302 here to your custom error page
    //   res.writeHead(302, { Location: "/404" })
    //   res.end()
    // }

    let slug = params.country;
    let unSlugified = simpleUnSlugify(slug);

    let ordered = orderByHighestCases(fullData);

    let selectedCountry = fullData.find(
        data => data.country.toLowerCase() === unSlugified
    );

    let dataSelection = [];

    for (let i = 0; i < 7; i++) {
        if (ordered[i].country.toLowerCase() === unSlugified) {
            continue;
        }

        dataSelection.push(ordered[i]);
    }

    dataSelection.unshift(selectedCountry);

    return {
        props: {
            coronaData: dataSelection,
            selectedCountry,
            entireData: fullData
        }
    };
}

export async function getStaticPaths() {
    let fullData = await getWorldData();
    // let globalData = fullData.find(data => data.country === "World");

    // let ordered = orderByHighest(fullData);

    // let slug = "united-states";
    // let unSlugified = simpleUnSlugify(slug);

    // let usData = fullData.find(
    //     data => data.country.toLowerCase() === unSlugified
    // );

    return {
        paths: slugs(fullData),
        fallback: false
    };
}
