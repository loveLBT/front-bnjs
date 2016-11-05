import React,{Component} from 'react'
import ReactDom from 'react-dom'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import {OrderItem,Scroll} from '../../components'
import './slidertab.css'

class SliderTab extends Component{
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	isScroll:true,
	  	count:1,
	  	x:0,
	  	sliderWidth:0,
	  	isTransition:false,
	  	touchObject:null,
	  }
	}
	componentDidMount() {
	 	this.setSliderWidth() 
	 	this.setCount()
	}
	setSliderWidth(){
		const slider=ReactDom.findDOMNode(this.refs.sliderTab)
		this.setState({
			sliderWidth:slider.offsetWidth
		})
	}
	setCount(){
		this.setState({
			count:toString.call(this.props.navArry) === '[object Array]' ? this.props.navArry.length : 1
		})
	}
	getX(event) {
        return event.touches !== undefined ? event.touches[0].pageX : event.clientX
    }
    getY(event) {
        return event.touches !== undefined ? event.touches[0].pageY : event.clientY
    }
    swipeStart(event){
    	this.setState({
    		isScroll:true,
    		isTransition:false,
    		touchObject:{
    			x:this.getX(event),
    			startX:this.getX(event),
    			y:this.getY(event),
    			startY:this.getY(event)
    		}
    	})
    }
    swipeMove(event){
    	if(this.state.isScroll){
    		const {touchObject}=this.state
	    	let diff=this.getX(event)-touchObject.startX
	    	let diyy=this.getY(event)-touchObject.startY
	    	if(Math.abs(diff)-Math.abs(diyy)>0){
	    		event.preventDefault()
	    		this.setState({
	    			isScroll:true,
					isTransition:false,
					touchObject:objectAssign({},this.state.touchObject,{x:this.getX(event)})
				})
	    	}else{
	    		this.setState({
	    			isScroll:false,
	    			isTransition:false,
	    		})
	    	}
    	}
	}
	swipeEnd(event){
		const {touchObject,x,sliderWidth,count}=this.state
		let diff=touchObject.x-touchObject.startX
		let currentX=x
		if(Math.abs(diff)>parseInt(sliderWidth/3)){
			if(diff>0){
				currentX+=sliderWidth
				
			}else{
				currentX-=sliderWidth
				this.props.handleChangeTab()
			}
			if(currentX>0){
				currentX=0
			}
			if(currentX<-(sliderWidth*(count-1))){
				currentX = -(sliderWidth * (count - 1));
			}
			this.setState({
				isScroll:true,
				x:currentX,
				isTransition:true,
				touchObject:null
			})
		}else{
			this.setState({
				isScroll:true,
				isTransition:true,
				touchObject:null
			})
		}
	}
	handleTouchEnd(event){
		event.preventDefault()
		const {sliderWidth,x}=this.state
		const index=event.target.name
		let currentX=x
		currentX=-sliderWidth*index
		if(index==1){
			this.props.handleChangeTab()
		}
		this.setState({
			x:currentX,
			isTransition:true,
			touchObject:null
		})
	}
	renderStyle(style,styleWidth){
		return {
			transform: 'translate3d(' + style + 'px, 0, 0)',
			WebkitTransform: 'translate3d(' +style + 'px, 0, 0)',
			MsTransform: 'translate3d(' +style + 'px, 0, 0)',
			width:styleWidth+'%'
		}
	}
	renderNav(){
		const {sliderWidth,x}=this.state
		const index=-x/sliderWidth
		const {navArry}=this.props
		let activeColor='#e34949'
		return (
			navArry.map((item,i)=>
				<a 
					key={i} 
					onTouchEnd={this.handleTouchEnd.bind(this)} 
					className={classnames('flex-1',{active:index===i})} 
					style={{color:index===i?activeColor:''}}
					href="javascript:;" 
					name={i} 
				>
					{item.text}
				</a>
			)
		)
	}
	renderItem(){
		const {navArry}=this.props
		return (
			navArry.map((item,i)=>
				<div className="items" key={i}>
					<Scroll>{item.item}</Scroll>
				</div>
			)
		)
	}
	render(){
		const {sliderWidth,isTransition,x,touchObject,count}=this.state
		const {navArry}=this.props
		let offset=touchObject?parseInt((touchObject.x-touchObject.startX)/3)+x:x
		return (
			<div 
				className="slider-tab flex-column"
				ref="sliderTab"
				onTouchStart={this.swipeStart.bind(this)}
				onTouchMove={this.swipeMove.bind(this)}
				onTouchEnd={this.swipeEnd.bind(this)}
			>
				<div className="nav flex-ai">
					{this.renderNav()}
					<div 
						className={classnames('progress',{transition:isTransition})} 
						style={this.renderStyle(-offset/count,100/count)}
					>
						
					</div>
				</div>
				<div 
					className={classnames('group flex-1 flex',{transition:isTransition})}
					style={this.renderStyle(offset,100)}
				>
					{this.renderItem()}
				</div>
			</div>
		)
	}
}
export default SliderTab
