import React,{Component} from 'react'
import ReactDom from 'react-dom'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

class Scroll extends Component{
	render(){
		const scrollStyle={position:"relative",height:"100%",width:"100%"}
		const options={
  			click:true,
		}
		return (
			<ReactIScroll
				style={scrollStyle}
				iScroll={iScroll}
				options={options}
			>
				{this.props.children}
			</ReactIScroll>
		)
	}
}
export default Scroll
