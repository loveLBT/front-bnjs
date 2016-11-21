import React,{Component} from 'react'
import ReactDom from 'react-dom'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

class Scroll extends Component{
	
	render(){
		const scrollStyle={position:"relative",height:"100%",width:"100%"}
		return (
			<ReactIScroll
				style={scrollStyle}
				iScroll={iScroll}
			>
				<div className="scroll_cell">
					{this.props.children}
				</div>
			</ReactIScroll>
		)
	}
}
export default Scroll

Scroll.defaultProps = {
  options: {
    mouseWheel: true, // 是否支持鼠标滚轮
    scrollbars: true, // 是否显示滚动条
    probeType: 2, // 滚动的节奏
    //bounceTime: 250, // 滚动动画持续的时间，默认为600
    bounceEasing: 'quadratic', // 动画算法
    fadeScrollbars: true, // 是否使用滚动 fade 效果
    interactiveScrollbars: true // 滚动条是否可以被拖拽
  },
  pullDown: true,
  pullUp: true,
  pullDownText: ['下拉刷新', '松开刷新', '加载中，请稍后...'],
  pullUpText: ['上滑加载更多...', '松开加载...', '加载中，请稍后...'],
  pullDownThreshold: 5, //向下滑动临界值
  pullUpThreshold: 55, //向上滑动临界值
}
