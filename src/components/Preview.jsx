import * as React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    & > img {
        width: 100%;
    }
    & > div {
        position: absolute;
        top: 20%;
        left: 10%
    }
    & > div > img {
        width: 80%;
    }
    & > div > div {
        text-align: center;
        margin-left: 3px;
        border: none;
        color: white;
        opacity: 0.8;
        height: 30px;
        line-height: 30px;
        width: 200px;
        background-color: white;
        transition: 0.5s;
        display: inline-block;
    }
    & > div > div > a {
        color: black;
    }
    & > div > div:hover {
        background-color: black;
        color: black;
        width: 950px;
        height: 34px;
        line-height: 34px;
        & > a {
            color: white;
        }
    }
`;

const Preview = props => {
    return (
        <Wrapper>
            <img
                src="/backgroundImg.jpg"
                alt=""
            />
            <div>
                <img
                    src="/main.png"
                    alt=""
                />
                <p id={'good'}>
	                박제현의 추상점은 추상적과 상점을 결합한<br/>
                    단어로 특정 형태를 가지고 있지 않거나<br/>
                    이상한 물건들을 판매합니다.<br/>
                </p>
                <br/>
                <div><a target="_blank" href="https://sunrinwiki.layer7.kr/index.php/박제현">박제현은 누구인가?</a></div>
            </div>
        </Wrapper>
    )
}

export default Preview;