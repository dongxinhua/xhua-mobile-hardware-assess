import React, { memo, useEffect, useRef, useState } from 'react';

import { getPhoneGradeEdit, phoneGradeEdit, deletePhoneData } from "@/services/grade.js";

import { PhoneDataEditWrapper } from "./style";

import { Button, Table, Modal, Form, Input, message } from 'antd';

export default memo(function XHPhoneDaraEdit() {

  const [phoneData, setPhoneData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [thePhoneData, setThePhoneData] = useState({});

  const FormRef = useRef();

  const handleOk = () => {
    // 确定
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    let num = 0;
    phoneGradeEdit(values).then(res => {
      const data = res.data;
      data.forEach(item => {
        item.key = num++;
      })
      setPhoneData(data);
      message.success("修改成功");
    })
  };

  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };

  const phoneColumns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CPU',
      dataIndex: 'CPU',
      key: 'CPU',
    },
    {
      title: 'GPU',
      dataIndex: 'GPU',
      key: 'GPU',
    },
    {
      title: 'MEM',
      dataIndex: 'MEM',
      key: 'MEM',
    },
    {
      title: 'UX',
      dataIndex: 'UX',
      key: 'UX',
    },
    {
      title: '总分',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: '操作',
      key: 'edit',
      dataIndex: 'edit',
      render: (text, record) => {
        const changeData = () => {
          setIsModalVisible(true);
          setThePhoneData(record);
          if (FormRef.current) {
            FormRef.current.setFieldsValue(record);
          }
        }

        const deleteData = () => {
          let num = 0;
          deletePhoneData(record).then(res => {
            const data = res.data;
            data.forEach(item => {
              item.key = num++;
            })
            setPhoneData(data);
            message.success("删除成功")
          })
        }

        return (
          <div>
            <Button onClick={e => changeData()}>修改</Button>
            <Button danger onClick={e => deleteData()}>删除</Button>
          </div>
        )
      },
    }
  ];

  useEffect(() => {
    let num = 0;
    getPhoneGradeEdit().then(res => {
      const data = res.data;
      data.forEach(item => {
        item.key = num++;
      })
      setPhoneData(data);
    })
  }, []);

  return (
    <PhoneDataEditWrapper>
      <Table columns={phoneColumns} dataSource={phoneData} />
      <Modal title={thePhoneData.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText="取消" okText="完成" className="modal">
        <Form
          name="basic"
          initialValues={thePhoneData}
          onFinish={onFinish}
          ref={FormRef}
        >
          <Form.Item
            label="名 称"
            name="name"
          >
            <Input disabled={true} />
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
              修改
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PhoneDataEditWrapper>
  )
})
