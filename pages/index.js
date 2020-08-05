import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";

import { getWorldData } from "../csv/csv";

const Home = (props) => (
    <div className="container">
        <Header title="World" canonical={props.canonical} />
        <App {...props} />
        <Footer />
    </div>
);

export async function getStaticProps({ params }) {
    let data = await getWorldData();

    let thing = data.reverse().find((worldData) => worldData.name === "World");

    return {
        props: {
            data,
            placeName: "World",
            currentSlug: "world",
            placeType: "countries",
            canonical: "/",
            dataForPage: thing,
            date: new Date().toString(),
        },
        revalidate: 1,
    };
}

export default Home;
