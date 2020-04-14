import "./App.css";

import SocialStuff from "../components/SocialStuff";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            {pageProps.dataForPage && <SocialStuff pageProps={pageProps} />}
        </>
    );
}
