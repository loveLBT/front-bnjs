import React,{Component} from 'react'
import {Link} from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router'
import Auth from '../components/Auth'
import Input from '../components/Input'
import Radio from '../components/Radio'
import Button from '../components/Button'
import Toast from '../components/Toast'
import Loading from '../components/Loading'
import Scroll from '../components/Scroll'

class Register extends Component{
	constructor(props){
		super(props)

		this.state={
			loading:false,
			formArry:[
				{key:"UserName",value:"",type:"tel",tip:"手机号码格式不正确",reg:/^1[34578]\d{9}$/,placeholder:"手机号",hasChildBorder:true,iconName:"icon_phone",maxlength:"11"},
				{key:"TrueName",value:"",type:"text",tip:"名字由2-5个汉字组成",reg:/^[\u4E00-\u9FA5]{2,5}$/,placeholder:"真实姓名",hasChildBorder:true,iconName:"icon_user",maxlength:"20"},
				{key:"Password",value:"",type:"password",tip:"密码由6-20个字母数字下划线组成",reg:/^\w{6,20}$/,placeholder:"密码",hasChildBorder:true,iconName:"icon_pwd",maxlength:"20"},
				{key:"WeiXingH",value:"",type:"text",tip:"微信号由英文数字组成",reg:/^[A-Za-z0-9]+$/,placeholder:"微信号",hasChildBorder:true,iconName:"icon_weixin",maxlength:"20"},
				{key:"UpPhone",value:"",type:"tel",tip:"上级手机号码格式不正确",reg:/^1[34578]\d{9}$/,placeholder:"推荐人手机号",hasInputBorder:true,iconName:"icon_person",maxlength:"11"}
			],
			AgentID:"2",
		}
	}
	componentWillMount(){
		if(!this.props.register){
			this.getRegister()
		}
	}
	getRegister(){
		const {actions}=this.props
		const radioUrl=apiUrl+"/WSRegisterData"
		actions.fetchPosts("register",radioUrl)
	}
	handleChange(name,val){
		const {formArry}=this.state
		let arry=formArry
		arry.map((item,i)=>{
			if(item.key==name){
				item.value=val
			}
		})
		this.setState({
			formArry:arry
		})
	}
	handleChangeRadioState(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	getRegisterUrl(cb){
		const {formArry,AgentID}=this.state
		let registerUrl=apiUrl+"/WSRegisterUser?"
		for(var i=0;i<formArry.length;i++){
			if(formArry[i].value==""){
				Toast.tip(formArry[i].placeholder+"不能为空")
				cb(false)
				return false
			}else if(!formArry[i].reg.test(formArry[i].value)){
				Toast.tip(formArry[i].tip)
				cb(false)
				return false
			}
			registerUrl+=formArry[i].key+"="+formArry[i].value+"&"
		}
		cb(registerUrl+"AgentID="+AgentID)
	}
	renderRadios(){
		const {register}=this.props
		if(!!register){
			return (
				register.result.map((item,i)=>
					<Radio 
						key={i}
				 		radioName="agentGroup"
						txt={item.name}
						value={item.agentID}
						handleChange={this.handleChangeRadioState.bind(this,"AgentID")}
						defaultChecked={item.agentID==this.state.AgentID}
					/>
				)
			)
		}
	}
	handleSubmit(){
		document.activeElement.blur()
		const {formArry,AgentID}=this.state
		this.getRegisterUrl((url)=>{
			if(url){
				this.setState({loading:true})
				Auth.login(url,(res)=>{
					this.setState({loading:false})
					if(!res.loggedIn)
						Toast.tip(res.errormsg)
				    else{
				    	this.props.router.replace('/')
				    }
				})
			}
		})
	}
	render(){
		document.title="用户注册"
		const {register}=this.props
		const {formArry}=this.state
		return (
			<div className="register">
				<div className="logo"></div>
					{register && 
						<form action="">
							{formArry.map((item,i)=>{
								return (
									<Input
										key={i}
									 	handleChange={this.handleChange.bind(this,item.key)}
										hasChildBorder={item.hasChildBorder}
										hasInputBorder={item.hasInputBorder}
										iconName={item.iconName}
										type={item.type}
										placeholder={item.placeholder}
										maxlength={item.maxlength}
									 />
								)
							})

							}
							 <div className="radio_cell">
							 	{this.renderRadios()}
							 </div>
							 <div className="btn_big_cell">
								<Button
									handleTouchEnd={this.handleSubmit.bind(this)} 
									btnCn="btn_big btn_radius btn_danger"
							  		text="注册"
								 />
							 </div>
							 <p className="link_to">
								<Link className="not_user" to="/login">
									已有账号?马上登录
								</Link>
							 </p>
						</form>
					}
				{this.state.loading &&
					<Loading text="正在注册，请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		register
	}=posts
	return {
		isFetching,
		register
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Register))
