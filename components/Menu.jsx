import React, { useState } from "react";
import Router from "next/router";

import axios from "axios";

export default function Menu() {
    const [inputVal, setInputVal] = useState("Search for Country/State/County");
    const [searchResults, setSearchResults] = useState([]);

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
        Router.push(`${slug}`);
    };

    return (
        <div className="menu" role="nav">
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
                                {console.log(result)}
                                {result.fullName}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
