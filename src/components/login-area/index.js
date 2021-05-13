import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import * as rules from "@/common/constants.js";
import { login } from '../../services/user';
import { changeIsLoginAction } from "@/pages/login/store/actionCreators.js"

import { Form, Input, Button, message } from 'antd';
import { withRouter } from 'react-router';
import { LoginArea } from "./style";

const XHLoginArea = (props) => {

  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["login", "isLogin"])
  }), shallowEqual);

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
  };

  const onFinish = (values) => {
    // 提交表单且数据验证成功后回调事件
    // 发送网络请求
    login(values).then(res => {
      if (res.code === 2) {
        // 密码不正确
        message.error(res.message);
      } else if (res.code === 3) {
        // 账号未被注册
        message.warning(res.message);
      } else if (res.code === 1) {
        // 登录成功
        message.success(res.message);
        // 登录成功做一系列操作，比如跳转到首页，将用户数据存储到localStorage
        // 存储 localStorage
        const { username, nickname, rank, id } = res;
        const userInfo = {
          username,
          nickname,
          rank,
          id
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        // 跳转页面
        props.history.push("/recommend");
        dispatch(changeIsLoginAction());
      } else {
        message.error("接口出现问题");
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    // 提交表单且数据验证失败后回调事件
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginArea>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="账 号"
          name="username"
          rules={rules.USERNAMERULES}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密 码"
          name="password"
          rules={rules.PASSWORDRULES}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginArea>
  )
}

export default withRouter(memo(XHLoginArea));
