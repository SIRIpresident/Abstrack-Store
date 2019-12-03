import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { defaultCoreCipherList } from "constants";

const Wrapper = styled.div`
    text-align: center;
    height: 600px;
    #good {
        height: 70px;
    }
    & > img {
        width: 30%;
        margin-top: 10px;
    }
    .infoContainer {
        display: inline-block;
        background-color: white;
        margin-left: 10px;
        margin-top: 10px;
        height: 40px;
        width: 230px;
        line-height: 40px;
        border-radius: 10px;
    }
    #holy {
        display: inline-block;
        margin-top: 10px;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
    }
    #purchase {
        display: inline-block;
        background-color: green;
        padding: 15px;
        text-align: center;
        margin-top: 10px;
        color: white;
        border-radius: 10px;
    }
`;

const Hyeonsoo = (props) => {
    return (
        <Wrapper>
            <Banner/>
            <div id={"good"}></div>
            *이 사이트의 모든 물건은 실제로 판매되지 않습니다. 그저 재미로만 봐주세요.
            <br/>
            <img src="https://imgur.com/PaoQw41.png"/>
            <br/>
            <div class={"infoContainer"}>이름: SIRI 배너, 현수막 세트</div>
            <div class={"infoContainer"}>가격: <del>90000원</del> 45000원</div>
            <br/>
            <div id={"holy"}>
                제품정보 : 이 제품은 2019 선린 동아리축제 때<br/>
                실제로 사용 된 SIRI의 배너와 현수막입니다.<br/>
                디자인도 예쁘고 어디에 걸어놓기도 좋습니다.<br/>
                현재 50% 할인된 가격에 만나보실 수 있습니다.
            </div>
            <br/>
            <div id="purchase">구매하기</div>
        </Wrapper>
    )
}

export default Hyeonsoo;