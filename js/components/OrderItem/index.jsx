import React,{Component} from 'react'
import { Link } from 'react-router'
import Button from '../Button'
import classnames from 'classnames'
import './orderitem.css'

class OrderItem extends Component{
	renderBottom(){
		const {isBottom,bottomData}=this.props
		return (
			<div className='footer flex-ai'>
				<div className="state flex-1">
					<span>未发货</span>
				</div>
				<div className="btn_small_cell">
					<Button 
						btnCn="btn_small btn_radius btn_danger"
					  	text="详情"
					/>
				</div>
			</div>
		)
	}
	handleClick(){
		console.log("aaa")
	}
	render(){
		return (
			<div className={classnames("orderitem")}>
				<Link to="/">
					<div className="header flex-ai borderBottom">
						<p className="date">2016-10-7{'  '}13:04:33</p>
					</div>
					<div className="content flex borderBottom">
						<div className="wares_img">
							<img width="100%" height="100%" src="../../../assets/img/ware_img.png" alt="商品"/>
						</div>
						<div className="wares_present flex-1 flex-column-between">
							<div>
								<h3 className="name">伊思蜗牛原液精华面膜5片/盒</h3>
							</div>
							<div>
								<p className="number">共【<span className="red">10</span>】盒</p>
								<p className="price">单价：<span className="red">￥88</span>{'   '}合计：<span className="red">￥888.00</span></p>
							</div>
						</div>
					</div>
				</Link>
				{this.renderBottom()}
			</div>
		)
	}
}
export default OrderItem