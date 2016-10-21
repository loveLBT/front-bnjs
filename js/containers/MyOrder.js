import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { UserTop,OrderItem,Scroll } from '../components'

class MyOrder extends Component{
	constructor(props){
		super(props)

		this.state={
			page:1,
			pageNum:100,
			items:[]
		}
	}
	componentWillMount(){
		const {page,pageNum}=this.state
		const {actions}=this.props
		const myOrderUrl=apiUrl+"/WSMyOrderList?page="+page+"&pageNum="+pageNum
		actions.fetchPosts("myorder",myOrderUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.myorder){
			this.setState({
				items:nextProps.posts.myorder.result.orderList
			})
		}
	}
	handleDetail(id){
		 this.props.router.push('/myorder/'+id)
	}
	render(){
		document.title="我的订单"
		let btnCount=[]
		let lists=this.state.items.map((item,i)=>{
			btnCount=[{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
			return (
				<OrderItem linkTo={/myorder/+item.orderId} item={item} key={i} btnCount={btnCount} />
			)
		})
		return (
			<div className="myorder">
				<div className="count_cell flex-ai">
					<p>共计：<span className="red">1760.00</span>/<span className="red">20盒</span></p>
				</div>
				<Scroll>
					<div className="scroll_cell">
						{lists}
					</div>
				</Scroll>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyOrder))  