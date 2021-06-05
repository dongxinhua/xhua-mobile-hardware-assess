import React, { memo } from 'react';

import {Select} from "antd";

const { Option } = Select;

export default memo(function XHTypeSelect(props) {

  const handleIndexChange = (value) => {
    // console.log(value);
    props.changeIndex(value);
  }

  return (
    <div>
      <Select defaultValue={"CPU"} style={{ width: 180 }} onChange={handleIndexChange}>
        {
          props.index.map(item => {
            return <Option value={item} key={item}>{item}</Option>
          })
        }
      </Select>
    </div>
  )
})
