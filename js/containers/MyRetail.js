import React,{Component} from 'react'
import {UserTop,Button,OrderItem,Scroll} from "../components"

class MyRetail extends Component{
	render(){
		return (
			<div className="myretail">
				<UserTop />
				<div className="btn_center_cell">
					<Button
						btnCn="btn_center btn_radius btn_danger"
					  	text="零售"
					 />
				</div>
				<Scroll>
					<div className="scroll_cell">
						<OrderItem />
						<OrderItem />
						<OrderItem />
						<OrderItem />
						<OrderItem />
						<OrderItem />
					</div>
				</Scroll>
			</div>
		)
	}
}

export default MyRetail