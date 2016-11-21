import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UserTop from '../components/UserTop'
import Button from '../components/Button'
import OrderItem from '../components/OrderItem'
import Scroll from '../components/Scroll'

class MyRetail extends Component{
	componentWillMount(){
		const {actions}=this.props
		const myretailUrl=apiUrl+"/WSMyRetailSellOrders?page=1&pageNum=100"
		actions.fetchPosts("myretail",myretailUrl)
	}
	handleTouchEnd(){
		this.props.router.push("/retailproduct")
	}
	render(){
		document.title="我的零售"
		const {myretail}=this.props
		const items=!myretail?null:myretail.result.orderList
		return (
			<div className="myretail flex-column">
				<div className="btn_center_cell flex-0">
					<Button
						handleTouchEnd={this.handleTouchEnd.bind(this)}
						btnCn="btn_center btn_radius btn_danger"
					  	text="零售"
					 />
				</div>
				<div className="scroll_container flex-1">
					{items && 
						<Scroll>
							{items.map((item,i)=>{
								return (
									<OrderItem hasFooter={false} key={i} item={item} />
								)
							})}
						</Scroll>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		myretail
	}=posts
	return {
		isFetching,
		myretail
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyRetail) )