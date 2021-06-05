import React, { memo, useCallback, useEffect, useState } from 'react';

import { Select } from 'antd';
import XHTypeSelect from "@/components/type-select";
import XHTypeSelectSen from "@/components/type-select-second";

import { getIndexAction, getConstarstArrAction, getConstarstDataAction } from "./store/actionCreators";

import {
  ContrastWrapper
} from "./style";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { EditableTagGroup } from '../../components/tag';
import { EditableTagGroupSen } from '../../components/tag-second';
import XHPhoneConstrastColum from '../../components/phone-constrast-colum';
const { Option } = Select;

export default memo(function XHContrast() {
  const [type, setType] = useState("phone");
  const [currentIndex, setCurrentIndex] = useState("CPU");
  const [currentConstarst, setCurrentConstarst] = useState([]);

  const { index, contrastArr, contrastData } = useSelector(state => ({
    index: state.getIn(["phoneConstrast", "index"]),
    contrastArr: state.getIn(["phoneConstrast", "contrastArr"]),
    contrastData: state.getIn(["phoneConstrast", "contrastData"])
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    const obj = {
      index: currentIndex,
      contrastArr: currentConstarst,
      type
    }
    dispatch(getIndexAction(type));
    dispatch(getConstarstArrAction(type));
    dispatch(getConstarstDataAction(obj));
  }, [dispatch, type, currentIndex, currentConstarst])

  const handleChange = (value) => {
    // console.log(value);
    setType(value);
  }

  const changeIndex = useCallback((index) => {
    // console.log(index);
    setCurrentIndex(index);
  }, []);

  const changeContrast = useCallback((constarst) => {
    // console.log(constarst);
    setCurrentConstarst(constarst);
  }, [])

  // const handleIndexChange = (value) => {
  //   console.log(value);
  // }

  return (
    <ContrastWrapper>
      <div className="content wrap-v1">
        <div className="typeSelector">
          <div className="type">
            <div className="bigClassSelect">
              <Select defaultValue={type} style={{ width: 180 }} onChange={handleChange}>
                <Option value="phone">手机性能跑分</Option>
                <Option value="chip">手机芯片性能</Option>
              </Select>
            </div>
            <div className="smallClassSelect">
              {
                type === "phone" ? <XHTypeSelect index={index} changeIndex={changeIndex}/> 
                : <XHTypeSelectSen index={index} changeIndex={changeIndex}/>
              }
            </div>
          </div>
          <div className="tag">
            {
              type === "phone" ? <EditableTagGroup contrastArr={contrastArr} changeContrast={changeContrast}/> 
              : <EditableTagGroupSen contrastArr={contrastArr} changeContrast={changeContrast}/>
            }
          </div>
        </div>
        <div>
          <XHPhoneConstrastColum data={contrastData}/>
        </div>
      </div>
    </ContrastWrapper>
  )
})
