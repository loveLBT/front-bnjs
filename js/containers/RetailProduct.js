import React,{Component} from 'react'
import { withRouter } from 'react-router'
import {Link} from "react-router"
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ProductItem from '../components/ProductItem'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Toast from '../components/Toast'



class RetailProduct extends Component{
	constructor(props){
		super(props)

		this.state={
			items:[],
			index:0,
			count:0,
			price:0,
			loading:false
		}
	}
	componentWillMount(){
		const {index}=this.state
		const {retailproduct}=this.props
		if(!retailproduct){
			this.getRetailProduct()
		}else{
			this.setState({
				items:retailproduct.result.productlist,
				count:retailproduct.result.productlist[index].minConsumption,
				price:retailproduct.result.productlist[index].price
			})
		}
	}
	componentWillReceiveProps(nextProps){
		const {index}=this.state
		if(nextProps.retailproduct){
			this.setState({
				items:nextProps.retailproduct.result.productlist,
				count:nextProps.retailproduct.result.productlist[index].minConsumption,
				price:nextProps.retailproduct.result.productlist[index].price
			})
		}
	}
	getRetailProduct(){
		const {actions}=this.props
		const retailProductUrl=apiUrl+"/WSRetailSellProductList"
		actions.fetchPosts("retailproduct",retailProductUrl)
	}
	handleDecrement(){
		const {count,items,index}=this.state
		if(count>items[index].minConsumption){
			this.setState({
				count:count-1
			})
			this.refs.count.value=count-1
		}
	}
	handleIncrement(){
		const {count,items,index}=this.state
		let num=count
		num=parseInt(num)+1
		this.refs.count.value=num
		this.setState({
			count:num
		})
	}
	handleChangeCount(event){
		this.setState({
			count:event.target.value
		})
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
		const {actions}=this.props
		const {items,index,price,count}=this.state
		const ProductId=items[index].id
		const priceSum=price*count
		const submitRetailProductUrl=apiUrl+"/WSRetailSellOrder?productId="+ProductId+"&count="+count
		this.setState({
			loading:true
		})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("submitRetailProduct",submitRetailProductUrl)
				.then(data=>{
					this.setState({loading:false})
					if(data.posts.status==="success"){
						Toast.tip("零售成功")
						this.props.router.push('/myretail')
					}else{
						Toast.tip(data.posts.result.message)
					}
				})
		},2000)

	}
	handleFocus(){
		document.getElementsByClassName("dashboard")[0].style.overflow="visible"
		document.getElementsByClassName("buyproduct")[0].style.height="auto"
	}
	handleBlur(){
		document.getElementsByClassName("dashboard")[0].style.overflow="hidden"
		document.getElementsByClassName("buyproduct")[0].style.height="100%"
	}
	render(){
		document.title="零售列表"
		const {index,items,count,price}=this.state
		return (
			<div className="buyproduct">
				{items[index] &&
					<div className="buyproduct_cell">
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
						<div className="nature flex-ai">
							<p className="title fontStyle_143">
								建议零售价：<span className="red">￥{price*count}</span>
							</p>
							<div className="content flex-1">
								<span style={items[index] && {color:count<=items[index].minConsumption?"#ccc":"#333"}} onTouchEnd={this.handleDecrement.bind(this)}>-</span>
								<input onBlur={this.handleBlur.bind(this)} onFocus={this.handleFocus.bind(this)} ref="count" type="number" defaultValue={count} onChange={this.handleChangeCount.bind(this)} />
								<span onTouchEnd={this.handleIncrement.bind(this)}>+</span>
							</div>
						</div>
						<div className="btn_big_cell">
						  <Button
						  	btnCn="btn_big btn_radius btn_danger"
						  	text="零售"
						  	handleTouchEnd={this.handleTouchEnd.bind(this)}
						  >
					 	 </Button>
						</div>
					</div>		
				}
				
					
					
				{this.state.loading &&
					<Loading text="正在提交，请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		retailproduct
	}=posts
	return {
		isFetching,
		retailproduct
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RetailProduct) )
