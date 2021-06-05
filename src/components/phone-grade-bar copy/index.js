import React, { memo, useEffect } from 'react';

import { Bar } from '@antv/g2plot';
import { PhoneGradeBarWrapper } from "./style";

export default memo(function XHPhoneGradeBar(props) {

  useEffect(() => {
    console.log(props.data);
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
      stackedBarPlot.update({
        data: props.data
      });
    }


  }, [props.data]);


  return (
    <PhoneGradeBarWrapper>
      <div id="container"></div>
    </PhoneGradeBarWrapper>
  )
})

// import React, { PureComponent } from 'react';
// import { Bar } from '@antv/g2plot';

// import { PhoneGradeBarWrapper } from "./style";

// export default class XHPhoneGradeBar extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       stackedBarPlot: {}
//     }
//   }

//   componentDidMount() {
//     const stackedBarPlot = new Bar('container', {
//       data: this.props.data,
//       isStack: true,
//       xField: 'value',
//       yField: 'name',
//       seriesField: 'type',
//       label: {
//         // 可手动配置 label 数据标签位置
//         position: 'middle', // 'left', 'middle', 'right'
//         // 可配置附加的布局方法
//         layout: [
//           // 柱形图数据标签位置自动调整
//           { type: 'interval-adjust-position' },
//           // 数据标签防遮挡
//           { type: 'interval-hide-overlap' },
//           // 数据标签文颜色自动调整
//           { type: 'adjust-color' },
//         ],
//       },
//     });
//     this.setState({
//       stackedBarPlot: stackedBarPlot
//     }, () => {
//       if (this.props.data.length !== 0) {
//         this.state.stackedBarPlot.render();
//       }
//     })

//   }

//   componentDidUpdate() {
//     this.state.stackedBarPlot.update({
//       data: this.props.data
//     });
//   }

//   render() {
//     return (
//       <PhoneGradeBarWrapper>
//         <div id="container"></div>
//       </PhoneGradeBarWrapper>
//     )
//   }
// }
