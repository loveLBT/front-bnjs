import React,{Component} from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import Avator from '../Avator'
import Badge from '../Badge'
import './usertop.css'
class UserTop extends Component{
	renderOrderCount(){
		const {hasOrderCount}=this.props
		if(!hasOrderCount){
			return 
		}else{
			return (
				<div className="count_cell flex-ai">
					<p>共计：<span className="red">1760.00</span>/<span className="red">20盒</span></p>
				</div>
			)
		}
	}
	renderOrderCell(){
		const {hasOrderCell,badge1Num,badge2Num}=this.props
		if(!hasOrderCell){
			return 
		}else{
			return (
				<div className="order_cell">
					<ul>
						<li>
							<Link><i className="icon icon_myorder"></i><span>我的订单</span></Link>
							{badge1Num && 
								<Badge 
									count={badge1Num} 
								/>
							}
						</li>
						<li>
							<Link><i className="icon icon_userorder"></i><span>客户订单</span></Link>
							{badge2Num && 
								<Badge 
									count={badge2Num} 
								/>
							}
						</li>
					</ul>
				</div>
			)
		}
	}
	render(){
		const {hasOrderCount}=this.props
		return (
			<div className={classnames("usertop",{marginBottom:hasOrderCount})}>
				<div className="data_cell flex-ai">
					<Avator />
					<div className="name_cell flex-1 flex-column-around">
						<h1 className="name">陈丽云<i className="icon_name"></i></h1>
						<p className="leave">等级：<span>待定</span></p>
					</div>
					<div className="btn_cell flex-1">
						<button>受权</button>
					</div>
				</div>
				{this.renderOrderCell()}
				{this.renderOrderCount()}
			</div>
		)
	}
}
export default UserTop