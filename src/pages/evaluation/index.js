import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// import { phoneSocData } from "@/common/local-data.js";
import { getPhoneGradeAction, getPhoneSocGradeAction } from "@/pages/evaluation/store/actionCreators.js";

import { Select } from 'antd';
import XHPhoneGradeBar from "@/components/phone-grade-bar";
import XHPhoneSOCGrade from "@/components/phone-soc-grade";
import {
  EvaluationWrapper
} from "./style";
const { Option } = Select;

export default memo(function XHEvaluation() {
  const [isBar, setIsBar] = useState(true);

  const dispatch = useDispatch();

  const { phoneGradeData, phoneSocGradeData } = useSelector(state => ({
    phoneGradeData: state.getIn(["phoneGrade", "phoneGradeData"]),
    phoneSocGradeData: state.getIn(["phoneGrade", "phoneSocGradeData"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getPhoneGradeAction());
    dispatch(getPhoneSocGradeAction());
  }, [dispatch]);

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
          <Select defaultValue={isBar ? "bar" : "column"} style={{ width: 180 }} onChange={handleChange}>
            <Option value="bar">手机性能跑分排行</Option>
            <Option value="column">手机芯片SOC排行</Option>
          </Select>
        </div>
        <div className="grade-show">
          {
            isBar ?
              (<div className="bar">
                <div className="data-from">数据来源于安兔兔</div>
                <XHPhoneGradeBar data={phoneGradeData} theId="bar" />
              </div>) :
              (<div className="column">
                <div className="data-from">数据来源于鲁大师</div>
                <XHPhoneSOCGrade data={phoneSocGradeData} theId="column" />
              </div>)
          }
        </div>
      </div>
    </EvaluationWrapper>
  )
})
