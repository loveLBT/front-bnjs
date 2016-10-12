import React,{Component} from 'react'
import { Link } from 'react-router'
import './menulink.css'

class MenuLink extends Component{
	render(){
		return (
			<Link className="menulink" to="/">
				<i className="icon"></i>
				<p>我的团队</p>
			</Link>
		)
	}
}

export default MenuLink