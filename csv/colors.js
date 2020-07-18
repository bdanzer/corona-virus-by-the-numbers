const { createReadStream, writeFileSync } = require("fs");
const readline = require("readline");

async function processLineByLine() {
    const fileStream = createReadStream("./fullcolors.css", {
        encoding: "utf-8"
    });

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let colorsObj = {};
    let currentSeperator = null;

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
        let seperator = line.match(/(?<=\/\* ).*(?= \*)/g);
        let color = line.match(/#.*(?=;)/g);
        let colorType = line.match(/.*(?= {)/);

        // console.log(
        //     colorType ? colorType[0] : "no colortype",
        //     color ? color[0] : "no color"
        // );

        if (seperator) {
            currentSeperator = seperator[0].toLowerCase();
            colorsObj[currentSeperator] = [];
        }

        if (colorType && color) {
            colorsObj[currentSeperator].push(color[0]);
        }
    }

    writeFileSync("./colors.json", JSON.stringify(colorsObj, null, 4), {
        encoding: "utf-8"
    });

    let rainbow = [[], [], [], [], [], [], [], [], [], [], [], []];

    for (let key in colorsObj) {
        colorsObj[key].map((color, i) => {
            rainbow[i] ? rainbow[i].push(color) : "";
        });
    }

    writeFileSync("./mixed-colors.json", JSON.stringify(rainbow, null, 4), {
        encoding: "utf-8"
    });
}

processLineByLine();

// const getColors = () => {
//     let things = fs.readFileSync("./fullcolors.css", "utf-8");
//     console.log(things);
// };

// getColors();
