import { getCountyData } from "../../csv/csv";
const fs = require("fs");
const path = require("path");

export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    let json = await getCountyData();
    fs.writeFileSync("./cache/test.json", JSON.stringify(json, null, 4));
    res.end(JSON.stringify(json));
};
