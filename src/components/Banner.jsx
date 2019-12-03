import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 60px;
    display: flex;
    padding: 20px 58px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const Logo = styled.img`
    height: 100%;
    margin-right: 30px;
`;

const NavIcon = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
    left: 0;
    
`

const NavIconItem = styled.ul`
    width: fit-content;
    & > img {
        height: 100%;
        transition: 1s;
        z-index: 99999999;
    }
    & > img:hover {
        height: 2000%;
    }
`

const Banner = (props) => {
    return (
        <Wrapper>
            <Logo src="../ctw.png"/>
            <NavIcon>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
                <NavIconItem>
                    <img src="/icon.svg"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavIconItem>
            </NavIcon>
        </Wrapper>
    )
}

export default Banner;