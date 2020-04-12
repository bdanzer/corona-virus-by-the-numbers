import React, { useEffect } from "react";

import { initGA, logPageView } from "../utils/google";

export default function Footer() {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }, []);

    return (
        <>
            <div>
                <a href="/sitemap.xml"></a>
            </div>
        </>
    );
}
