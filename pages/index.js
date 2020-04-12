import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";

import { getWorldData, getNewStateData, getCountyData } from "../csv/csv";

const Home = ({ data, placeName, placeType }) => (
    <div className="container">
        {/* {console.log("in here now", data, data2)} */}
        {/* {console.log(data, data2, data3)} */}
        <Header />
        <App data={data} placeName={placeName} placeType={placeType} />
        <Footer />
    </div>
);

export async function getServerSideProps({ params }) {
    let data = await getWorldData();
    // console.log(data[0]);

    // let data = await getNewStateData();
    // console.log(data2["missouri"]);

    // let data3 = await axios.get("http://localhost:3000/api/test");
    // let data = await data3.data;

    // data = JSON.stringify(data);

    // let data = await getCountyData();

    return {
        props: {
            data,
            placeName: "World",
            placeType: "countries",
        },
    };
}

export default Home;
