import React, { Component } from 'react';
import SelfHeader from './selfHeder'
import '../../scss/pcStyle/stockInfo.scss'

const ECHARTS = require("echarts")
let ws = ''
class stockInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClose: false,
      stocks: {
        'alibaba': 0,
        'tencent': 0,
        'wangyi': 0,
        'baidu': 0,
        'toutiao': 0
      },
      stock_request: { "stocks": ["alibaba", "tencent", "wangyi", "baidu", "toutiao"] }
    }
  }
  initEchart() {
    let that = this;
    let myChart = ECHARTS.init(that.refs.charts)
    myChart.setOption({
      color: ['#e08787'],
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

  connectWS () {
    ws = new WebSocket('ws://localhost:8080')
  }

  disconnectWS () {
    ws.close() 
  }

  updateUI(ws) {
    ws.onopen = (e) => {
      this.isClose = false;
      ws.send(JSON.stringify(this.state.stock_request))
    }
    ws.onmessage = (e) => {
      var stocksData = JSON.parse(e.data);
      var stockObj = {};
      for (var symbol in stocksData) {
        if (stocksData.hasOwnProperty(symbol)) {
          stockObj[symbol] = stocksData[symbol];
        }
      }
      this.setState({
        stocks: stockObj
      })
      this.initEchart()
    };
  }

  componentDidMount() {
    this.connectWS() // connect begin
    this.updateUI(ws)
    this.initEchart()
  }
  
  componentWillUnmount () {
   this.disconnectWS()
  }

  render() {
    return (
      <div>
        <SelfHeader history={this.props.history}/>
        <div className='contain-wrapper'>
          <div className="charts-wrapper">
            <div ref="charts" className="charts-pic"></div>
          </div>
          <div  className="stock-table">
            <table className="table-wrapper">
              <thead>
                <tr>
                  <th>stock en-name</th>
                  <th>stock cn-name</th>
                  <th>immediate stock price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alibaba</td>
                  <td>阿里巴巴</td>
                  <td>{this.state.stocks['alibaba']}</td>
                </tr>
                <tr>
                  <td>Tencent</td>
                  <td>腾讯</td>
                  <td>{this.state.stocks['tencent']}</td>
                </tr>
                <tr>
                  <td>Wangyi</td>
                  <td>网易</td>
                  <td>{this.state.stocks['wangyi']}</td>
                </tr>
                <tr>
                  <td>Baidu</td>
                  <td>百度</td>
                  <td>{this.state.stocks['baidu']}</td>
                </tr>
                <tr>
                  <td>Toutiao</td>
                  <td>头条</td>
                  <td>{this.state.stocks['toutiao']}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default stockInfo;