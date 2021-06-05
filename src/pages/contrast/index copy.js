import React, { memo, useState } from 'react';

import { Select } from 'antd';

import { EditableTagGroup } from "@/components/tag"

// import { getIndexAction } from "./store/actionCreators";

import {
  ContrastWrapper
} from "./style";
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
const { Option } = Select;

export default memo(function XHContrast() {
  const bigType = ['phone', 'chip'];
  const smallType = {
    phone: ['CPU', 'GPU', 'MEM', "UX"],
    chip: ['CPU', 'GPU']
  };
  const [bigTypes, setBigTypes] = useState(smallType[bigType[0]]);
  const [smallTypes, setSmallTypes] = useState(smallType[bigType[0]][0]);

  const handleProvinceChange = value => {
    setBigTypes(smallType[value]);
    setSmallTypes(smallType[value][0]);
    console.log(value);
  };

  const onsmallTypesChange = value => {
    setSmallTypes(value);
  };

  return (
    <ContrastWrapper>
      <div className="content wrap-v1">
        <div className="typeSelector">
          <div className="type">
            <div className="bigType">
              <Select defaultValue={bigType[0]} style={{ width: 180 }} onChange={handleProvinceChange}>
                {bigType.map(bigType => (
                  <Option key={bigType}>{bigType === "phone" ? "手机性能跑分" : "手机芯片性能"}</Option>
                ))}
              </Select>
            </div>
            <div className="smallType">
              <Select style={{ width: 180 }} value={smallTypes} onChange={onsmallTypesChange}>
                {bigTypes.map(smallType => (
                  <Option key={smallType}>{smallType}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="tag">
            <EditableTagGroup />
          </div>
        </div>
      </div>
    </ContrastWrapper>
  )
})
