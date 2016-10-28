import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { UserTop,Panel,Button,Toast,Loading } from '../components'

class RealName extends Component{
	constructor(props){
		super(props)

		this.state={
			weiXingH:"",
			trueName:"",
			sfzh:""
		}
	}
	componentWillMount(){
		if(!this.props.realname){
			this.getRealname()
		}
	}
	getRealname(){
		const {actions}=this.props
		const personalUrl=apiUrl+"/WSMyRegDetail"
		actions.fetchPosts("realname",personalUrl)
	}
	handleTouchEnd(){
		const {weiXingH,trueName,sfzh}=this.props
		const {actions}=this.props
		const realnameUrl=apiUrl+"/WSRealNameAuthentication?weiXingH="+weiXingH+"&trueName="+trueName+"&sfzh="+sfzh
		actions.fetchPosts("realname",realnameUrl)
			.then(data=>{
				console.log(data)
				if(data.posts.status==="success"){
					this.props.router.push("/")
					Toast.tip(data.posts.result)
				}else{
					Toast.tip(data.posts.result)
				}
			})
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	render(){
		document.title="实名认证"
		const {realname}=this.props
		const haveChecked=!realname?null:realname.result.haveChecked
		return (
			<div className="realname">
				{haveChecked && 
					<div>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信号" text="realname.result.weiXingH" />
							</div>
							<div className="car borderBottom">
								<Panel title="真实姓名"   hasBorder={true} text={realname.result.trueName}  />
								<Panel title="身份证号" text={realname.result.sfzh}   />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证照片" carImg={realname.result.sfzhZM} carReverseImg={realname.result.sfzhFM} hasCarImg={true} />
							</div>
						</div>
						<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
						  	<Button 
						  		btnCn="btn_big btn_radius btn_disabled"
						  		text="已认证"
						  	>
						  	</Button>
						</div>
					</div>
				}
				{haveChecked==false &&
					<div>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信号"  input="你的微信号" handleChange={this.handleChange.bind(this,"weiXingH")} />
							</div>
							<div className="car borderBottom">
								<Panel title="真实姓名"   hasBorder={true} input="你的真实姓名" handleChange={this.handleChange.bind(this,"trueName")} />
								<Panel title="身份证号" input="你的身份证号码" handleChange={this.handleChange.bind(this,"sfzh")}  />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证照片" UploadImg={true}   />
							</div>
						</div>
						<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
						  	<Button 
						  		handleTouchEnd={this.handleTouchEnd.bind(this)}
						  		btnCn="btn_big btn_radius btn_danger"
						  		text="保存并提交"
						  	>
						  	</Button>
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
		realname
	}=posts
	return {
		isFetching,
		realname
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RealName)) 

/*{haveChecked && 
					<div>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信号" text="realname.result.weiXingH" />
							</div>
							<div className="car borderBottom">
								<Panel title="真实姓名"   hasBorder={true} text={realname.result.trueName}  />
								<Panel title="身份证号" text={realname.result.sfzh}   />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证照片" carImg={realname.result.sfzhZM} carReverseImg={realname.result.sfzhFM} hasCarImg={true} />
							</div>
						</div>
						<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
						  	<Button 
						  		btnCn="btn_big btn_radius btn_disabled"
						  		text="已认证"
						  	>
						  	</Button>
						</div>
					</div>
				}*/