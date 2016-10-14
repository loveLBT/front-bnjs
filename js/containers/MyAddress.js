import React,{Component} from 'react'
import {UserTop,Panel,Button} from "../components"

class MyAddress extends Component{
	render(){
		return (
			<div className="myaddress">
				<UserTop />
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