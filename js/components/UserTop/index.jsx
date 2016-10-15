import React,{Component} from 'react'
import { Link } from 'react-router'
import objectAssign from "object-assign"
import classnames from 'classnames'
import Avator from '../Avator'
import Badge from '../Badge'
import Button from '../Button'
import './usertop.css'
class UserTop extends Component{ 
	renderStateCell(){
		const {hasStateCell}=this.props
		if(!hasStateCell){
			return 
		}else{
			return (
				<div className="state_cell flex-ai">
					<div className="flex-1">
						<p className="state">待审核</p>
					</div>
					<div className="btn_small_cell" style={{marginRight:"0.32rem"}}>
						<Button 
							btnCn="btn_small btn_radius btn_danger"
					  		text="同意"
						/>
					</div>
					<div className="btn_small_cell">
						<Button 
							btnCn="btn_small btn_radius btn_default"
					  		text="拒绝"
						/>
					</div>
				</div>
			)
		}
	}
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
							<Link><i className="icon icon_myorder"></i><span ref="badgePosition1">我的订单</span></Link>
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
	constructor(props){
		super(props)

		this.state={
			hasBeAuth:true,
			x:0,
		}
	}
	componentDidMount(){
		
	}
	componentWillMount(){
		this.setBeAuth()
	}
	setBeAuth(){
		const {hasBeAuth}=this.props
		if(hasBeAuth!=undefined){
			this.setState({
				hasBeAuth
			})
		}
	}
	render(){
		const {hasBeAuth}=this.state
		const {className}=this.props
		return (
			<div className={classnames("usertop",className)}>
				<div className="data_cell flex-ai">
					<Avator />
					<div className="name_cell flex-1 flex-column-around">
						<h1 className="name">陈丽云<i className="icon_name"></i></h1>
						<p className="leave">等级：<span>待定</span></p>
					</div>
					{hasBeAuth && 
						<div className="be_auth">
							<button>授权</button>
						</div>
					}
				</div>
				{this.renderOrderCell()}
				{this.renderOrderCount()}
				{this.renderStateCell()}
			</div>
		)
	}
}
export default UserTop