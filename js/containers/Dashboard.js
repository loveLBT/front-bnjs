import React,{Component} from 'react'
import {Auth,TabBar} from '../components'

class Dashboard extends Component{
	render(){
		return (
			<div style={{position:"relative",width:"100%",height:"100%"}}>
				{this.props.children}
				<TabBar />
			</div>
		)
	}
}

export default Dashboard