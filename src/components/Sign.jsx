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
        width: 200px;
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

const Sign = (props) => {
    return (
        <Wrapper>
            <Banner/>
            <div id={"good"}></div>
            *이 사이트의 모든 물건은 실제로 판매되지 않습니다. 그저 재미로만 봐주세요.
            <br/>
            <img src="https://imgur.com/tybsxrY.png"/>
            <br/>
            <div class={"infoContainer"}>이름: 박제현 싸인</div>
            <div class={"infoContainer"}>가격: <del>1000원</del> 500원</div>
            <br/>
            <div id={"holy"}>
                제품정보 : 이 제품은 박제현의 친필싸인입니다.<br/>
                나중에 소장가치가 높아질 수 있기에 구매를 추천드립니다.<br/>
                현재 50% 할인된 가격에 만나보실 수 있습니다.
            </div>
            <br/>
            <div id="purchase">구매하기</div>
        </Wrapper>
    )
}

export default Sign;