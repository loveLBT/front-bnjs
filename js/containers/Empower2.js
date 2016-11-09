import React,{Component} from 'react'
import {Link} from 'react-router'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Empower2 extends Component{
	constructor(props){
		super(props)

		this.state={
			data:JSON.parse(sessionStorage.getItem("data"))
		}
	}
	componentWillUnmount(){
		 delete sessionStorage.data
	}
	render(){
		document.title="授权"
		const {data}=this.state
		return (
			<div className="empower">
				<div className="certificate_cell">
					<div className="msg_cell">
						<h3 className="msg name"><strong>{data.trueName}</strong></h3>
						<h3 className="msg leaver"><strong>{data.agentLevelName}</strong></h3>
						<h3 className="msg upname"><strong>{data.upTrueName}</strong></h3>
						<p className="number carid">{data.sfzh}</p>
						<p className="number weixin">{data.weiXingH}</p>
						<p className="number phone">{data.userPhone}</p>
						<p className="number code">{data.authorizationCode}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Empower2

