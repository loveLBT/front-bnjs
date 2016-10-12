import React,{Component} from 'react'
import {Link} from 'react-router'
import { Input,Radio,Button } from "../components"

class Register extends Component{
	render(){
		return (
			<div className="register">
				<div className="logo"></div>
				<form action="">
					<Input
						hasChildBorder={true}
						iconName="icon_phone"
						id="phone"
						placeholder="注册手机号"
					 />
					 <Input
						hasChildBorder={true}
						iconName="icon_user"
						id="user"
						placeholder="真实姓名"
					 />
					 <Input
						hasChildBorder={true}
						iconName="icon_pwd"
						id="pwd"
						placeholder="密码"
					 />
					 <Input
						hasChildBorder={true}
						iconName="icon_weixin"
						id="weixin"
						placeholder="微信号"
					 />
					 <Input
						hasInputBorder={true}
						iconName="icon_person"
						id="person"
						placeholder="推荐人手机号"
					 />
					 <div className="radio_cell flex-ai flex-multiple">
					 	<Radio 
					 		radioName="agentGroup"
							id="leave1"
							txt="总代"
							defaultChecked={true}
						/>
						<Radio 
							radioName="agentGroup"
							id="leave2"
							txt="二级代理"
						/>
						<Radio 
							radioName="agentGroup"
							id="leave3"
							txt="三级代理"
						/>
						<Radio 
							radioName="agentGroup"
							id="leave4"
							txt="四级代理"
						/>
					 </div>
					 <div className="btn_big_cell">
						<Button
							btnCn="btn_big btn_radius btn_danger"
					  		text="注册"
						 />
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

export default Register