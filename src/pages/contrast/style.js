import styled from "styled-components";

export const ContrastWrapper = styled.div`
  /* height: 560px; */
  min-width: 1440px;

  .content {
    margin-bottom: 26px;
  }

  .typeSelector {
      width: 100%;
      background-color: #fff;
      /* height: 172px;  */
      margin-top: 26px;
      margin-bottom: 26px;
      padding: 0 26px;
      .type {
        height: 86px;
        line-height: 86px;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        .bigClassSelect {
          margin-right: 20px;
        }
      }
      .tag {
        min-height: 52px;
        line-height: 52px;
      }
    }
`