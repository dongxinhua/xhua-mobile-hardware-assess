import React, { PureComponent } from 'react';
import { Column } from '@antv/g2plot';


import { ConstrastWrapper } from "./style";

export default class XHPhoneConstrastColum extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      stackedColumPlot: {}
    }
  }

  componentDidMount() {
    const stackedColumPlot = new Column('container', {
      data: this.props.data,
      isStack: true,
      xField: 'name',
      yField: 'value',
      seriesField: 'name',
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
    this.setState({
      stackedColumPlot: stackedColumPlot
    }, () => {
      if (this.props.data.length !== 0) {
        this.state.stackedColumPlot.render();
      }
    })
  }

  componentDidUpdate() {
    this.state.stackedColumPlot.update({
      data: this.props.data
    });
  }

  render() {
    return (
      <ConstrastWrapper>
        <div id="container"></div>
      </ConstrastWrapper>
    )
  }
}
