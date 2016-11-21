import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import objectAssign from 'object-assign'
import {bindActionCreators} from 'redux'
import UserTop from '../components/UserTop'
import Panel from '../components/Panel'
import Toast from '../components/Toast'

class UpApplyDetail extends Component{
	constructor(props){
		super(props)

		this.state={
			items:"",
		}
	}
	componentWillMount(){
		const {actions}=this.props
		const upapplydetailUrl=apiUrl+"/WSUpGradeRequestDetail?requestID="+this.props.params.id
		actions.fetchPosts("upapplydetail",upapplydetailUrl)
	}
	componentWillReceiveProps(nextProps){
		let userData={}
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.upapplydetail){
			userData=objectAssign({},nextProps.posts.upapplydetail.result,{agentLevelName:nextProps.posts.upapplydetail.result.currentAgentName,agentLevelName2:nextProps.posts.upapplydetail.result.agentLevelName})
			this.setState({
				items:userData
			})
		}
	}
	handleTouchAgree(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSUpGradeRequestCheck?requestID="+this.props.params.id+"&isPass="+1
		actions.fetchPosts("agreedata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("/apply")
			})
	}
	handleTouchReject(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSUpGradeRequestCheck?requestID="+this.props.params.id+"&isPass="+0
		actions.fetchPosts("rejectdata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("/apply")
			})
	}
	render(){
		document.title="申请详情"
		const {items}=this.state
		return (
			<div className="applydetail">
				{!!items && 
					<div>
						<UserTop 
							className="writeBg borderBottom" 
							hasStateCell={true}
							state={items.auditState}
							hasBeAuth={false}
							userData={items}
							handleTouchAgree={this.handleTouchAgree.bind(this)}
							handleTouchReject={this.handleTouchReject.bind(this)}
						/>
						<div className="data_cell">
							<div className="car borderBottom">
								<Panel title="身份证号码" text={items.sfzh} />
							</div>
							<div className="car borderBottom">
								<Panel title="申请等级" text={items.agentLevelName2} />
							</div>
							<div className="car borderBottom">
								<Panel title="当前累计" text={items.remark} />
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	return {
		posts:state.posts
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UpApplyDetail))
