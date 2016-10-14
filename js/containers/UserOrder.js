import React,{Component} from 'react'
import { UserTop,OrderItem,Scroll } from '../components'

class UserOrder extends Component{
	render(){
		return (
			<div className="userorder">
				<UserTop
					className="marginBottom"
				 />
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

export default UserOrder