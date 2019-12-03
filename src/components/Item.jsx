import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(20% - 8px);
  padding-bottom: 10%;
  height: 0;
  position: relative;
  margin-right: 10px;
  transition: 0.3s;
  & > div {
    text-shadow: 0px 0px 2px black;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
  }
  & > div > a {
    color: white;
  }
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const Item = props => {
  return (
    <Wrapper>
      <div><a href={props.where}>{props.title}</a></div>
      <img
        src={props.backdrop_path}
        alt=""
      />
    </Wrapper>
  );
};

export default Item;