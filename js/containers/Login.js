import React,{Component} from 'react'
import {Link} from 'react-router'
import {Input,Radio,Button} from '../components'

class Login extends Component{
	render(){
		document.title="用户登录"
		return (
			<div className="login">
				<div className="logo"></div>
				<form action="">
					<Input
						hasChildBorder={true}
						iconName="icon_phone"
						id="phone"
						placeholder="请输入用户名"
					 />
					 <Input
					 	hasInputBorder={true}
						iconName="icon_pwd"
					 	id="pwd"
					 	placeholder="密码"
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

export default Login