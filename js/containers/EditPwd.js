import React,{Component} from 'react'
import {Link} from 'react-router'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Auth from '../components/Auth.js'
import {Input,Radio,Button,Toast,Loading} from '../components'

class EditPwd extends Component{
	constructor(props){
		super(props)

		this.state={
			oldpwd:"",
			newpwd:"",
			confirmpwd:"",
			loading:false
		}
	}
	handleTouchEnd(){
		const oldpwd=document.getElementById("oldpwd").value
		const newpwd=document.getElementById("newpwd").value
		const confirmpwd=document.getElementById("confirmpwd").value
		if(!oldpwd || !newpwd || !confirmpwd){
			Toast.tip("请输入")
			return false
		}else if(newpwd!==confirmpwd){
			Toast.tip("两次输入的密码不一致")
			return false
		}else{
			const {actions}=this.props
			const editpwdUrl=apiUrl+"/WSModifyPsd?oldPassWord="+oldpwd+"&newPassWord="+newpwd
			this.setState({
				loading:true
			})
			this.timer=setTimeout(()=>{
				actions.fetchPosts("editpwd",editpwdUrl)
					.then(data=>{
						this.setState({loading:false})
						if(data.posts.status==="success"){
							Toast.tip("密码修改成功")
							this.props.router.replace('/')
						}else{
							Toast.tip(data.posts.result.message)
						}
					})
			},2000)
		}
		
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	render(){
		document.title="修改密码"
		return (
			<div className="login">
				<div className="logo"></div>
				<form action="">
					<Input
						handleChange={this.handleChange.bind(this,"oldpwd")}
						hasChildBorder={true}
						iconName="icon_pwd"
						id="oldpwd"
						placeholder="原密码"
						type="password"
						ref="oldpwd"
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"newpwd")}
					 	hasChildBorder={true}
						iconName="icon_pwd"
					 	id="newpwd"
					 	placeholder="新密码"
					 	type="password"
					 	ref="newpwd"
					  />
					  <Input
					 	handleChange={this.handleChange.bind(this,"confirmpwd")}
					 	hasInputBorder={true}
						iconName="icon_pwd"
					 	id="confirmpwd"
					 	placeholder="重复新密码"
					 	type="password"
					 	ref="confirmpwd"
					  />
					  <div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
					  	<Button
					  		btnCn="btn_big btn_radius btn_danger"
					  		text="保存"
					  		handleTouchEnd={this.handleTouchEnd.bind(this)}
					  	>
					  	</Button>
					  </div>
				</form>
				{this.state.loading && 
					<Loading text="正在修改，请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	return {
		posts:state.posts
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditPwd))

