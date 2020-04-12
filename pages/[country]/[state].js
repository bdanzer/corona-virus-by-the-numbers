import App from "../../components/App";
import Header from "../../components/Head";
import Footer from "../../components/Footer";

import { getNewStateData } from "../../csv/csv";

const State = (props) => (
    <div className="container">
        <Header />
        <App {...props} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    const { country, state } = params;

    let data = await getNewStateData();
    let placeName;

    data.forEach((dataThing) => {
        if (dataThing.slug === state) {
            placeName = dataThing.name;
        }
    });

    return {
        props: {
            data: data,
            placeName,
            currentSlug: state,
            placeType: "states",
        },
    };
}

export default State;
