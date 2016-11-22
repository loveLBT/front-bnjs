import React,{Component} from 'react'
import ReactDom from 'react-dom'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'
import './css/scroll.css'

class Scroll extends Component{
	constructor(props){
		super(props)

		this.state={
			 isScrolling: false, //是否正在滚动
		     pullDownState: 0, //下拉状态，0 表示下拉，1表示松开，2表示加载数据中
		     pullUpState: 0, //上拉状态，0 表示上拉，1表示松开，2表示加载数据中
		     pullDownCls: 'scrolled-up',
		     pullUpCls: '',
		}
		this.scrollStartPos = 0; // 开始位置
	    this.pullDownOffset = 0; // 向下刷新框偏移量
	    this.lock = false; // 当加载数据时，锁住
	}
	componentDidMount(){
		const {pullDown} = this.props;
	    if (pullDown) {
	      const pullDownEl = this.refs.pullDown;
	      this.pullDownOffset = pullDownEl.offsetHeight;
	    }
	}
	handleScrollStart(iScrollInstance){
		if (this.lock) {
	      return;
	    }
		this.setState({isScrolling:true})
		this.scrollStartPos=iScrollInstance.y
	}
	handleScrollMove(iScrollInstance){
		if (this.lock) {
	      return;
	    }
		const y = iScrollInstance.y
		const {pullDownCls, pullUpCls} = this.state
		const {pullDown, pullUp, pullDownThreshold, pullUpThreshold} = this.props
		if(!pullDown && !pullUp){
			return
		}
		if(pullDown){
			if(y > this.pullDownOffset + pullDownThreshold && pullDownCls !== 'iscroll-flip'){
				this.setState({
					pullDownCls: 'iscroll-flip',
         			pullDownState: 1
				},()=>{
					iScrollInstance.scrollBy(0, pullDownThreshold, 0)
				})
			}else if(y < 0 && pullDownCls === 'iscroll-flip'){
				this.setState({
					pullDownCls: 'scrolled-up',
         			pullDownState: 0
				},()=>{
					iScrollInstance.scrollBy(0, this.pullDownOffset, 0);
				})
			}
		}
	}
	handleScrollEnd(iScrollInstance){
		if(this.lock){
			return
		}
		const {pullDown, pullUp} = this.props;
    	const {pullDownCls, pullUpCls} = this.state;
    	if(pullDown && pullDownCls==="iscroll-flip"){
    		this.setState({
    			pullDownCls:"iscroll-loading",
    			pullDownState: 2
    		})
    		this.pullActionHandler()
    	}
	}
	pullActionHandler(){
		this.lock = true;
	}
	render(){
		const {pullDownState, pullUpState, pullDownCls, pullUpCls} = this.state
		const {options,pullDown,pullUp,pullDownText, pullUpText}=this.props
		return (
			<ReactIScroll
				iScroll={iScroll}
				options={options}
				onScrollStart={this.handleScrollStart.bind(this)}
				onScroll={this.handleScrollMove.bind(this)}
				onScrollEnd={this.handleScrollEnd.bind(this)}
			>
				<div className="scroll_cell">
					{pullDown ? (
			            <div ref="pullDown" className={classnames({'iscroll-pull-down': true, [pullDownCls]: true})}>
			              <i></i>
			              <span>{pullDownText[pullDownState]}</span>
			            </div>
		            ) : null}
					{this.props.children}
					{pullUp ? (
			            <div ref="pullUp" className={classnames({'iscroll-pull-up': true, [pullUpCls]: true})}>
			              <i></i>
			              <span>{pullUpText[pullUpState]}</span>
			            </div>
		            ) : null}
				</div>
			</ReactIScroll>
		)
	}
}
export default Scroll

Scroll.defaultProps = {
  options: {
    mouseWheel: false, // 是否支持鼠标滚轮
    scrollbars: false, // 是否显示滚动条
    probeType: 3, // 滚动的节奏
    //bounceTime: 250, // 滚动动画持续的时间，默认为600
    bounceEasing: 'quadratic', // 动画算法
    fadeScrollbars: true, // 是否使用滚动 fade 效果
  },
  pullDown: false,
  pullUp: false,
  pullDownText: ['下拉刷新', '松开刷新', '加载中，请稍后...'],
  pullUpText: ['上滑加载更多...', '松开加载...', '加载中，请稍后...'],
  pullDownThreshold: 5, //向下滑动临界值
  pullUpThreshold: 55, //向上滑动临界值
}
