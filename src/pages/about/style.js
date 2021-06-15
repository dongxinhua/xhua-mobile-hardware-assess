import styled from "styled-components";

import bg2 from "@/assets/img/bg2.jpg";

export const AboutWrapper = styled.div`
  height: 624px;
  min-width: 1440px;
  
  .content {
    margin-top: 20px;
    background-color: #fff;
    height: 600px;
    background: url(${bg2}) no-repeat;

    .introduce {
      font-size: 18px;
      padding: 20px 40px;
      color: #fff;
    }

    .imgBox {
      padding: 10px 40px;
      margin: 40px 0;
      img {
        width: 280px;
        height: 280px;
      }
    }
  }
`