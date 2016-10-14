import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import objectAssign from 'object-assign'
import './toast.css'

let toastsContainerId="toastsContainerId"
let toastsContainer=document.getElementById(toastsContainerId)
if(!toastsContainer){
	toastsContainer = document.createElement('div')
	toastsContainer.className = 'toast'
	toastsContainer.id = toastsContainerId
	document.body.appendChild(toastsContainer)
}

let ToastStatics={
	queue:{},
	renderToast(){
		let options=ToastStatics.queue
		if(options===undefined){
			return 
		}

		let divCellId="divCellId"
		let divCell=document.getElementById(divCellId)
		if(!divCell){
			divCell=document.createElement('div')
			divCell.id=divCellId
			divCell.className='toast-cell'
			toastsContainer.appendChild(divCell)

			options.onFinish=function(){
				setTimeout(()=>{
					toastsContainer.removeChild(divCell)
				},1000)
			}

			ReactDOM.render(<Toast {...options}>{options.children}</Toast>, divCell)
			return divCell
		}
	},
	tip(options){
		if(typeof options==='string'){
			options={
				children:options
			}
		}
		ToastStatics.queue=objectAssign({},options,{show:true})
		return ToastStatics.renderToast()
	}
}

const Toast=React.createClass({
	statics:ToastStatics,
	getDefaultProps() {
	    return {
	     	show:false,
	     	time:3000,   
	    }
	},
	getInitialState() {
	    return {
	     	show:this.props.show     
	    }
	},
	componentWillReceiveProps(nextProps) {
	    if(nextProps.show!==undefined){
	    	this.setState({
	    		show:nextProps.show
	    	})
	    }
	},
	componentWillUpdate(nextProps, nextState) {
	    if(!nextState.show){
	    	this.props.onFinish()
	    	clearTimeout(this.timer)
	    }  
	},
	timer:null,
	componentDidMount() {
	    if(this.props.time){
	    	this.timer=setTimeout(()=>{
	    		this.setState({
	    			show:false
	    		})
	    	},this.props.time)
	    } 
	},
	componentWillUnmount() {
	    clearTimeout(this.timer)
	    this.setState({
	    	show:false
	    }) 
	},
	render(){
		return (//style={{display:this.state.show?'block':'none'}} 
			<div className="toast-container">
				<div className="toast-content" style={{opacity:this.state.show?'1':'0'}}>
					<div className="toast-children">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
})

export default Toast