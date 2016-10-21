import React,{Component} from 'react'
import ReactDom from 'react-dom'
import classnames from 'classnames'
import Toast from '../Toast'
import objectAssign from 'object-assign'
import './productitem.css'
class ProductItem extends Component{
	constructor(props) {
	  super(props)
	  this.state = {
	  	count:1,
	  	x:0,
	  	sliderWidth:0,
	  	isTransition:false,
	  	touchObject:null,
	  	delay:3000
	  }
	}
	componentDidMount() {
		const {delay}=this.state
		this.setSliderWidth()   
		this.setCount()
	}
	setSliderWidth(){
		const slider=ReactDom.findDOMNode(this.refs.slider)
		this.setState({
			sliderWidth:slider.offsetWidth
		})
	}
	setCount() {
        this.setState({
            count: toString.call(this.props.children) === '[object Array]' ? this.props.children.length : 1
        });
    }
	getX(event) {
        return event.touches !== undefined ? event.touches[0].pageX : event.clientX;
    }
    swipeStart(event){
    	event.preventDefault()
    	this.setState({
    		isTransition:false,
    		touchObject:{
    			x:this.getX(event),
    			startX:this.getX(event)
    		}
    	})
    }
    swipeMove(event){
		event.preventDefault()
		this.setState({
			isTransition:false,
			touchObject:objectAssign({},this.state.touchObject,{x:this.getX(event)})
		})
	}
	swipeEnd(event){
		event.preventDefault()
		const {touchObject,x,sliderWidth,count,delay}=this.state
		let diff=touchObject.x-touchObject.startX
		let currentX=x
		if(Math.abs(diff)>50){
			if(diff>0){
				currentX+=sliderWidth
			}else{
				currentX-=sliderWidth
			}
			if(currentX>0){
				currentX=0
				Toast.tip("已经是第一个商品了")
			}
			if(currentX<-(sliderWidth*(count-1))){
				currentX = -(sliderWidth * (count - 1));
				Toast.tip("已经是最后一个商品了")
			}
			this.props.changeIndex(parseInt(-currentX/sliderWidth))
			this.setState({
				x:currentX,
				isTransition:true,
				touchObject:null
			})
		}else{
			this.setState({
				isTransition:true,
				touchObject:null
			})
		}
	}
	handleTouchNext(){
		const {x,sliderWidth,count}=this.state
		let currentX=x
		if(currentX===-sliderWidth*(count-1)){
			currentX=-sliderWidth*(count-1)
			Toast.tip("已经是最后一个商品了")
		}else{
			currentX-=sliderWidth
		}
		this.setState({
			isTransition:true,
			x:currentX
		})
		this.props.changeIndex(parseInt(-currentX/sliderWidth))
	}
	handleTouchPreve(){
		const {x,sliderWidth,count}=this.state
		let currentX=x
		if(currentX===0){
			currentX=0
			Toast.tip("已经是第一个商品了")
		}else{
			currentX+=sliderWidth
		}
		this.setState({
			isTransition:true,
			x:currentX
		})
		this.props.changeIndex(parseInt(-currentX/sliderWidth))
	}
	render(){
		const {maskText}=this.props
		const {x,touchObject,isTransition}=this.state
		let offset=touchObject?(touchObject.x-touchObject.startX)+x:x
		const s={
				transform: 'translate3d(' + offset + 'px, 0, 0)',
				WebkitTransform: 'translate3d(' +offset + 'px, 0, 0)',
				MsTransform: 'translate3d(' +offset + 'px, 0, 0)',
			  }
		return (
			<div className="productitem">
				<div className="slider">
					<div 
						className={classnames("slider_cell flex",{transition:isTransition})}
						style={s}
						ref="slider"
						onTouchStart={this.swipeStart.bind(this)}
						onTouchMove={this.swipeMove.bind(this)}
						onTouchEnd={this.swipeEnd.bind(this)}
					>
						{this.props.children}
					</div>
				</div>
				<div className="productitem_mask">{maskText}</div>
				<div className="arrow arrow_left" onTouchEnd={this.handleTouchPreve.bind(this)}></div>
				<div className="arrow arrow_right" onTouchEnd={this.handleTouchNext.bind(this)}></div>
			</div>
		)
	}
}
export default ProductItem