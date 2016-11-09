import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button,SliderTab,OrderItem} from "../components"

class MyAccount extends Component{
	componentWillMount(){
		const {actions}=this.props
		const myaccountdataUrl=apiUrl+"/WSMyAccountData"
		const cargorecordUrl=apiUrl+"/WSMyBuyOrders?page=1&pageNum=100"
		actions.fetchPosts("myaccountdata",myaccountdataUrl)
		actions.fetchPosts("cargorecord",cargorecordUrl)
	}
	renderItem1(){
		const {cargorecord}=this.props
		const items=!cargorecord?null:cargorecord.result.orderList
		return (
			<div className="item">
				<div>
					{!!items &&
						items.map((item,i)=>{
							return (
								<OrderItem linkTo={/myorder/+item.orderId} key={i} item={item} hasFooter={false} />
							)
						})
					}
				</div>
			</div>
		)
	}
	renderItem2(){
		const {shipmentrecord}=this.props
		const items=!shipmentrecord?null:shipmentrecord.result.orderList
		return (
			<div className="item">
				<div>
					{!!items &&
						items.map((item,i)=>{
							return (
								<OrderItem linkTo={/userorder/+item.orderId} key={i} item={item} hasFooter={false} />
							)
						})
					}
				</div>
			</div>
		)
	}
	handleChangeTab(){
		const {actions}=this.props
		const shipmentrecordUrl=apiUrl+"/WSMySellOrders?page=1&pageNum=100"
		actions.fetchPosts('shipmentrecord',shipmentrecordUrl)
	}
	handleTouchEnd(){
		this.props.router.push("/upgrade")
	}
	render(){
		document.title="我的账户"
		const myaccountdata=!this.props.myaccountdata?null:this.props.myaccountdata.result
		return (
			<div className="myaccount">
				{!!myaccountdata &&
					<div className="count_cell flex-ai">
						<p className="fontStyle_143">总拿货量：<span style={{marginRight:'0.32rem'}} className="red">{myaccountdata.AllSumPurchase}盒</span>当前库存：<span className="red">{myaccountdata.AllStock}盒</span></p>
					</div>
				}
				 <div className="btn_center_cell">
				  	<Button
				  		handleTouchEnd={this.handleTouchEnd.bind(this)}
				  		btnCn="btn_center btn_radius btn_danger"
				  		text="升级"
				  	>
				  	</Button>
				  </div>
				  <SliderTab 
				  		handleChangeTab={this.handleChangeTab.bind(this)}
						navArry={[
								{text:"拿货记录",item:this.renderItem1()},
								{text:"出货记录",item:this.renderItem2()}
							]}
				 />
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		myaccountdata,
		cargorecord,
		shipmentrecord
	}=posts
	return {
		isFetching,
		myaccountdata,
		cargorecord,
		shipmentrecord
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyAccount))   