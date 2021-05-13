import React, { memo, useRef } from 'react';

import * as rules from "@/common/constants.js";
import { register } from "@/services/user.js";

import { Form, Input, Button, message } from 'antd';
import { RegisterArea } from "./style";

export default memo(function XHRegisterArea(props) {
  const nicknameRef = useRef();
  const usernameRef = useRef();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
  };

  const onFinish = (values) => {
    // 提交表单且数据验证成功后回调事件
    // console.log('Success:', values);
    register(values).then(res => {
      if (res.code === 1) {
        // 注册成功
        message.success(res.message);
        // 跳转到登录页
        props.changeLoginType(true);
      } else if (res.code === 3) {
        // 账号已被注册
        message.warning(res.message);
        usernameRef.current.focus();
      } else if (res.code === 4) {
        // 昵称被占用
        message.warning(res.message);
        nicknameRef.current.focus();
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
    <RegisterArea>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="昵 称"
          name="nickname"
          rules={rules.NICKNAMERULES}
        >
          <Input ref={nicknameRef} />
        </Form.Item>

        <Form.Item
          label="账 号"
          name="username"
          rules={rules.USERNAMERULES}
        >
          <Input ref={usernameRef} />
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
            注册
          </Button>
        </Form.Item>
      </Form>
    </RegisterArea>
  )
})
