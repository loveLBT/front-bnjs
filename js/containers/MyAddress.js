import React,{Component} from 'react'
import {UserTop,Panel,Button} from "../components"

class MyAddress extends Component{
	render(){
		document.title="我的地址"
		return (
			<div className="myaddress">
				<div className="data_cell">
					<div className="contact borderBottom">
						<Panel title="收货人" hasBorder={true}  />
						<Panel title="手机号"  />
					</div>
				</div>
				<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
				  	<Button 
				  		btnCn="btn_big btn_radius btn_danger"
				  		text="保存"
				  	>
				  	</Button>
				  </div>
			</div>
		)
	}
}

export default MyAddress