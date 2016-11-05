import React,{Component} from 'react'
import {Link} from 'react-router'
import { withRouter } from 'react-router'
import Auth from '../components/Auth.js'
import {Input,Radio,Button,Toast,Loading} from '../components'

class Popup extends Component{
	handlePopupCancel(){
		this.props.closePopup()
	}
	render(){
		return (
			<div className="popup">
				<div className="mask"></div>
				<div className="popup_cell" style={{height:"4rem"}}>
					<p className="title">拨打电话</p>
					<div className="content">
						<a className="fontStyle_163" href="tel:110"><strong>百年济世堂：</strong>110</a>
					</div>
					<div className="footer flex">
						 <Button 
						 	handleTouchEnd={this.handlePopupCancel.bind(this)}
							btnCn="btn_center btn_radius btn_danger flex-1"
							text="取消"
						 />
					</div>
				</div>
			</div>
		)
	}
}

class Login extends Component{
	constructor(props){
		super(props)

		this.state={
			username:"",
			password:"",
			rememberPwd:true,
			loading:false,
		}
	}
	componentWillMount(){
		this.setRememberPwd()
		Auth.logout()
	}
	closePopup(){
		this.setState({
			popup:false
		})
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	handleChangeState(e){
		const {rememberPwd}=this.state
		this.setState({
			rememberPwd:!rememberPwd
		})
	}
	handleSubmit(){
		document.activeElement.blur()
		const {username,password}=this.state
		if(username===""){
			Toast.tip("请输入账号")
			return false
		}
		if(password===""){
			Toast.tip("请输入密码")
			return false
		}
		this.setState({loading:true})
		const loginUrl=apiUrl+"/wslogin?username="+username+"&password="+password
		Auth.login(loginUrl,(res)=>{
			this.setState({loading:false})
			if(!res.loggedIn)
				Toast.tip(res.errormsg)
			const { location } = this.props

		    if (location.state && location.state.nextPathname) {
		      this.props.router.replace(location.state.nextPathname)
		    } else {
		      this.props.router.replace('/')
		    }
		})
		this.requireRememberPwd(username,password)
		
	}
	setRememberPwd(){
		if(localStorage.password){
			this.setState({
				username:localStorage.username,
				password:localStorage.password
			})
		}else{
			this.setState({
				username:localStorage.username,
			})
		}
	}
	requireRememberPwd(user,pwd){
		const {rememberPwd}=this.state
		localStorage.username=user
		if(rememberPwd){
			localStorage.password=pwd
		}else{
			delete localStorage.password
		}
	}
	render(){
		document.title="用户登录"
		const {username,password,rememberPwd}=this.state
		return (
			<div className="login">
				<div className="logo"></div>
				<form action="">
					<Input
						handleChange={this.handleChange.bind(this,"username")}
						hasChildBorder={true}
						iconName="icon_phone"
						id="phone"
						placeholder="请输入账号"
						type="text"
						defaultValue={localStorage.username}
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"password")}
					 	hasInputBorder={true}
						iconName="icon_pwd"
					 	id="pwd"
					 	placeholder="密码"
					 	type="password"
					 	defaultValue={localStorage.password}
					  />
					  <div className="radio_cell flex-ai">
						<Radio 
							id="remember"
							txt="记住密码"
							defaultChecked={rememberPwd}
							radioCn="flex-1"
							type="checkbox"
							handleChange={this.handleChangeState.bind(this)}
						/>
						<a 
							href="tel:13575407573"
							className="flex-1 remember" 
							style={{display:"block"}}
						>
							忘记密码？
						</a>
					  </div>
					  <div className="btn_big_cell">
					  	<Button
					  		handleTouchEnd={this.handleSubmit.bind(this)} 
					  		btnCn="btn_big btn_radius btn_danger"
					  		text="登录"
					  	>
					  	</Button>
					  </div>
				</form>
				<p className="link_to">
					<Link className="not_user" to="/register">
						没有账号?立即注册
					</Link>
				</p>
				{this.state.loading &&
					<Loading text="正在登录，请等待" />
				}
			</div>
		)
	}
}

export default withRouter(Login)