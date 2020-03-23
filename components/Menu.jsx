import React, { useState } from "react";
import Router from "next/router";
import slugify from "slugify";

const createMenuSlug = text => {
    return slugify(text, {
        lower: true
    });
};

export default function Menu({ data }) {
    const [inputVal, setInputVal] = useState("Search for a Country");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = e => {
        setInputVal(e.target.value);
        if (e.target.value.length >= 3) {
            let search = data.filter(
                data =>
                    data.country
                        .toLowerCase()
                        .search(e.target.value.toLowerCase()) !== -1
            );
            setSearchResults(search);
        } else {
            setSearchResults([]);
        }
    };

    const handleSearchItemClick = result => {
        Router.push(`/${createMenuSlug(result.country)}`);
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
                        {searchResults.map(result => (
                            <li onClick={() => handleSearchItemClick(result)}>
                                {result.country}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
