import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UserTop from '../components/UserTop'
import Panel from '../components/Panel'
import Button from '../components/Button'
import Toast from '../components/Toast'
import Loading from '../components/Loading'
import Auth from '../components/Auth'
import TabBar from '../components/TabBar'

class RealName extends Component{
	constructor(props){
		super(props)

		this.state={
			sfzh:"",
			loading:false,
			userData:Auth.getUserData(),
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
		const {sfzh}=this.state
		const weiXingH=document.getElementById("weiXingH").value
		const trueName=document.getElementById("trueName").value
		const {actions}=this.props
		const realnameUrl=apiUrl+"/WSRealNameAuthentication?weiXingH="+weiXingH+"&trueName="+trueName+"&sfzh="+sfzh
		if(weiXingH==""){
			Toast.tip("微信号不能为空")
			return false
		}
		if(!weixinReg.test(weiXingH)){
			Toast.tip("微信号是字母或者数字")
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
	renderRealName(){
		const {realname}=this.props
		const CheckState=!realname?null:realname.result.CheckState
		if(!!realname){
			switch (realname.result.CheckState) {
				case 0:
				case 1:
					return (
						<div className="data_cell flex-auto" style={{paddingBottom:"0.32rem"}}>
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
							<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
							  	<Button 
							  		btnCn="btn_big btn_radius btn_disabled"
							  		text={CheckState==1?"已认证":"审核中"}
							  	>
							  	</Button>
							</div>
						</div>
					)
					break;
				case -1:
				case -2:
				 	return (
						<div className="data_cell flex-auto" style={{paddingBottom:"0.32rem"}}>
							<div className="contact borderBottom">
								<Panel title="微信号" input={"你的微信号"}  defaultValue={realname.result.weiXingH} maxlength="20" id="weiXingH" />
							</div>
							<div className="car borderBottom">
								<Panel title="真实姓名" input={"你的真实姓名"}   hasBorder={true} defaultValue={realname.result.trueName} maxlength="20" id="trueName" />
								<Panel maxlength="18" title="身份证号" input={"你的身份证号码"} handleChange={this.handleChange.bind(this,"sfzh")}  />
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
				 	)
				 	break;
				default:
					return <div></div>
					break;
			}
		}
	}
	render(){
		document.title="实名认证"
		const {realname}=this.props
		const CheckState=!realname?null:realname.result.CheckState
		return (
			<div className="realname" >
				{this.renderRealName()}
				{this.state.loading && 
					<Loading text="正在提交，请等待" />
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

