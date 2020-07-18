import { getCountyData, getWorldData, getNewStateData } from "../../../csv/csv";
import _ from "lodash";

export default async (req, res) => {
    const world = await getWorldData();

    if (world.length === 0) {
        res.end(
            JSON.stringify({
                success: false,
            })
        );
    }

    res.end(JSON.stringify({ success: true, data: world }));
};
