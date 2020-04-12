import React from "react";

import sitemapGenerator from "../sitemap-generation";

const Sitemap = (props) => <>{console.log("props")}</>;

export async function getServerSideProps({ res }) {
    console.log("res", res);
    res.setHeader("Content-Type", "text/xml");
    let xml = sitemapGenerator();
    res.write(xml);
    res.end();
}

export default Sitemap;
