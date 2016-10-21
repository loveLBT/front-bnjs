import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { OrderItem } from '../components'

class OrderDetail extends Component{
	constructor(props){
		super(props)

		this.state={
			item:{}
		}
	}
	componentWillMount(){
		const {actions}=this.props
		const userOrderDetailUrl=apiUrl+"/WSCustomerOrderDetail?orderId="+this.props.params.id
		actions.fetchPosts("userorderdetail",userOrderDetailUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.userorderdetail){
			this.setState({
				item:nextProps.posts.userorderdetail.result
			})
		}
	}
	render(){
		document.title="订单详情"
		const {item}=this.state
		return (
			<div className="orderdetail">
				<div className="item borderBottom">
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
					<h3 className="title flex-ai">物流单号</h3>
					<div className="body">
						<p className="txt">{item.orderCode}</p>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps=state=>{
	return {
		posts:state.posts
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail)