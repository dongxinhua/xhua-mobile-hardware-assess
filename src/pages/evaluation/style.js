import styled from "styled-components";

export const EvaluationWrapper = styled.div`
  /* height: 800px; */
  min-width: 1440px;

  .content {
    margin-bottom: 26px;
    position: relative;
    .data-from {
      position: absolute;
      right: 10px;
      color: #ccc;
    }

    .grade-show {
      height: 880px;
      background-color: #fff;
    }

    .typeSelector {
      width: 100%;
      background-color: #fff;
      height: 86px;
      line-height: 86px;
      margin-top: 26px;
      margin-bottom: 26px;
      padding: 0 26px;
    }
  }
  
`