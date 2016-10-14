import React,{Component} from 'react'
import { UserTop,OrderItem,Scroll } from '../components'

class MyOrder extends Component{
	constructor(props){
		super(props)

		this.state={
			
		}
	}
	render(){
		return (
			<div className="myorder">
				<UserTop
					className="marginBottom"
					hasOrderCount={true}
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

export default MyOrder