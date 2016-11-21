import React,{Component} from 'react'
import { withRouter } from 'react-router'
import {Link} from "react-router"
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ProductItem from "../components/ProductItem"
import Button from "../components/Button"
import Loading from "../components/Loading"
import Toast from "../components/Toast"



class BuyProduct extends Component{
	constructor(props){
		super(props)

		this.state={
			items:[],
			index:0,
			count:0,
			price:0,
			loading:false,
		}
	}
	componentWillMount(){
		const {index}=this.state
		const {product}=this.props
		if(!product){
			this.getProduct()
		}else{
			this.setState({
				items:product.result.productlist,
				count:product.result.productlist[index].minConsumption,
				price:product.result.productlist[index].price
			})
		}
	}
	componentWillReceiveProps(nextProps){
		const {index}=this.state
		if(nextProps.product){
			this.setState({
				items:nextProps.product.result.productlist,
				count:nextProps.product.result.productlist[index].minConsumption,
				price:nextProps.product.result.productlist[index].price
			})
		}
	}
	getProduct(){
		const {actions}=this.props
		const productUrl=apiUrl+"/WSProductList"
		actions.fetchPosts("product",productUrl)
	}
	handleDecrement(){
		const {count,items,index}=this.state
		if(count>items[index].minConsumption){
			this.setState({
				count:count-1
			})
			this.refs.count.value=count-1
		}
		this.changePrice(count-1)
	}
	handleIncrement(){
		const {count,items,index}=this.state
		let num=count
		num=parseInt(num)+1
		this.setState({
			count:num
		})
		this.refs.count.value=num
		this.changePrice(num)
	}
	handleChangeCount(event){
		let count=0
		if(event.target.value==""){
			count=0
		}
		count=event.target.value
		this.setState({
			count
		})
		this.changePrice(event.target.value)
	}
	changePrice(count){
		const {index,items}=this.state
		let agentLevels=items[index].agentLevels
		let i=0
		for(i;i<agentLevels.length;i++){
			if(count>=agentLevels[i].escalationThreshold){
				this.setState({
					price:agentLevels[i].price
				})
				return false
			}
		}
		if(i==agentLevels.length){
			this.setState({
				price:items[index].price
			})
		}
	}
	changeIndex(index){
		this.setState({
			index,
			count:this.state.items[index].minConsumption,
			price:this.state.items[index].price
		})
		this.refs.count.value=this.state.items[index].minConsumption
	}
	handleTouchEnd(){
		document.activeElement.blur()
		const {actions}=this.props
		const {items,index,price,count}=this.state
		const ProductId=items[index].id
		const priceSum=price*count
		const submitOrderUrl=apiUrl+"/WSSubmitOrder?productId="+ProductId+"&count="+count+"&priceSum="+priceSum
		if(count<items[index].minConsumption){
			Toast.tip("该商品的最低购买数量为"+items[index].minConsumption+"件")
			return false
		}
		this.setState({
			loading:true
		})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("submitorder",submitOrderUrl)
				.then(data=>{
					this.setState({loading:false})
					if(data.posts.status==="success"){
						Toast.tip("订单提交成功")
						this.props.router.push('/myorder')
					}else{
						Toast.tip(data.posts.result.message)
					}
				})
		},2000)

	}
	handleFocus(){
		document.getElementsByClassName("dashboard")[0].style.overflow="visible"
		document.getElementsByClassName("children")[0].style.overflow="visible"
	}
	handleBlur(){
		document.getElementsByClassName("dashboard")[0].style.overflow="hidden"
		document.getElementsByClassName("children")[0].style.overflow="hidden"
	}
	render(){
		document.title="商品列表"
		const {items,index,price,count}=this.state
		return (
			<div id="buyproduct" className="buyproduct">
				{items[index] &&
					<div className="buyproduct_cell">
						<ProductItem 
							changeIndex={this.changeIndex.bind(this)}
							maskText={items[index] && items[index].name}
						>
							{items.map((item,i)=>{
								return (
									<img src={hostUrl+item.pic} className="slider-item" key={i} alt=""/>
								)
							})}
						</ProductItem>
						<div className="nature flex-ai">
							<p className="title fontStyle_143">
								价格：<span className="red">￥{price*count}</span>
							</p>
							<div className="content flex-1">
								<span style={items[index] && {color:count<=items[index].minConsumption?"#ccc":"#333"}} onTouchEnd={this.handleDecrement.bind(this)}>-</span>
								<input onBlur={this.handleBlur.bind(this)} onFocus={this.handleFocus.bind(this)} ref="count" onChange={this.handleChangeCount.bind(this)} type="number" defaultValue={count} />
								<span onTouchEnd={this.handleIncrement.bind(this)}>+</span>
							</div>
						</div>
						<div className="btn_big_cell">
							<Button
							  	btnCn="btn_big btn_radius btn_danger"
							  	text="立即下单"
							  	handleTouchEnd={this.handleTouchEnd.bind(this)}
							 >
						 	 </Button>
						</div>
					</div>
				}
				{this.state.loading && 
					<Loading text="订单正在提交，请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		product
	}=posts
	return {
		isFetching,
		product
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BuyProduct) )
