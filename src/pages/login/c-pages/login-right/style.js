import styled from "styled-components";

export const LoginRightWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;

  .content {
    height: 628px;
    width: 100%;
    /* background-color: #1890ff; */

    .type {
      height: 32px;
      text-align: center;
    }

    .ant-btn {
      width: 168px;
      border: 0;
      background-color: #353b48;
      color: #fff;
      margin-right: 6px;

      &.login {
        background-color: ${props => props.loginType ? "#fff" : "#353b48"};
        color: ${props => props.loginType ? "#353b48" : "#fff"};
        border: ${props => props.loginType && "1px solid #353b48"};
      }

      &.register {
        background-color: ${props => !props.loginType ? "#fff" : "#353b48"};
        color: ${props => !props.loginType ? "#353b48" : "#fff"};
        border: ${props => !props.loginType && "1px solid #353b48"};
      }
    }

    .input-box {
      
    }
  }
  
`