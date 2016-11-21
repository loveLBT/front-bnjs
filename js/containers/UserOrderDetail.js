import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import OrderItem from '../components/OrderItem'

class OrderDetail extends Component{
	componentWillMount(){
		this.getUserOrderDetail()
	}
	getUserOrderDetail(){
		const {actions}=this.props
		const userOrderDetailUrl=apiUrl+"/WSCustomerOrderDetail?orderId="+this.props.params.id
		actions.fetchPosts("userorderdetail",userOrderDetailUrl)
	}
	render(){
		document.title="订单详情"
		const {userorderdetail}=this.props
		return (
			<div className="orderdetail">
				{userorderdetail &&
					<div>
						<div className="item borderBottom">
							<h3 className="title flex-ai">收货地址</h3>
							<div className="body">
								<p className="txt">{userorderdetail.result.ShipAddressRegion}</p>
							</div>
						</div>
						<div className="item borderBottom">
							<h3 className="title flex-ai">收货人</h3>
							<div className="body">
								<p className="txt">{userorderdetail.result.ShipName}</p>
							</div>
						</div>
						<div className="item borderBottom">
								<h3 className="title flex-ai">联系电话</h3>
								<div className="body">
									<a href={"tel:"+userorderdetail.result.ShipCellPhone} className="txt">{userorderdetail.result.ShipCellPhone}</a>
								</div>
							</div>
						<div className="item borderBottom">
							<h3 className="title flex-ai">订购商品</h3>
							<div className="body">
								<OrderItem style={{marginBottom:0}} item={userorderdetail.result} />
							</div>
						</div>
						<div className="item borderBottom">
							<h3 className="title flex-ai">物流单号</h3>
							<div className="body">
								<p className="txt">{userorderdetail.result.ShipOrderNumber}</p>
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		userorderdetail
	}=posts
	return {
		isFetching,
		userorderdetail
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail)