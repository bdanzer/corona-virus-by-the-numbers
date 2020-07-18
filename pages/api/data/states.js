import { getCountyData, getWorldData, getNewStateData } from "../../../csv/csv";
import _ from "lodash";

export default async (req, res) => {
    const data = await getNewStateData();

    if (data.length === 0) {
        res.end(
            JSON.stringify({
                success: false,
            })
        );
    }

    res.end(JSON.stringify({ success: true, data }));
};
