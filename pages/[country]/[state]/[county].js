import App from "../../../components/App";
import Header from "../../../components/Head";
import Footer from "../../../components/Footer";

import { getCountyData } from "../../../csv/csv";

const County = (props) => (
    <div className="container">
        <Header title={props.placeName} />
        <App {...props} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    const { country, state, county } = params;

    let data = await getCountyData(state);
    let placeName;

    data.forEach((dataThing) => {
        if (dataThing.slug === county) {
            placeName = dataThing.name;
        }
    });

    return {
        props: {
            data: data,
            placeName,
            currentSlug: county,
            placeType: "counties",
        },
    };
}

export default County;
