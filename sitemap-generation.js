const _ = require("lodash");
const jsonData = require("./cache/found.json");

const sitemapGenerator = (cache = false) => {
    let header = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

    let footer = `</urlset>`;

    _.groupBy(jsonData, "path");

    let url = "https://coronavirusbythenumbers.com";

    let xml = "";

    _.forEach(jsonData, (data, key) => {
        xml += `<url><loc>${url}${data.path}</loc>
        <lastmod>${data.date}</lastmod></url>`;
    });

    return header + xml + footer;
};

module.exports = sitemapGenerator;
