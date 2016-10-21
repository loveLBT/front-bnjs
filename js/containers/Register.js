import React,{Component} from 'react'
import {Link} from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router'
import Auth from '../components/Auth.js'
import { Input,Radio,Button,Toast,Loading } from "../components"

class Register extends Component{
	constructor(props){
		super(props)

		this.state={
			register:"",
			loading:false,
			UserName:"",
			TrueName:"",
			Password:"",
			WeiXingH:"",
			UpPhone:"",
			AgentID:"2",
		}
	}
	componentWillMount(){
		const {actions}=this.props
		const radioUrl=apiUrl+"/WSRegisterData"
		actions.fetchPosts("register",radioUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.register){
			this.setState({
				register:nextProps.posts.register
			})
		}
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	renderRadios(){
		const {register}=this.state
		if(!!register){
			return (
				register.result.map((item,i)=>
					<Radio 
						key={i}
				 		radioName="agentGroup"
						txt={item.name}
						value={item.agentID}
						handleChange={this.handleChange.bind(this,"AgentID")}
						defaultChecked={item.agentID==this.state.AgentID}
					/>
				)
			)
		}
	}
	handleSubmit(){
		const {UserName,TrueName,Password,WeiXingH,UpPhone,AgentID}=this.state
		const registerUrl=apiUrl+'/WSRegisterUser?UserName='+UserName+'&Password='+Password+'&TrueName='+TrueName+'&WeiXingH='+WeiXingH+'&UpPhone='+UpPhone+'&AgentID='+AgentID
		this.setState({loading:true})
		Auth.login(registerUrl,(res)=>{
			this.setState({loading:false})
			if(!res.loggedIn)
				Toast.tip(res.errormsg)
		    else{
		    	this.props.router.replace('/')
		    }
		})
	}
	render(){
		document.title="用户注册"
		return (
			<div className="register">
				<div className="logo"></div>
				<form action="">
					<Input
						handleChange={this.handleChange.bind(this,"UserName")}
						hasChildBorder={true}
						iconName="icon_phone"
						id="phone"
						placeholder="注册手机号"
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"TrueName")}
						hasChildBorder={true}
						iconName="icon_user"
						id="user"
						placeholder="真实姓名"
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"Password")}
						hasChildBorder={true}
						iconName="icon_pwd"
						id="pwd"
						placeholder="密码"
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"WeiXingH")}
						hasChildBorder={true}
						iconName="icon_weixin"
						id="weixin"
						placeholder="微信号"
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"UpPhone")}
						hasInputBorder={true}
						iconName="icon_person"
						id="person"
						placeholder="推荐人手机号"
					 />
					 <div className="radio_cell flex-ai flex-multiple">
					 	{this.renderRadios()}
					 </div>
					 <div className="btn_big_cell">
						<Button
							handleTouchEnd={this.handleSubmit.bind(this)} 
							btnCn="btn_big btn_radius btn_danger"
					  		text="注册"
						 />
					 </div>
				</form>
				<p className="link_to">
					<Link className="not_user" to="/login">
						已有账号?马上登录
					</Link>
				</p>
				{this.state.loading &&
					<Loading text="正在注册，请等待" />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Register))