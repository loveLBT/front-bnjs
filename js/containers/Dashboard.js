import React,{Component} from 'react'
import {Auth,TabBar,UserTop} from '../components'

class Dashboard extends Component{
	constructor(props){
		super(props)

		this.state={
			userData:Auth.getUserData()
		}
	}
	render(){
		const {userData}=this.state
		return (
			<div style={{position:"relative",width:"100%",height:"100%"}}>
				{!this.props.params.id && 
					<UserTop userData={userData} />
				}
				{this.props.children}
				<TabBar />
			</div>
		)
	}
}

export default Dashboard