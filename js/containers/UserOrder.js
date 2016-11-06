import React,{Component} from 'react'
import * as actions from '../actions'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { UserTop,OrderItem,Scroll,Loading,Toast,Button } from '../components'

class  Popup extends Component{
	handlePopupSend(){
		const  {orderId,actions}=this.props
		const ordernumber=this.refs.ordernumber.value
		if(ordernumber==""){
			Toast.tip("订单号不能为空")
			return false
		}
		const sendOederUrl=apiUrl+"/WSCustomerOrderShip?orderId="+orderId+"&shipOrderNumber="+ordernumber
		this.props.setLoading(true,"正在发货，请等待")
		this.props.closePopup()
		this.timer=setTimeout(()=>{
			actions.fetchPosts("sendorder",sendOederUrl)
				.then(data=>{
					if(data.posts.status==="success"){
						this.props.getUserOrder()
						Toast.tip(data.posts.result)
					}else{
						Toast.tip(data.posts.result.message)
					}
					this.props.setLoading(false,null)
				})
		},2000)
	}
	handlePopupCancel(){
		this.props.closePopup()
	}
	render(){
		
		return (
			<div className="popup">
				<div className="mask"></div>
				<div className="popup_cell">
					<p className="title">请输入物流单号</p>
					<div className="content">
						<input ref="ordernumber" type="text"/>
					</div>
					<div className="footer flex">
						<Button 
							handleTouchEnd={this.handlePopupSend.bind(this)}
							btnCn="btn_center btn_radius btn_danger flex-1"
							text="确定"
							style={{marginRight:"0.32rem"}}
						 />
						 <Button 
						 	handleTouchEnd={this.handlePopupCancel.bind(this)}
							btnCn="btn_center btn_radius btn_danger flex-1"
							text="取消"
						 />
					</div>
				</div>
			</div>
		)
	}
}
 
class UserOrder extends Component{
	constructor(props){
		super(props)

		this.state={
			page:1,
			pageNum:100,
			loadingObj:{
				loading:false,
				text:null
			},
			popupObj:{
				popup:false,
				orderId:""
			}
		}
	}
	componentWillMount(){
		this.getUserOrder()
	}
	getUserOrder(){
		const {page,pageNum}=this.state
		const {actions}=this.props
		const userOrderUrl=apiUrl+"/WSCustomerOrderList?page="+page+"&pageNum="+pageNum
		actions.fetchPosts("userorder",userOrderUrl)
	}
	openPopup(id){
		this.setState({
			popupObj:{
				popup:true,
				orderId:id
			}
		})
	}
	closePopup(){
		this.setState({
			popupObj:{
				popup:false
			}
		})
	}
	setLoading(state,txt){
		this.setState({
			loadingObj:{
				loading:state,
				text:txt
			}
		})
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
					this.getUserOrder()
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
		const {userorder}=this.props
		let btnCount=[]
		return (
			<div className="userorder">
				{userorder &&
					<div className="count_cell flex-ai">
						<p>共计：<span className="red">{userorder.result.totalPrice}￥</span></p>
					</div>
				}
				<Scroll>
					<div className="scroll_cell">
						{userorder && 
							userorder.result.orderList.map((item,i)=>{
								if(item.state==0){
									btnCount=[{btnText:"发货",btnFn:this.openPopup.bind(this,item.orderId)},{btnText:"取消",btnFn:this.handleCancel.bind(this,item.orderId)},{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
								}else{
									btnCount=[{btnText:"详情",btnFn:this.handleDetail.bind(this,item.orderId)}]
								}
								return (
									<OrderItem linkTo={/userorder/+item.orderId} item={item} key={i} btnText="详情" btnCount={btnCount} />
								)
							})
						}
					</div>
				</Scroll>
				{this.state.loadingObj.loading &&
					<Loading text={this.state.loadingObj.text} />
				}
				{this.state.popupObj.popup &&
					<Popup 
						actions={this.props.actions}
						getUserOrder={this.getUserOrder.bind(this)}
						closePopup={this.closePopup.bind(this)} 
						orderId={this.state.popupObj.orderId}
						setLoading={this.setLoading.bind(this)}
					/>
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		userorder
	}=posts
	return {
		isFetching,
		userorder
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserOrder) ) 
