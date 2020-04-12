import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";

import { getWorldData } from "../csv/csv";

const Country = (props) => (
    <div className="container">
        <Header />
        <App {...props} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    const { country, state, county } = params;

    let data = await getWorldData();
    let placeName;

    data = data.filter((dataThing) => {
        if (dataThing.slug === country) {
            placeName = dataThing.name;
        }

        return dataThing.slug !== "world";
    });

    return {
        props: {
            data: data,
            placeName,
            currentSlug: country,
            placeType: "countries",
        },
    };
}

export default Country;
