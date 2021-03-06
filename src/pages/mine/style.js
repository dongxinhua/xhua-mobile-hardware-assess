import styled from "styled-components";

import bg5 from "@/assets/img/bg9.jpg";

export const MineWrapper = styled.div`
  margin-bottom: 26px;
  .header {
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 188px;
    background-color: #4b4b4b;
    .item {
      width: 80px;
      text-align: center;
      height: 26px;
      line-height: 26px;
      font-size: 14px;
      margin-right: 68px;
      background-color: #242424;
      color: #eee;
      cursor: pointer;
    }
  }

  .content {
    margin-top: 26px;
    margin-bottom: 26px;
    /* padding: 20px 0;  */
    /* background: #fff; */
    background: url(${bg5}) repeat-x;
  }

  .login {
    height: 596px;
    margin-top: 26px;
    margin-bottom: 26px;
    background: #fff;

    .tips {
      padding: 50px 40px; 
      font-size: 24px;
    }
  }
`