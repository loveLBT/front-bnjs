import React,{Component} from 'react'
import { Link } from 'react-router'
import {UserTop,MenuLink} from '../components'

class Home extends Component{
	render(){
		return (
			<div>
				<UserTop hasOrderCell={true} badge1Num={10} badge2Num={8} />
				<div className="menu_cell flex">
					
				</div>
			</div>
		)
	}
}

export default Home