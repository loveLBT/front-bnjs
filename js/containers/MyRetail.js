import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {UserTop,Button,OrderItem,Scroll} from "../components"

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
			<div className="myretail">
				<div className="btn_center_cell">
					<Button
						handleTouchEnd={this.handleTouchEnd.bind(this)}
						btnCn="btn_center btn_radius btn_danger"
					  	text="零售"
					 />
				</div>
				<Scroll>
					<div className="scroll_cell" style={{paddingBottom:"5.8rem"}}>
						{items &&
							items.map((item,i)=>{
								return (
									<OrderItem hasFooter={false} key={i} item={item} />
								)
							})
						}
					</div>
				</Scroll>
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