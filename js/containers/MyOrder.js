
import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UserTop from '../components/UserTop'
import OrderItem from '../components/OrderItem'
import Loading from '../components/Loading'
import Scroll from '../components/Scroll'

class MyOrder extends Component{
	constructor(props){
		super(props)

		this.state={
			page:1,
			pageNum:100,
		}
	}
	componentWillMount(){
		this.getMyOrder()
	}
	
	getMyOrder(){
		const {page,pageNum}=this.state
		const {actions}=this.props
		const myOrderUrl=apiUrl+"/WSMyOrderList?page="+page+"&pageNum="+pageNum
		actions.fetchPosts("myorder",myOrderUrl)
	}
	handleDetail(id){
		 this.props.router.push('/myorder/'+id)
	}
	render(){
		document.title="我的订单"
		const {myorder}=this.props
		let btnCount=[]
		return (
			<div className="myorder flex-column">
				<div className="count_cell flex-ai flex-0">
					{myorder && 
						<p>共计：<span className="red">￥{myorder.result.totalPrice}</span></p>
					}
				</div>
				<div className="scroll_container flex-1">
					{myorder && 
						<Scroll>
							{myorder.result.orderList.map((item,i)=>{
								btnCount=[{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
								return (
									<OrderItem linkTo={/myorder/+item.orderId} item={item} key={i} btnCount={btnCount} />
								)
							})}
						</Scroll>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		myorder
	}=posts
	return {
		isFetching,
		myorder
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyOrder)) 
