import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UserTop from "../components/UserTop"
import Panel from "../components/Panel"
import Toast from "../components/Toast"
import Scroll from "../components/Scroll"


class ApplyDetail extends Component{
	componentWillMount(){
		this.getApplydetail()
	}
	getApplydetail(){
		const {actions}=this.props
		const applydetailUrl=apiUrl+"/WSMyCustomerRegRequestDetail?userID="+this.props.params.id
		actions.fetchPosts("applydetail",applydetailUrl)
	}
	handleTouchAgree(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSMyCustomerRegRequestCheck?userID="+this.props.params.id+"&isPass="+1
		actions.fetchPosts("agreedata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("/apply")
			})

	}
	handleTouchReject(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSMyCustomerRegRequestCheck?userID="+this.props.params.id+"&isPass="+0
		actions.fetchPosts("rejectdata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("/apply")
			})
	}
	render(){
		document.title="申请详情"
		const {applydetail}=this.props
		return (
			<div className="applydetail">
				{applydetail && 
					<div>
						<UserTop 
							className="writeBg borderBottom" 
							hasStateCell={true}
							state={0}
							hasBeAuth={false}
							userData={applydetail.result}
							auditingUrl={"/WSMyCustomerRegRequestCheck?userID="+this.props.params.id+"&isPass="}
							handleTouchAgree={this.handleTouchAgree.bind(this)}
							handleTouchReject={this.handleTouchReject.bind(this)}
						/>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信号" text={applydetail.result.weiXingH} />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证号码" text={applydetail.result.sfzh} hasBorder={true} />
								<Panel title="身份证照片" carImg={applydetail.result.sfzhZMThumb} carReverseImg={applydetail.result.sfzhFMThumb} hasCarImg={true} />
							</div>
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
		applydetail
	}=posts
	return {
		isFetching,
		applydetail
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ApplyDetail))
