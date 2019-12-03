import * as React from "react";
import styled from "styled-components";
import Item from "./Item";
import { removeComments } from "@babel/types";

const BtnSize = "45px";

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;
  width: calc(100% - (${BtnSize} + ${BtnSize}));
  overflow: visible;
  div.title {
    color: white;
    font-weight: bold;
  }
  div.container {
    /* width: 100%; */
    position: relative;
  }
  div.slider {
    transform: ${props => `translateX(-${(props.page - 1) * 100}%)`};
    transition: 0.3s;
    display: -webkit-box;
  }
  .title {
    text-shadow: 0px 0px 2px black;
  }
`;

const BtnLeft = styled.button`
  width: ${BtnSize};
  height: 100%;
  position: absolute;
  right: 100%;
  z-index: 5;
  opacity: 0;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const BtnRight = styled(BtnLeft)`
  left: 100%;
  right: none;
`;
const Recommand = props => {
  const [page, setPage] = React.useState(1);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const slider = React.useRef(undefined);

  React.useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, []);

  const onClickLeft = () => {
    setPage(page - 1);
    console.log(page * (sliderWidth + 10));
  };

  const onClickRight = () => {
    setPage(page + 1);
    console.log(sliderWidth, page * sliderWidth + 10);
  };

  

  return (
    <div>
      <Wrapper page={page}>
        <div className="title">추천상품</div>
        <div className="container">
          <BtnLeft onClick={onClickLeft}>{"<"}</BtnLeft>
          <BtnRight onClick={onClickRight}>></BtnRight>
          <div className="slider" ref={slider}>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Recommand;