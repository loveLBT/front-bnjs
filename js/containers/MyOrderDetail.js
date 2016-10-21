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
		const myOrderDetailUrl=apiUrl+"/WSMyOrderDetail?orderId="+this.props.params.id
		actions.fetchPosts("myorderdetail",myOrderDetailUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.myorderdetail){
			this.setState({
				item:nextProps.posts.myorderdetail.result
			})
		}
	}
	render(){
		document.title="订单详情"
		let btnCount=[{btnText:"退货"}]
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