import React, { useState } from "react";
import Router from "next/router";

import axios from "axios";

export default function Menu() {
    const [inputVal, setInputVal] = useState("Search for a Country");
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
                    onClick={() => setInputVal("")}
                />
                {searchResults.length !== 0 && (
                    <div className="search-results">
                        {searchResults.map((result) => (
                            <li
                                onClick={() =>
                                    handleSearchItemClick(result.path)
                                }
                            >
                                {result.name}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
