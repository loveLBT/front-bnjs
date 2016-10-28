import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { UserTop,OrderItem,Scroll,Loading } from '../components'

class MyOrder extends Component{
	constructor(props){
		super(props)

		this.state={
			page:1,
			pageNum:100,
		}
	}
	componentWillMount(){
		if(!this.props.myorder){
			this.getMyOrder()
		}
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
			<div className="myorder">
				{myorder && 
					<div className="count_cell flex-ai">
						<p>共计：<span className="red">{myorder.result.totalPrice}</span></p>
					</div>
				}
				<Scroll>
					<div className="scroll_cell">
						{myorder &&
							myorder.result.orderList.map((item,i)=>{
								btnCount=[{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
								return (
									<OrderItem linkTo={/myorder/+item.orderId} item={item} key={i} btnCount={btnCount} />
								)
							})
						}
					</div>
				</Scroll>
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
