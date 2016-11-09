import React,{Component} from 'react'
import Avator from '../Avator'
import Button from '../Button'
import './applyitem.css'

class ApplyItem extends Component{
	render(){
		const {item}=this.props
		return (
			<div className="applyitem flex-ai">
				<div className="avator_cell">
					<Avator avatorUrl={item.gravatarThumb} />
				</div>
				<div className="msg_cell flex-column-between">
					<div>
						<h3 className="fontStyle_163">{item.trueName}（{item.phone}）</h3>
					</div>
					<div>
						<p className="fontStyle_136">身份证号：{item.sfzh}</p>
						<p className="fontStyle_136">申请等级：{item.agentLevelName}</p>
					</div>
				</div>
				<div className="btn_small_cell">
					<Button 
						btnCn="btn_small btn_radius btn_danger" 
						text="详情"
						handleTouchEnd={this.props.handleLinkTo}
					/>
				</div>
			</div>
		)
	}
}

export default ApplyItem