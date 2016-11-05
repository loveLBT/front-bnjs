import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Auth,TabBar,UserTop,Loading} from '../components'

class Dashboard extends Component{
	constructor(props){
		super(props)

		this.state={
			userData:Auth.getUserData()
		}
	}
	render(){
		const {isFetching}=this.props
		const {userData}=this.state
		return (
			<div className="dashboard" >
				{!this.props.params.id && 
					<UserTop isUpload={true} userData={userData} />
				}
				
				{this.props.children}
				<TabBar />
				{this.props.isFetching && 
					<Loading text="数据正在加载请稍等。。。" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
	}=posts
	return {
		isFetching,
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard) 
