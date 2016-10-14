import React,{Component} from 'react'
import { OrderItem } from '../components'

class Panel extends Component{
	render(){
		const {title,contentHtml}=this.props
		return (
			<div className="panel borderBottom">
				<h3 className="title flex-ai">{title}</h3>
				<div className="content">
					{contentHtml}
				</div>
			</div>
		)
	}
}

class OrderDetail extends Component{
	render(){
		document.title="订单详情"
		const order=<OrderItem />
		const address=<p>浙江-温州市-鹿城区-浙江创意园D105</p>
		return (
			<div className="orderdetail">
				<Panel 
					title="收获地址"
					contentHtml={address}
				/>
				<Panel 
					title="订购商品"
					contentHtml={order}
				/>
				
			</div>
		)
	}
}

export default OrderDetail