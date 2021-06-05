import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { phoneSocData } from "@/common/local-data.js";
import { changePhoneGradeAction, getPhoneGradeAction } from "@/pages/evaluation/store/actionCreators.js";
// import {  getPhoneGradeAction } from "@/pages/evaluation/store/actionCreators.js";

import { getPhoneGrade } from "@/services/grade.js";

import { Select } from 'antd';
import XHPhoneGradeBar from "@/components/phone-grade-bar";
import XHPhoneSOCGrade from "@/components/phone-soc-grade";
import {
  EvaluationWrapper
} from "./style";
const { Option } = Select;

export default memo(function XHEvaluation() {
  const [isBar, setIsBar] = useState(true);
  const [phoneData, setPhoneData] = useState([]);

  const dispatch = useDispatch();

  // const { phoneGradeData } = useSelector(state => ({
  //   phoneGradeData: state.getIn(["phoneGrade", "phoneGradeData"])
  // }), shallowEqual)

  // useEffect(() => {
  //   dispatch(getPhoneGradeAction());
  // }, [dispatch]);

  useEffect(() => {
    console.log(1);
    getPhoneGrade().then(res => {
      // 发送网络请求，取得数据
      setPhoneData(res.data);
      // 保存在 redux 中
      dispatch(changePhoneGradeAction(res.data));
    })
  }, [dispatch])


  const handleChange = (value) => {
    if (value === "bar") {
      setIsBar(true);
    } else {
      setIsBar(false);
    }
  }

  return (
    <EvaluationWrapper>
      <div className="content wrap-v1">
        <div className="typeSelector">
          <Select defaultValue="bar" style={{ width: 180 }} onChange={handleChange}>
            <Option value="bar">手机性能跑分排行</Option>
            <Option value="column">手机芯片SOC排行</Option>
          </Select>
        </div>
        <div className="grade-show">
          {
            isBar ?
              (<div className="bar">
                <div className="data-from">数据来源于安兔兔</div>
                <XHPhoneGradeBar data={phoneData} theId="bar" />
              </div>) :
              (<div className="column">
                <div className="data-from">数据来源于鲁大师</div>
                <XHPhoneSOCGrade data={phoneSocData} theId="column" />
              </div>)
          }
        </div>
      </div>
    </EvaluationWrapper>
  )
})
