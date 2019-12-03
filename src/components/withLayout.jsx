import Banner from "./Banner";
import React from "react";

const  withLayout = Page => {
    return () => {
        return <>
        <Banner/>
            <Page/>
        </>
    };
};

export default withLayout;