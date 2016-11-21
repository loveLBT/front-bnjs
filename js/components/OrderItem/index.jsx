import React,{Component} from 'react'
import { Link } from 'react-router'
import Button from '../Button'
import classnames from 'classnames'
import objectAssign from 'object-assign'
import './orderitem.css'

class OrderItem extends Component{
	constructor(props){
		super(props)

		this.state={
			hasFooter:props.hasFooter==undefined?true:false
		}
	}
	render(){
		const {hasFooter}=this.state
		const {item,btnCount,linkTo,style}=this.props
		const s=objectAssign({},style)
		return (
			<div style={s} className={classnames("orderitem",{borderBottom:!hasFooter})}>
				<Link to={linkTo}>
					<div className="header flex-ai borderBottom">
						<p className="date">{item.createdDate}</p>
					</div>
					<div className={classnames("content flex",{borderBottom:hasFooter})}>
						<div className="wares_img">
							<img width="100%" height="100%" src={hostUrl+item.ThumbnailsUrl} alt="商品"/>
						</div>
						<div className="wares_present flex-1 flex-column-between">
							<div>
								<h3 className="name">{item.name}</h3>
							</div>
							<div>
								<p className="number">共【<span className="red">{item.count}</span>】盒</p>
								<p className="price">{hasFooter && <span>单价</span>}{!hasFooter && <span>建议零售价</span>}：<span className="red">￥{item.price}</span>{'   '}合计：<span className="red">￥{item.priceSum}</span></p>
							</div>
						</div>
					</div>
				</Link>
				{hasFooter && 
					<div className='footer_cell flex-ai'>
						<div className="state flex-1">
							<span>{item.stateName}</span>
						</div>
						{btnCount &&
							btnCount.map((item,i)=>{
								return (
									<div key={i} className="btn_small_cell" style={{marginLeft:"0.32rem"}}>
										<Button 
											handleTouchEnd={item.btnFn}
											btnCn="btn_small btn_radius btn_danger"
										  	text={item.btnText}
										/>
									</div>
								)
							})
						}
					</div>
				}
			</div>
		)
	}
}
export default OrderItem