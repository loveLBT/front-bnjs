import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { UserTop,Panel,Button,Toast,Loading,Auth,TabBar } from '../components'

class RealName extends Component{
	constructor(props){
		super(props)

		this.state={
			weiXingH:"",
			trueName:"",
			sfzh:"",
			loading:false,
			userData:Auth.getUserData()
		}
	}
	componentWillMount(){
		this.getRealname()
	}
	getRealname(){
		const {actions}=this.props
		const personalUrl=apiUrl+"/WSMyRegDetail"
		actions.fetchPosts("realname",personalUrl)
	}
	handleTouchEnd(){
		document.activeElement.blur()
		const nameReg = /^[\u4E00-\u9FA5]{2,5}$/
		const weixinReg=/^[A-Za-z0-9]+$/
		const carReg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		const {weiXingH,trueName,sfzh}=this.state
		const {actions}=this.props
		const realnameUrl=apiUrl+"/WSRealNameAuthentication?weiXingH="+weiXingH+"&trueName="+trueName+"&sfzh="+sfzh
		if(weiXingH==""){
			Toast.tip("微信号不能为空")
			return false
		}
		if(!weixinReg.test(weiXingH)){
			Toast.tip("微信号由字母跟数字组成")
			return false
		}
		if(trueName==""){
			Toast.tip("真实姓名不能为空")
			return false
		}
		if(!nameReg.test(trueName)){
			Toast.tip("真实姓名由2-5个汉字组成")
			return false
		}
		if(sfzh==""){
			Toast.tip("身份证不能为空")
			return false
		}
		if(!carReg.test(sfzh)){
			Toast.tip("身份证格式不正确")
			return false
		}
		if(document.getElementById("zfzZM").value==""){
			Toast.tip("请上传身份证正面照片")
			return false
		}
		if(document.getElementById("zfzFM").value==""){
			Toast.tip("请上传身份证反面照片")
			return false
		}
		this.setState({loading:true})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("realname",realnameUrl)
				.then(data=>{
					if(data.posts.status==="success"){
						this.props.router.push("/")
						Toast.tip(data.posts.result)
					}else{
						Toast.tip(data.posts.result)
					}
					this.setState({loading:false})
				})
		},2000)
	}
	handleChange(name,val){
		let newState={}
		newState[name]=val
		this.setState(newState)
	}
	render(){
		document.title="实名认证"
		const {realname}=this.props
		const CheckState=!realname?null:realname.result.CheckState
		return (
			<div className="realname" style={{width:"100%",height:"100%"}}>
				<UserTop isUpload={true} userData={this.state.userData} />
				{CheckState==0||CheckState==1 &&
					<div>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel title="微信号" text={realname.result.weiXingH} />
							</div>
							<div className="car borderBottom">
								<Panel title="真实姓名"   hasBorder={true} text={realname.result.trueName}  />
								<Panel title="身份证号" text={realname.result.sfzh}   />
							</div>
							<div className="car borderBottom">
								<Panel title="身份证照片" carImg={realname.result.sfzhZMThumb} carReverseImg={realname.result.sfzhFMThumb} hasCarImg={true} />
							</div>
						</div>
						<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
						  	<Button 
						  		btnCn="btn_big btn_radius btn_disabled"
						  		text={CheckState==1?"已认证":"申请中"}
						  	>
						  	</Button>
						</div>
					</div>
				}
				{CheckState==-2||CheckState==-1 &&
					<div className="data_cell">
						<div className="contact borderBottom">
							<Panel title="微信号"  input={"你的微信号"} maxlength="20" handleChange={this.handleChange.bind(this,"weiXingH")} />
						</div>
						<div className="car borderBottom">
							<Panel title="真实姓名"   hasBorder={true} input={"你的真实姓名"} handleChange={this.handleChange.bind(this,"trueName")} />
							<Panel maxlength="17" title="身份证号" input={"你的身份证号码"} type="number" handleChange={this.handleChange.bind(this,"sfzh")}  />
						</div>
						<div className="car borderBottom">
							<Panel title="身份证照片" UploadImg={true}   />
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
				<TabBar/>
				{this.state.loading && 
					<Loading text="正在提交请等待" />
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