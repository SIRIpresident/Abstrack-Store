import React from "react";
import Preview from "../components/Preview";
import ItemContainer from "../components/ItemContainer"
import SaleContainer from "../components/SaleContainer"
import Recommand from "../components/Recommand";
import withLayout from "../components/withLayout";

class Main extends React.Component {
    render() {
        return (
            <div style={{marginTop: "60%", overflowX: "hidden"}}>
                <Preview/>
                <br/>
                <div>
                    <ItemContainer
                        title="전체 상품"
                    />
                    <br/>
                    <SaleContainer
                        title="세일상품"
                    />
                    <br/>
                    <Recommand
                        title="추천"
                    />
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default withLayout(Main);