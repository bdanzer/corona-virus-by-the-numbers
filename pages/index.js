import Head from "next/head";

import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";

const Home = () => (
    <div className="container">
        <Header />
        <App />
        <Footer />
    </div>
);

export default Home;
