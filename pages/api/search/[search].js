import { getCountyData, getWorldData, getNewStateData } from "../../../csv/csv";
import _ from "lodash";
const fs = require("fs");
import combine from "../../../cache/found.json";

const cacheAllData = async () => {
    let county = await getCountyData();
    let world = await getWorldData();
    let states = await getNewStateData();

    let combine = [...county, ...world, ...states];
    fs.writeFileSync("./cache/found.json", JSON.stringify(combine, null, 4));

    return combine;
};

export default async (req, res) => {
    const { search } = req.query;

    if (!search) {
        res.end(400);
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // let combine = await cacheAllData();

    const clean = (string) => string.replace(/(\.|,)/g, "");

    let found = combine.filter(
        (data) =>
            clean(data.name).toLowerCase().search(search.toLowerCase()) !== -1
    );

    if (found.length === 0) {
        res.end(
            JSON.stringify({
                success: false,
            })
        );
    }

    res.end(JSON.stringify({ success: true, data: found }));
};
