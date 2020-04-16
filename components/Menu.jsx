import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";

import HamburgerMenu from "react-hamburger-menu";

import axios from "axios";

export default function Menu() {
    const [inputVal, setInputVal] = useState("Search for Country/State/County");
    const [searchResults, setSearchResults] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearch = async (e) => {
        setInputVal(e.target.value);
        if (e.target.value.length >= 3) {
            let res = await axios.get(
                `${window.location.origin}/api/search/${e.target.value}`
            );
            let dataRes = await res.data;

            const { success, data } = dataRes;

            if (success) {
                setSearchResults(data);
            } else {
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleSearchItemClick = (slug) => {
        console.log("click", slug);
        Router.push(`${slug}`);
    };

    const handleClick = () => setMenuOpen(!menuOpen);

    return (
        <div className="menu" role="nav">
            <div className="menu-wrap">
                <Link href="/">
                    <a>
                        <img className="logo" src="/coronavirus.svg" />
                    </a>
                </Link>
                <div className="menu-inner">
                    <input
                        value={inputVal}
                        onChange={handleSearch}
                        onClick={() => {
                            setInputVal("");
                            setSearchResults([]);
                        }}
                    />
                    {searchResults.length !== 0 && (
                        <div className="search-results">
                            {searchResults.map((result, i) => (
                                <li
                                    key={i}
                                    onClick={() =>
                                        handleSearchItemClick(result.path)
                                    }
                                >
                                    {result.fullName}
                                </li>
                            ))}
                        </div>
                    )}
                </div>
                <HamburgerMenu
                    height={30}
                    strokeWidth={2}
                    isOpen={menuOpen}
                    menuClicked={handleClick}
                />
                <div className={`content-stuff ${menuOpen ? "open" : ""}`}>
                    <div className="ham-wrapped-content">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.globalgiving.org/projects/coronavirus-relief-fund/">
                                <a target="_blank">Support Covid Victims</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="https://www.patreon.com/coronavirusbythenumbers">
                                <a target="_blank">Help Support Server Costs</a>
                            </Link>
                        </li> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
