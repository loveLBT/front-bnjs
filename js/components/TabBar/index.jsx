import React,{Component} from 'react'
import { Link,IndexLink } from 'react-router'
import './tabbar.css'
class TabBar extends Component{
	handleTouchStart(event){
		event.stopPropagation()
	}
	render(){
		return (
			<div style={this.props.style} id="tabbar" className="tabbar flex-center" onTouchStart={this.handleTouchStart.bind(this)}>
				<IndexLink className="tabbar_item flex-1" activeClassName="active" to='/'>
					<div className="tabbar_icon icon_home"></div>
					<p className="tabbar_label">首页</p>
				</IndexLink>                 
				<Link className="tabbar_item flex-1" activeClassName="active" to='/myorder'>
					<div className="tabbar_icon icon_myorder"></div>
					<p className="tabbar_label">我的订单</p>
				</Link>                 
				<Link className="tabbar_item flex-1" activeClassName="active" to='/userorder'>
					<div className="tabbar_icon icon_userorder"></div>
					<p className="tabbar_label">客户订单</p>
				</Link>                 
				<Link className="tabbar_item flex-1" activeClassName="active" to='/buyproduct'>
					<div className="tabbar_icon icon_buyproduct"></div>
					<p className="tabbar_label">产品购买</p>
				</Link>        
			</div>
		)
	}
}
export default TabBar