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
					hasOrderCount={true} 
					badge1Num={10} 
					badge2Num={8} 
				/>
				<Scroll>
					<div className="order_cell">
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