import React,{Component} from 'react'
import Avator from '../Avator'
import Button from '../Button'
import './applyitem.css'

class ApplyItem extends Component{
	render(){
		return (
			<div className="applyitem flex-ai">
				<div className="avator_cell">
					<Avator />
				</div>
				<div className="msg_cell flex-1 flex-column-between">
					<div>
						<h3 className="fontStyle_163">杨涛（18926584403）</h3>
					</div>
					<div>
						<p>身份证号：330382198906192510</p>
						<p>等级：三级代理</p>
					</div>
				</div>
				<div className="btn_small_cell">
					<Button 
						btnCn="btn_small btn_radius btn_danger" 
						text="详情"
					/>
				</div>
			</div>
		)
	}
}

export default ApplyItem