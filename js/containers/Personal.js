import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {UserTop,Panel} from '../components'

class Personal extends Component{
	componentWillMount(){
		const {actions}=this.props
		const personalUrl=apiUrl+"/WSMyRegDetail"
		actions.fetchPosts("personal",personalUrl)
	}
	render(){
		document.title="个人资料"
		const {personal}=this.props
		const data=!personal?null:personal.result
		return (
			<div className="personal">
				{!!data && 
					<div className="data_cell">
						<div className="contact borderBottom">
							<Panel title="微信" text={data.weiXingH} hasBorder={true} />
							<Panel title="手机号" text={data.phone} />
						</div>
						<div className="car borderBottom">
							<Panel title="身份证号码" text={data.sfzh} hasBorder={true} />
							<Panel title="身份证照片" carImg={data.sfzhZM} carReverseImg={data.sfzhFM} hasCarImg={true} />
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
		personal
	}=posts
	return {
		isFetching,
		personal
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Personal) 

