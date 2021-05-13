import styled from "styled-components";

export const XHHeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
  width: 100%;
  min-width: 1468px;
  color: #ccc;
  font-size: 14px;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  .logo {
    position: relative;
    right: 60px;
    display: block;
    width: 178px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    
    .select-item {
      position: relative;
      font-size: 16px;
      a {
        display: block;
        padding: 0 30px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      
      /* .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      } */
    }
  }
`;

export const ContentRight = styled.div`
  
  .login {
    display: inline-block;
    cursor: pointer;
    position: relative;
    top: 20px;
    color: #ccc;
    padding: 3px 6px;
    border: 1px solid #ccc;
    border-radius: 8px;

    &:hover {
      color: #fff;
      border: 1px solid #fff;
    }
  }

`