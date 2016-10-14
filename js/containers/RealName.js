import React,{Component} from 'react'
import { UserTop,Panel,Button,Toast,Loading } from '../components'

class RealName extends Component{
	render(){
		return (
			<div className="realname">
				<UserTop />
				<div className="data_cell">
					<div className="contact borderBottom">
						<Panel title="微信号"  />
					</div>
					<div className="car borderBottom">
						<Panel title="真实姓名"   hasBorder={true} />
						<Panel title="身份证号"   />
					</div>
					<div className="car borderBottom">
						<Panel title="身份证照片"   />
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