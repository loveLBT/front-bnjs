import React,{Component} from 'react'
import {UserTop,ApplyItem,Panel} from "../components"

class ApplyDetail extends Component{
	constructor(props){
		super(props)

		this.state={
			panelObj:{
				weixin:"ly20599860",
				carId:"30382198905195120",
			}
		}
	}
	render(){
		const {panelObj}=this.state
		return (
			<div className="applydetail">
				<UserTop 
					className="writeBg" 
					hasStateCell={true}
					hasBeAuth={false}
				/>
				<div className="data_cell">
					<div className="contact borderBottom">
						<Panel title="微信" text={panelObj.weixin} />
					</div>
					<div className="car borderBottom">
						<Panel title="身份证号码" text={panelObj.carId} hasBorder={true} />
						<Panel title="身份证照片" hasCarImg={true} />
					</div>
				</div>
			</div>
		)
	}
}

export default ApplyDetail