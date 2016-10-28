import React,{Component} from 'react'
import {ProductItem,Button,Loading,Toast} from '../components'

class BackProduct extends Component{
	handleTouchEnd(){
		Toast.tip("暂未开放，敬请期待")
	}
	render(){
		return (
			<div className="backproduct">
				<div className="count_cell flex-ai">
					<p>总量：<span style={{marginRight:'0.32rem'}} className="red">暂无数据</span>库存：<span className="red">暂无数据</span></p>
				</div>
				<div className="btn_center_cell">
				  	<Button
				  		handleTouchEnd={this.handleTouchEnd.bind(this)}
				  		btnCn="btn_center btn_radius btn_danger"
				  		text="退货"
				  	>
				  	</Button>
			     </div>
			</div>
		)
	}
}


export default BackProduct
