import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ProductItem from "../components/ProductItem"
import Button from "../components/Button"
import Loading from "../components/Loading"
import Toast from "../components/Toast"
import Auth from "../components/Auth"

class BackProduct extends Component{
	componentWillMount(){
		this.getBackProduct()
	}
	getBackProduct(){
		const {actions}=this.props
		const backproductUrl=apiUrl+"/WSMyAccountData"
		actions.fetchPosts("backproduct",backproductUrl)
	}
	handleTouchEnd(){
		Toast.tip("暂未开放，敬请期待")
	}
	render(){
		document.title="退货"
		const {backproduct}=this.props
		return (
			<div className="backproduct">
				{backproduct &&
					<div className="count_cell flex-ai">
						<p className="fontStyle_143">总拿货量：<span style={{marginRight:'0.32rem'}} className="red">{backproduct.result.AllSumPurchase}盒</span>当前库存：<span className="red">{backproduct.result.AllStock}盒</span></p>
					</div>
				}
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

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		backproduct,
	}=posts
	return {
		isFetching,
		backproduct,
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(BackProduct) 
