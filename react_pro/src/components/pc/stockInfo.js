import React, { Component } from 'react';
import '../../scss/pcStyle/stockInfo.scss'
const ECHARTS = require("echarts")
let ws = new WebSocket('ws://localhost:8080')
class stockInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClose: false,
      stocks: {
        'alibaba': 357.22,
        'tencent': 453.2,
        'wangyi': 215.2,
        'baidu': 200.2,
        'toutiao': 200
      },
      stock_request: { "stocks": ["alibaba", "tencent", "wangyi", "baidu", "toutiao"] }
    }
  }
  initEchart() {
    let myChart = ECHARTS.init(document.getElementById('charts'))
    myChart.setOption({
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: this.state.stock_request['stocks'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: Object.values(this.state.stocks)
        }
      ]
    })
  }

  updateUI(ws) {
    ws.onopen = (e) => {
      this.isClose = false;
      ws.send(JSON.stringify(this.state.stock_request))
    }

    ws.onmessage = (e) => {
      var stocksData = JSON.parse(e.data);
      for (var symbol in stocksData) {
        if (stocksData.hasOwnProperty(symbol)) {
          this.state.stocks[symbol] = stocksData[symbol];
          this.initEchart()
          console.log(this.state.stocks)
        }
      }
    };
  }

  getData() {
    ws.onopen = function (e) {
      ws.send('ww');
    }
  }

  componentDidMount() {
    this.initEchart()
    this.updateUI(ws)
  }

  render() {
    return (
      <div className='contain-wrapper'>
        <div className="charts-wrapper">
          <div id="charts" className="charts-pic"></div>
        </div>
      </div>
    )
  }
}
export default stockInfo;