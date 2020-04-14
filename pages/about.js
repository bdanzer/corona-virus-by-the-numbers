import App from "../components/App";
import Header from "../components/Head";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import Link from "next/link";

const Home = (props) => (
    <div className="container">
        <Header title={props.title} canonical={props.canonical} />
        <Menu />
        <div className="about-wrap">
            <div className="post-info">
                <h1 className="about-title">{props.title}</h1>
                <span>Post Created: April 14th, 2020</span>
            </div>
            <div className="box">
                <p>
                    This site's goal is to try to provide quick visualizations
                    to help compare data for Countries, States, and Counties.
                </p>
                <p>
                    It's hard to find a single source that has visualizations
                    that are consistent for any country, state, or county. To
                    find data visualizations, it tends spread across many sites.
                </p>
                <p>
                    This site has over 3000 links that allow granular searching
                    for United States counties.
                </p>
                <p>
                    This site is managed by a single individual so features may
                    come slower. But it is set up in a way to add better
                    features, in the future. As an example, something I will be
                    looking at is, adding the equivalent of county data for the
                    US for countries in Europe.
                </p>
                <p>
                    Right now as of writing this post, the coronavirus is as
                    alive as ever. But hopefully in the future once this is all
                    past us, this site can serve as an archive/timeline of data.
                </p>
                <p>
                    It's fair to say that I am not a data scientist so if you
                    know of a way to make the data look even better then please
                    reach out to me on{" "}
                    <a href="https://twitter.com/covidnumbers">twitter</a>.
                </p>
                <p>
                    Also, as if it wasn't made clear enough by the media and by
                    your twitter feeds, facebook friends, or any social media
                    outlet. Be sure to <strong>wash your hands</strong> and
                    follow the directions given by your local/government
                    officials.
                </p>
                <p>
                    Here are a few quick links to explore data:
                    <ul>
                        <li>
                            <Link href="/united-states">
                                <a>United States</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/italy">
                                <a>Italy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/united-states/new-york">
                                <a>New York</a>
                            </Link>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

export async function getStaticProps({ params }) {
    return {
        props: {
            placeName: "About",
            canonical: "/about",
            title: "About Coronavirus By The Numbers",
        },
    };
}

export default Home;
