import * as React from "react";
import styled from "styled-components";
import Item from "./Item";

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
const SaleContainer = props => {
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
        <div className="title">세일중인 상품</div>
        <div className="container">
          <BtnLeft onClick={onClickLeft}>{"<"}</BtnLeft>
          <BtnRight onClick={onClickRight}>></BtnRight>
          <div className="slider" ref={slider}>
          {/* {(props.movies || []).map((value, idx) => {
            return <MovieItem title={value.title} backdrop_path={value.backdrop_path}/>
          })} */}
          <Item where={"/ipbuseo"} title={"시리 입부서"} backdrop_path={"https://imgur.com/PcTfKIO.png"}></Item>
          <Item where={"/hweone"} title={"시리 명예 회원증"} backdrop_path={"https://imgur.com/CGR6xpn.png"}></Item>
          <Item where={"/hyeonsoo"} title={"SIRI 배너, 현수막 세트"} backdrop_path={"https://imgur.com/PaoQw41.png"}></Item>
          <Item where={"/sign"} title={"박제현 싸인"} backdrop_path={"https://imgur.com/tybsxrY.png"}></Item>
          <Item where={"/design"} title={"SIRI 오리지널 디자인"} backdrop_path={"https://imgur.com/Eto3Bxp.png"}></Item>
          <Item where={"/sticker"} title={"SIRI 스티커"} backdrop_path={"https://imgur.com/EEhNVPm.png"}></Item>
          <Item where={"/heart"} title={"박제현의 축복"} backdrop_path={"https://imgur.com/xVzf0zX.png"}></Item>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SaleContainer;