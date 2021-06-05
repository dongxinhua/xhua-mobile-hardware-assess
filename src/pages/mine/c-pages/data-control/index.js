import React, { memo, useRef, useState, useEffect } from 'react';

import {addPhoneData} from "@/services/grade.js";

import { Button, Select, Modal, Input, Form, message } from 'antd';

import { DataConcrolWrapper } from "./style";

import XHPhoneDataEdit from "@/components/phone-data-edit";
import XHSOCDataEdit from "@/components/soc-data-edit";

const { Option } = Select;


export default memo(function XHDataConcrol(props) {
  const [type, setType] = useState("phone");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const FormRef1 = useRef();
  const FormRef2 = useRef();

  useEffect(() => {
    let rank = JSON.parse(localStorage.getItem("userInfo")).rank;
    if (rank === 2) {
      message.error("您没有此权限!");
      props.history.push("/mine");
    }
  },[props.history]);

  const handleOk = () => {
    // 确定
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    // console.log('Success:', values);
    addPhoneData(values).then(res => {
      console.log(res);
      message.success("添加成功");
    })
  };

  const handleOk2 = () => {
    // 确定
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const onFinish2 = (values) => {
    console.log('Success:', values);
    message.success("添加成功");
  };

  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };

  const handleChange = (value) => {
    if (value === "phone") {
      setType("phone");
    } else {
      setType("soc");
    }
  }

  const handelAddData = () => {
    if (type === "phone") {
      setIsModalVisible(true);
    } else {
      setIsModalVisible2(true);
    }
  }

  return (
    <DataConcrolWrapper>
      <div className="select">
        <Select defaultValue={type} style={{ width: 180 }} onChange={handleChange}>
          <Option value="phone">手机排行数据管理</Option>
          <Option value="soc">芯片排行数据管理</Option>
        </Select>
        <Button className="btn" onClick={e => handelAddData()}>添加数据</Button>
      </div>
      <div className="content-box">
        {
          type === "phone" ? <XHPhoneDataEdit /> : <XHSOCDataEdit />
        }
      </div>
      <Modal title={"添加手机数据"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText="取消" okText="完成" className="modal">
        <Form
          name="basic"
          onFinish={onFinish}
          ref={FormRef1}
        >
          <Form.Item
            label="名 称"
            name="name"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CPU"
            name="CPU"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="GPU"
            name="GPU"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="MEM"
            name="MEM"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="U X"
            name="UX"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="总 分"
            name="grade"
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal title={"添加芯片数据"} visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2} cancelText="取消" okText="完成">
        <Form
          name="basic"
          onFinish={onFinish2}
          ref={FormRef2}
        >
          <Form.Item
            label="名 称"
            name="name"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CPU"
            name="CPU"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="GPU"
            name="GPU"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="总 分"
            name="grade"
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </DataConcrolWrapper>
  )
})
