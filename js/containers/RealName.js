import React,{Component} from 'react'
import { UserTop,Panel,Button,Toast,Loading } from '../components'

class RealName extends Component{
	constructor(props){
		super(props)

		this.state={
			weiXingH:"",
			trueName:"",
			sfzh:""
		}
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	render(){
		document.title="实名认证"
		return (
			<div className="realname">
				<div className="data_cell">
					<div className="contact borderBottom">
						<Panel title="微信号"  input="你的微信号" handleChange={this.handleChange.bind(this,"weiXingH")} />
					</div>
					<div className="car borderBottom">
						<Panel title="真实姓名"   hasBorder={true} input="你的真实姓名" handleChange={this.handleChange.bind(this,"trueName")} />
						<Panel title="身份证号" input="你的身份证号码" handleChange={this.handleChange.bind(this,"sfzh")}  />
					</div>
					<div className="car borderBottom">
						<Panel title="身份证照片" UploadImg={true}   />
					</div>
				</div>
				<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
				  	<Button 
				  		btnCn="btn_big btn_radius btn_danger"
				  		text="保存并提交"
				  	>
				  	</Button>
				  </div>
			</div>
		)
	}
}

export default RealName