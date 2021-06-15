import React, { memo, useEffect, useRef, useState } from 'react';

import { changeUserInfo } from "@/services/user";

import { Form, Button, Input, Radio, message } from "antd";
import { InfoChangeWrapper } from "./style";

export default memo(function XHInfoChange(props) {

  const [userInfo, setUserInfo] = useState({});

  const FormRef = useRef();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);
  }, [setUserInfo]);

  useEffect(() => {
    FormRef.current.setFieldsValue(userInfo);
  }, [userInfo])

  const onFinish = (values) => {
    console.log('Success:', values);
    changeUserInfo(values).then(res => {
      console.log(res);
      const { id, username, nickname, sex, age, rank } = res.data;
      const info = { id, username, nickname, sex, age, rank };
      localStorage.setItem("userInfo", JSON.stringify(info));
      message.success("修改成功");
      props.history.push("/mine");
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const tailLayout = {
    wrapperCol: {
      offset: 12,
      span: 16,
    },
  };

  return (
    <InfoChangeWrapper>
      <div className="title">
        修改信息
      </div>
      <div className="content-box">
        <Form
          name="basic"
          initialValues={userInfo}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          ref={FormRef}
        >
          <Form.Item
            label="账号"
            name="username"
          >
            <Input disabled={true} />
          </Form.Item>

          <Form.Item
            label="昵称"
            name="nickname"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="年龄"
            name="age"
          >
            <Input />
          </Form.Item>

          <Form.Item name="sex" label="性别">
            <Radio.Group>
              <Radio value={1}>男</Radio>
              <Radio value={0}>女</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              修改
            </Button>
          </Form.Item>
        </Form>
      </div>
    </InfoChangeWrapper>
  )
})
