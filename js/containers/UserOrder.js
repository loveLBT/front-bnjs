import React,{Component} from 'react'
import * as actions from '../actions'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { UserTop,OrderItem,Scroll,Loading,Toast } from '../components'

class UserOrder extends Component{
	constructor(props){
		super(props)

		this.state={
			page:1,
			pageNum:100,
			items:[],
			loadingObj:{
				loading:false,
				text:null
			}
		}
	}
	componentWillMount(){
		const {page,pageNum}=this.state
		const {actions}=this.props
		const userOrderUrl=apiUrl+"/WSCustomerOrderList?page="+page+"&pageNum="+pageNum
		actions.fetchPosts("userorder",userOrderUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.userorder){
			this.setState({
				items:nextProps.posts.userorder.result.orderList
			})
		}
	}
	handleSend(id){
		console.log("发货")
	}
	handleCancel(id){
		const {actions}=this.props
		const userOrderCancelUrl=apiUrl+"/WSCustomerOrderCancel?orderId="+id
		this.setState({
			loadingObj:{loading:true,text:"订单正在取消，请等待"}
		})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("userordercancel",userOrderCancelUrl)
				.then((data)=>{
					this.setState({loadingObj:{loading:false,text:null}})
					Toast.tip(data.posts.result)
				})
		},2000)
	}
	handleDetail(id){
		 this.props.router.push('/userorder/'+id)
	}
	render(){
		document.title="用户订单"
		let btnCount=[]
		let lists=this.state.items.map((item,i)=>{
			if(item.state==0){
				btnCount=[{btnText:"发货",btnFn:this.handleSend.bind(this,item.orderId)},{btnText:"取消",btnFn:this.handleCancel.bind(this,item.orderId)},{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
			}else{
				btnCount=[{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
			}
			return (
				<OrderItem linkTo={/userorder/+item.orderId} item={item} key={i} btnText="详情" btnCount={btnCount} />
			)
		})
		return (
			<div className="userorder">
				<div className="count_cell flex-ai">
					<p>共计：<span className="red">1760.00</span>/<span className="red">20盒</span></p>
				</div>
				 <Scroll>
					<div className="scroll_cell">
						{lists}
					</div>
				</Scroll>
				{this.state.loadingObj.loading &&
					<Loading text={this.state.loadingObj.text} />
				}
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserOrder) ) 