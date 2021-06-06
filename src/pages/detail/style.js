import styled from "styled-components";

export const DetailWrapper = styled.div`
  .content {
    margin-top: 26px;
    margin-bottom: 26px;
    padding: 20px 40px;
    /* height: 720px; */
    background-color: #fff;

    .header {
      .title {
        font-size: 22px;
      }

      .time {
        color: #ccc;
      }

      .back {
        margin-bottom: 8px;
        font-size: 14px;
        cursor: pointer;
        color: #ccc;
        position: relative;
        right: 22px;
      }
    }

    .main {
      .text {
        font-size: 14px;
        margin: 20px 0;
      }

      .img {
        width: 100%;
        height: 440px;
        margin: 20px 0; 
      }
    }

    
  }
`