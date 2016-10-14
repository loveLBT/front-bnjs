import React,{Component} from 'react'
import {Link} from 'react-router'
import { withRouter } from 'react-router'
import Auth from '../components/Auth.js'
import {Input,Radio,Button,Toast} from '../components'

class Login extends Component{
	constructor(props){
		super(props)

		this.state={
			username:"",
			password:"",
		}
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	handleSubmit(){
		
		const {username,password}=this.state
	    Auth.login(username, password, (loggedIn) => {
	      if (!loggedIn)
	        return this.setState({ error: true })

	      const { location } = this.props

	      if (location.state && location.state.nextPathname) {
	        this.props.router.replace(location.state.nextPathname)
	      } else {
	        this.props.router.replace('/')
	      }
	    })
	}
	render(){
		document.title="用户登录"
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
					 />
					 <Input
					 	handleChange={this.handleChange.bind(this,"password")}
					 	hasInputBorder={true}
						iconName="icon_pwd"
					 	id="pwd"
					 	placeholder="密码"
					 	type="password"
					  />
					  <div className="radio_cell flex-ai">
						<Radio 
							id="remember"
							txt="记住密码"
							defaultChecked={true}
							radioCn="flex-1"
						/>
						<Link 
							to="/" 
							className="flex-1 remember" 
						>
							忘记密码？
						</Link>
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
					<Link className="not_user" to="/">
						没有账号立即?立即注册
					</Link>
				</p>
			</div>
		)
	}
}

export default withRouter(Login)

