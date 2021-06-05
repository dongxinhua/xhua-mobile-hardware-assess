import React, { memo, useEffect, useState } from 'react';

import { getAllUsers, empower } from "@/services/user.js";

import { Button, message, Table } from "antd";
import { EmpowerWrapper } from "./style";

export default memo(function XHEmpower(props) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getAllUsers().then(res => {
      // console.log(res);
      setUserInfo(res.data)
    })
  }, []);

  useEffect(() => {
    let rank = JSON.parse(localStorage.getItem("userInfo")).rank;
    if (rank !== 0) {
      message.error("您没有此权限!");
      props.history.push("/mine");
    }
  },[props.history]);

  const userColumns = [
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '账号',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '职位',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: '操作',
      key: 'edit',
      dataIndex: 'edit',
      render: (text, record) => {
        const changeRank = () => {
          empower(record.username).then(res => {
            setUserInfo(res.data);
          })
        }

        return (
          <div>
            <Button onClick={e => changeRank()} disabled={record.rank === "站长" || record.rank === "管理员"}>设为管理员</Button>
          </div>
        )
      },
    }
  ];

  return (
    <EmpowerWrapper>
      <Table columns={userColumns}  dataSource={userInfo}/>
    </EmpowerWrapper>
  )
})
