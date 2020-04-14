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
export default function SocialStuff(props) {
    const { pageProps } = props;
    let url = "https://coronavirusbythenumbers.com" + pageProps.canonical;

    let {
        name,
        date,
        slug,
        path,
        fullName,
        totalCases,
        totalDeaths,
        totalDeathPercentage,
        totalNewCases,
        totalNewDeaths,
    } = pageProps.dataForPage;

    const numberWithCommas = (x) => commaNumber(x);

    date = moment(date).format("MMMM Do, YYYY");

    let subject = `See the corona virus numbers for, ${name}`;
    let description = `As of ${date}, ${fullName}, has ${numberWithCommas(
        totalCases
    )} total cases, ${numberWithCommas(
        totalDeaths
    )} total deaths, total death percentage of ${numberWithCommas(
        totalDeathPercentage
    )}%, ${numberWithCommas(totalNewCases)} total new cases, ${numberWithCommas(
        totalNewDeaths
    )} total new deaths.`;
    let hashtags = [`coronavirusbythenumbers`, `${name}`, `coronaData${name}`];
    let size = 46;

    return (
        <>
            {pageProps.dataForPage && (
                <div className="icons-wrap">
                    {/* {console.log("page Props", pageProps)} */}
                    <TwitterShareButton
                        url={url}
                        title={description}
                        hashtags={hashtags}
                        related={["covidnumbers"]}
                    >
                        <TwitterIcon size={size} />
                    </TwitterShareButton>
                    <FacebookShareButton
                        openShareDialogOnClick={true}
                        url={url}
                        quote={description}
                        hashtag={hashtags[0]}
                    >
                        <FacebookIcon size={size} />
                    </FacebookShareButton>
                    <EmailShareButton
                        url={url}
                        subject={subject}
                        body={description}
                    >
                        <EmailIcon size={size} />
                    </EmailShareButton>
                    <LinkedinShareButton
                        title={subject}
                        source={url}
                        summary={description}
                        url={url}
                    >
                        <LinkedinIcon size={size} />
                    </LinkedinShareButton>
                    <RedditShareButton url={url} title={subject}>
                        <RedditIcon size={size} />
                    </RedditShareButton>
                </div>
            )}
        </>
    );
}
