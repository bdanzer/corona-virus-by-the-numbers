import App from "../../components/App";
import Header from "../../components/Head";
import Footer from "../../components/Footer";
import ErrorPage from "next/error";

import { getNewStateData } from "../../csv/csv";

const State = (props) => (
    <div className="container">
        {props.err ? (
            <ErrorPage
                statusCode={props.err.statusCode}
                title={`${props.slug} could not be found`}
            />
        ) : (
            <>
                <Header title={props.placeName} canonical={props.canonical} />
                <App {...props} />
                <Footer />
            </>
        )}
    </div>
);

export async function getServerSideProps({ params, res }) {
    const { country, state } = params;

    let data = await getNewStateData();
    let dataObj;

    data.forEach((dataThing) => {
        if (dataThing.slug === state) {
            dataObj = dataThing;
        }
    });

    if (!dataObj) {
        if (res) {
            res.statusCode = 404;
        }

        return {
            props: {
                slug: state,
                err: {
                    statusCode: 404,
                },
            },
        };
    }

    return {
        props: {
            data: data,
            placeName: dataObj.fullName,
            currentSlug: state,
            placeType: "states",
            canonical: dataObj.path,
            dataForPage: dataObj,
        },
    };
}

export default State;
