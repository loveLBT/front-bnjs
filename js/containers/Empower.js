import React,{Component} from 'react'
import {Link} from 'react-router'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loading from "../components/Loading"
import Toast from "../components/Toast"


class Empower extends Component{
	componentWillMount(){
		const {actions}=this.props
		const empowerUrl=apiUrl+"/WSGetAuthorization"
		actions.fetchPosts("empower",empowerUrl)
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.empower){
			if(nextProps.empower.result.error_code==="101"){
				Toast.tip(nextProps.empower.result.message)
			}
		}
		
	}
	render(){
		document.title="授权"
		const {empower}=this.props
		const data=!empower?null:empower.result
		return (
			<div className="empower">
				{!!data && 
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
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		empower
	}=posts
	return {
		isFetching,
		empower
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Empower)) 

