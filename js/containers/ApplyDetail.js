import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {UserTop,Panel,Toast} from "../components"

class ApplyDetail extends Component{
	constructor(props){
		super(props)

		this.state={
			items:"",
		}
	}
	componentWillMount(){
		const {actions}=this.props
		const applydetailUrl=apiUrl+"/WSMyCustomerRegRequestDetail?userID="+this.props.params.id
		actions.fetchPosts("applydetail",applydetailUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.applydetail){
			this.setState({
				items:nextProps.posts.applydetail.result
			})
		}
	}
	handleTouchAgree(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSMyCustomerRegRequestCheck?userID="+this.props.params.id+"&isPass="+1
		actions.fetchPosts("agreedata",auditingUrl)
			.then(data=>{
				Toast.tip(data.posts.result.message)
				this.props.router.push("apply")
			})

	}
	handleTouchReject(){
		const {actions}=this.props
		const auditingUrl=apiUrl+"/WSMyCustomerRegRequestCheck?userID="+this.props.params.id+"&isPass="+0
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
							state={0}
							hasBeAuth={false}
							userData={items}
							auditingUrl={"/WSMyCustomerRegRequestCheck?userID="+this.props.params.id+"&isPass="}
							handleTouchAgree={this.handleTouchAgree.bind(this)}
							handleTouchReject={this.handleTouchReject.bind(this)}
						/>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信" text={items.weiXingH} />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证号码" text={items.sfzh} />
								<Panel title="身份证照片" carImg={items.sfzhZM} carReverseImg={items.sfzhFM} hasCarImg={true} />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ApplyDetail))
