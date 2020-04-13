import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";

import { getWorldData } from "../csv/csv";

const Country = (props) => (
    <div className="container">
        <Header title={props.placeName} canonical={props.canonical} />
        <App {...props} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    const { country, state, county } = params;

    let data = await getWorldData();
    let dataObj;

    data = data.filter((dataThing) => {
        if (dataThing.slug === country) {
            dataObj = dataThing;
        }

        return dataThing.slug !== "world";
    });

    return {
        props: {
            data: data,
            placeName: dataObj.name,
            currentSlug: country,
            placeType: "countries",
            canonical: dataObj.path,
        },
    };
}

export default Country;
