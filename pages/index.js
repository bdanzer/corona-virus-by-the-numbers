import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";

import { getWorldData } from "../csv/csv";

const Home = (props) => (
    <div className="container">
        <Header />
        <App {...props} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    let data = await getWorldData();

    return {
        props: {
            data,
            placeName: "World",
            currentSlug: "world",
            placeType: "countries",
        },
    };
}

export default Home;
