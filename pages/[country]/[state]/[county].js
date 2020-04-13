import App from "../../../components/App";
import Header from "../../../components/Head";
import Footer from "../../../components/Footer";

import { getCountyData } from "../../../csv/csv";

const County = (props) => (
    <div className="container">
        <Header title={props.placeName} canonical={props.canonical} />
        <App {...props} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    const { country, state, county } = params;

    let data = await getCountyData(state);
    let dataObj;

    data.forEach((dataThing) => {
        if (dataThing.slug === county) {
            dataObj = dataThing;
        }
    });

    return {
        props: {
            data: data,
            placeName: dataObj.name,
            currentSlug: county,
            placeType: "counties",
            canonical: dataObj.path,
        },
    };
}

export default County;
