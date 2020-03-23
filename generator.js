const sitemap = require("nextjs-sitemap-generator");

sitemap({
    baseUrl: "https://coronavirusbythenumbers.com",
    pagesDirectory:
        __dirname + "/.next/server/static/1gz6y5hqtMcbCen8Z3mqg/pages",
    targetDirectory: "testing/",
    ignoredExtensions: ["png", "jpg"]
});
