import styled from "styled-components";

export const RecommendWrapper = styled.div`
  width: 100%;
  min-width: 1440px;
  margin: 10px 0;
  .carousel {
    /* width: 1100px; */
    height: 340px;
    position: relative;
    background-color: #353b48;
    color: #fff;


    .left,
    .right {
      position: absolute;
      font-size: 24px;
      color: #353b48;
      &:hover {
        cursor: pointer;
        color: #2f3640;
        border: 1px solid #000;
        background-color: #353b48;
        color: #fff;
      }
    }

    .left {
      top: 50%;
      left: -48px;
      transform: translateY(-50%);
    }

    .right {
      top: 50%;
      right: -48px;
      transform: translateY(-50%);
    }
  }
`