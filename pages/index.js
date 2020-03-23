import Head from "next/head";

import App from "../components/App";

const Home = () => (
    <div className="container">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                href="https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap"
                rel="stylesheet"
            />
        </Head>

        <App />
    </div>
);

export default Home;
