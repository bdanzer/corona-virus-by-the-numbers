import Head from "next/head";

function Header(props) {
    const { title, children, canonical } = props;

    return (
        <Head>
            <title>
                {title
                    ? `${title} Corona Virus Data`
                    : "Global Corona Virus Data"}
            </title>
            <link rel="icon" type="image/svg+xml" href="/coronavirus.svg" />
            <link
                href="https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap"
                rel="stylesheet"
            />
            <meta
                name="description"
                content={`Compare ${title} coronavirus (Covid-19) numbers with other countries around the World.`}
            />
            <meta
                name="robots"
                content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <link rel="canonical" href={canonical} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content={
                    title
                        ? `${title} Corona Virus Data`
                        : "Global Corona Virus Data"
                }
            />
            <meta
                property="og:description"
                content={`${title} coronavirus numbers for (Covid-19). Coronavirus by the numbers has global, state and county data from around the World.`}
            />
            {children}
        </Head>
    );
}

export default Header;
