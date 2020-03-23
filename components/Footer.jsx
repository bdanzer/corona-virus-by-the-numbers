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
            {/* <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-161446436-1"
            ></script>
            <script>
                window.dataLayer = window.dataLayer || []; function gtag()
                {dataLayer.push(arguments)}
                gtag('js', new Date()); gtag('config', 'UA-161446436-1');
            </script> */}
        </>
    );
}
