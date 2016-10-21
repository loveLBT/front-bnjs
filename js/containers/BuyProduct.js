import React,{Component} from 'react'
import { withRouter } from 'react-router'
import {Link} from "react-router"
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ProductItem,Button,Loading,Toast} from "../components"



class BuyProduct extends Component{
	constructor(props){
		super(props)

		this.state={
			items:[],
			index:0,
			count:"",
			price:"",
			loading:false
		}
	}
	componentWillMount(){
		const {actions}=this.props
		const productUrl=apiUrl+"/WSProductList"
		actions.fetchPosts("product",productUrl)
	}
	componentWillReceiveProps(nextProps){
		const {index}=this.state
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.product){
			this.setState({
				items:nextProps.posts.product.result.productlist,
				count:nextProps.posts.product.result.productlist[index].minConsumption,
				price:nextProps.posts.product.result.productlist[index].price
			})
		}
	}
	handleDecrement(){
		const {count,items,index}=this.state
		if(count>items[index].minConsumption){
			this.setState({
				count:count-1
			})
		}
	}
	handleIncrement(){
		const {count,items,index}=this.state
		let num=count
		num+=1
		this.setState({
			count:num
		})
	}
	changeIndex(index){
		this.setState({
			index,
			count:this.state.items[index].minConsumption,
			price:this.state.items[index].price
		})
	}
	handleTouchEnd(){
		const {actions}=this.props
		const {items,index,price,count}=this.state
		const ProductId=items[index].id
		const priceSum=price*count
		const submitOrderUrl=apiUrl+"/WSSubmitOrder?productId="+ProductId+"&count="+count+"&priceSum="+priceSum
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
						Toast.tip("订单提交失败")
					}
				})
		},2000)

	}
	render(){
		document.title="商品列表"
		const {index,items,count,price}=this.state
		return (
			<div className="buyproduct">
				<div className="buyproduct_cell">
					{items[index] &&
						<ProductItem 
							changeIndex={this.changeIndex.bind(this)}
							maskText={items[index] && items[index].name}
						>
							{items.map((item,i)=>{
								return (
									<Link key={i} className="slider-item" style={{backgroundImage:'url('+hostUrl+item.pic+')'}}></Link>
								)
							})}
						</ProductItem>
					}
					<div className="nature flex-ai">
						<p className="title fontStyle_143">
							价格：<span className="red">￥{price*count}</span>
						</p>
						<div className="content flex-1">
							<span style={items[index] && {color:count<=items[index].minConsumption?"#ccc":"#333"}} onTouchEnd={this.handleDecrement.bind(this)}>-</span>
							<input disabled type="number" placeholder={count} />
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
				{this.state.loading &&
					<Loading text="订单正在提交，请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	return {
		posts:state.posts,
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BuyProduct) )