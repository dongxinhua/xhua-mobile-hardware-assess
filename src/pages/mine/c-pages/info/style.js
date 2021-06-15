import styled from "styled-components";

export const InfoWrapper = styled.div`
  margin-top: 48px;
  .content {
  /* height: 560px; */
  min-height: 456px;
  padding: 20px 0; 
    position: relative;
    font-size: 24px;
    .info {
      position: absolute;
      transform: translate(-20%, -70%);
      top: 50%;
      left: 50%;
      width: 50%;
      height: 45%;
      /* background-color: #eee; */
      .info-item {
        height: 48px;
        line-height: 48px;
        padding: 20px 26px;
        font-size: 18px;

        span {
          display: inline-block;
          margin-left: 48px;
        }
      }
    }
  }
`