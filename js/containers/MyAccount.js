import React,{Component} from 'react'
import classnames from "classnames"
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Button from '../components/Button'
import SliderTab from '../components/SliderTab'
import OrderItem from '../components/OrderItem'

class MyAccount extends Component{
	constructor(props){
		super(props)

		this.state={
			userData:JSON.parse(sessionStorage.getItem("userData"))
		}
	}
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
		const {userData}=this.state
		if(userData.agentLevelID!=1){
			this.props.router.push("/upgrade")
		}else{
			return false
		}
		
	}
	render(){
		document.title="我的账户"
		const {userData}=this.state
		const myaccountdata=!this.props.myaccountdata?null:this.props.myaccountdata.result
		return (
			<div className="myaccount flex-column">
				<div className="count_cell flex-ai flex-0">
					{!!myaccountdata &&
						<p className="fontStyle_143">总拿货量：<span style={{marginRight:'0.32rem'}} className="red">{myaccountdata.AllSumPurchase}盒</span>当前库存：<span className="red">{myaccountdata.AllStock}盒</span></p>
					}
				</div>
				<div className="btn_center_cell flex-0">
				  	<Button
				  		handleTouchEnd={this.handleTouchEnd.bind(this)}
				  		btnCn="btn_center btn_radius btn_danger"
				  		btnCn={classnames("btn_big btn_radius",{btn_danger:userData.agentLevelID!=1},{btn_disabled:userData.agentLevelID==1})}
				  		text="升级"
				  	>
				  	</Button>
				 </div>
				  <SliderTab 
				  		handleChangeTab={this.handleChangeTab.bind(this)}
				  		sliderBarCN="flex-1"
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