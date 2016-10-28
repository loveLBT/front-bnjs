import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { OrderItem,Scroll } from '../components'

class OrderDetail extends Component{
	componentWillMount(){
		if(!this.props.myorderdetail){
			this.getMyOrderDetail()
		}
	}
	getMyOrderDetail(){
		const {actions}=this.props
		const myOrderDetailUrl=apiUrl+"/WSMyOrderDetail?orderId="+this.props.params.id
		actions.fetchPosts("myorderdetail",myOrderDetailUrl)
	}
	render(){
		document.title="订单详情"
		let btnCount=[{btnText:"退货"}]
		const {myorderdetail}=this.props
		console.log(myorderdetail)
		return (
			<div className="orderdetail">
				{myorderdetail && 
					<Scroll>
						<div style={{paddingBottom:"1.33rem"}}>
							<div className="item borderBottom">
								<h3 className="title flex-ai">收货地址</h3>
								<div className="body">
									<p className="txt">{myorderdetail.result.ShipAddressRegion}</p>
								</div>
							</div>
							<div className="item borderBottom">
								<h3 className="title flex-ai">收获人</h3>
								<div className="body">
									<p className="txt">{myorderdetail.result.ShipName}</p>
								</div>
							</div>
							<div className="item borderBottom">
								<h3 className="title flex-ai">联系电话</h3>
								<div className="body">
									<p className="txt">{myorderdetail.result.ShipCellPhone}</p>
								</div>
							</div>
							<div className="item borderBottom">
								<h3 className="title flex-ai">订购商品</h3>
								<div className="body">
									<OrderItem style={{marginBottom:0}} item={myorderdetail.result} />
								</div>
							</div>
							<div className="item borderBottom">
								<h3 className="title flex-ai">拿货来源</h3>
								<div className="body">
									<p className="txt">{myorderdetail.result.UpTrueName}  （<span className="blue">{myorderdetail.result.UpPhone}</span>）</p>
								</div>
							</div>
							<div className="item borderBottom">
								<h3 className="title flex-ai">物流单号</h3>
								<div className="body">
									<p className="txt">{myorderdetail.result.orderCode}</p>
								</div>
							</div>
						</div>
					</Scroll>
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		myorderdetail
	}=posts
	return {
		isFetching,
		myorderdetail
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail)

/*<div className="item borderBottom">
					<h3 className="title flex-ai">收货地址</h3>
					<div className="body">
						<p className="txt">{item.ShipAddressRegion}</p>
					</div>
				</div>
				<div className="item borderBottom">
					<h3 className="title flex-ai">收货地址</h3>
					<div className="body">
						<OrderItem style={{marginBottom:0}} item={this.state.item} />
					</div>
				</div>
				<div className="item borderBottom">
					<h3 className="title flex-ai">拿货来源</h3>
					<div className="body">
						<p className="txt">{item.UpTrueName}  （<span className="blue">{item.UpPhone}</span>）</p>
					</div>
				</div>
				<div className="item borderBottom">
					<h3 className="title flex-ai">物流单号</h3>
					<div className="body">
						<p className="txt">{item.orderCode}</p>
					</div>
				</div>*/