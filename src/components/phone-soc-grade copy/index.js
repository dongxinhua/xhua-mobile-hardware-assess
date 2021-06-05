import React, { memo, useEffect } from 'react';

import { Bar } from '@antv/g2plot';
import { PhoneSOCGradeWrapper } from "./style";

export default memo(function XHPhoneSOCGrade(props) {
  useEffect(() => {
    if (props.data.length !== 0) {
      const stackedBarPlot = new Bar('container', {
        data: props.data,
        isStack: true,
        xField: 'value',
        yField: 'name',
        seriesField: 'type',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'left', 'middle', 'right'
          // 可配置附加的布局方法
          layout: [
            // 柱形图数据标签位置自动调整
            { type: 'interval-adjust-position' },
            // 数据标签防遮挡
            { type: 'interval-hide-overlap' },
            // 数据标签文颜色自动调整
            { type: 'adjust-color' },
          ],
        },
      });
  
      stackedBarPlot.render();
    }
  }, [props.data]);

  return (
    <PhoneSOCGradeWrapper>
      <div id="container"></div>
    </PhoneSOCGradeWrapper>
  )
})
