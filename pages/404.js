import ErrorPage from "next/error";

const State = (props) => (
    <div className="container">
        <ErrorPage statusCode={404} />
    </div>
);

export async function getStaticProps({ params, res }) {
    return {
        props: {
            placeName: "404",
            currentSlug: "404",
            placeType: "404",
            canonical: "/404",
            dataForPage: {},
        },
    };
}

export default State;
