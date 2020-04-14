import "./App.css";

import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    EmailShareButton,
    PinterestShareButton,
    LinkedinShareButton,
} from "react-share";

import moment from "moment";
import commaNumber from "comma-number";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    // let url = "https://coronavirusbythenumbers.com" + pageProps.canonical;

    // let {
    //     name,
    //     date,
    //     slug,
    //     path,
    //     fullName,
    //     totalCases,
    //     totalDeaths,
    //     totalDeathPercentage,
    //     totalNewCases,
    //     totalNewDeaths,
    // } = pageProps.dataForPage;

    // const numberWithCommas = (x) => commaNumber(x);

    // date = moment(date).format("MMMM Do, YYYY");

    // let subject = `See the corona virus numbers for, ${name}`;
    // let description = `As of ${date}, ${fullName}, has ${numberWithCommas(
    //     totalCases
    // )} total cases, ${numberWithCommas(
    //     totalDeaths
    // )} total deaths, total death percentage of ${numberWithCommas(
    //     totalDeathPercentage
    // )}%, ${numberWithCommas(totalNewCases)} total new cases, ${numberWithCommas(
    //     totalNewDeaths
    // )} total new deaths.`;
    // let hashtags = [`coronavirusbythenumbers`, `${name}`, `coronaData${name}`];

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
