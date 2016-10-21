import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {UserTop,Panel,Toast} from "../components"

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
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.upapplydetail){
			this.setState({
				items:nextProps.posts.upapplydetail.result
			})
		}
	}
	handleTouchAgree(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSUpGradeRequestCheck?requestID="+this.props.params.id+"&isPass="+1
		actions.fetchPosts("agreedata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("apply")
			})
	}
	handleTouchReject(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSUpGradeRequestCheck?requestID="+this.props.params.id+"&isPass="+0
		actions.fetchPosts("rejectdata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("apply")
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
							className="writeBg" 
							hasStateCell={true}
							state={items.auditState}
							hasBeAuth={false}
							userData={items}
							handleTouchAgree={this.handleTouchAgree.bind(this)}
							handleTouchReject={this.handleTouchReject.bind(this)}
						/>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信" text={items.weiXingH} />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证号码" text={items.sfzh} />
							</div>
							<div className="car borderBottom">
								<Panel title="申请等级名称" text={items.agentLevelName} />
							</div>
							<div className="car borderBottom">
								<Panel title="申请当时累计" text={items.remark} />
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

export default connect(mapStateToProps,mapDispatchToProps)(UpApplyDetail)
