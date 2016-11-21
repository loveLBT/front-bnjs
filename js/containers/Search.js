import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Input from '../components/Input'
import Button from '../components/Button'
import Toast from '../components/Toast'
import Loading from '../components/Loading'

class Search extends Component{
	constructor(props){
		super(props)

		this.state={
			phone:"",
			loading:false
		}
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	handleSubmit(){
		const {phone}=this.state
		const {actions}=this.props
		
		const reg=/^1[34578]\d{9}$/
		if(phone==""){
			Toast.tip("请输入手机号码")
			return false
		}
		if(!reg.test(phone)){
			Toast.tip("手机号格式不正确")
			return false
		}
		const searchUrl=apiUrl+"/WSQueryAuthorization?phone="+phone
		this.setState({loading:true})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("search",searchUrl)

				.then(data=>{
					if(data.posts.status=="success"){
						this.props.router.push("/empower2")
						sessionStorage.setItem("data",JSON.stringify(data.posts.result))
					}else{
						Toast.tip(data.posts.result.message)
					}
					this.setState({loading:false})
				})
		},2000)
	}
	render(){
		document.title="授权查询"
		return (
			<div className="search">
				<div className="logo"></div>
				<form action="">
					<Input
						handleChange={this.handleChange.bind(this,"phone")}
						hasInputBorder={true}
						iconName="icon_phone"
						id="phone"
						placeholder="请输入手机号"
						type="text"
					 />
				</form>
				<div className="btn_big_cell" style={{paddingTop:"0.64rem"}}>
				  	<Button
				  		handleTouchEnd={this.handleSubmit.bind(this)} 
				  		btnCn="btn_big btn_radius btn_danger"
				  		text="查询"
				  	>
				  	</Button>
				</div>
				{this.state.loading && 
					<Loading text="正在查询，请等待" />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search))