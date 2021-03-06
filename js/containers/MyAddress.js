import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UserTop from '../components/UserTop'
import Panel from '../components/Panel'
import Button from '../components/Button'
import LArea from '../components/LArea'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import Auth from '../components/Auth'
import TabBar from '../components/TabBar'

class MyAddress extends Component{
	constructor(props){
		super(props)

		this.state={
			myaddress:null,
			loading:false,
			userData:Auth.getUserData()
		}

	}
	componentWillMount(){
		this.getMyAddress()
	}
	componentWillReceiveProps(nextProps){
		if(this.props.myaddress!=nextProps.myaddress && nextProps.myaddress.result){
			this.setState({
				myaddress:nextProps.myaddress.result
			})
		}
	}
	getMyAddress(){
		const {actions}=this.props
		const myaddressUrl=apiUrl+"/WSGetAddress"
		actions.fetchPosts("myaddress",myaddressUrl)
	}
	handleTouchEnd(){
		document.activeElement.blur()
		const{actions}=this.props
		let regionCode=document.getElementById("value2").value.split(",")[2]
		const {name,cellphone,address}=this.state.myaddress
		const nameReg=/^[\u4E00-\u9FA5]{2,5}$/
		const telReg=/^1[34578]\d{9}$/
		if(name==""){
			Toast.tip("收货人姓名不能为空")
			return false
		}
		if(!nameReg.test(name)){
			Toast.tip("收货人名字由2-5个汉字组成")
			return false
		}
		if(cellphone==""){
			Toast.tip("收货人手机号不能为空")
			return false
		}
		if(!telReg.test(cellphone)){
			Toast.tip("收货人手机号格式不正确")
			return false
		}
		if(regionCode==""){
			Toast.tip("所在地区不能为空")
			return false
		}
		if(address==""){
			Toast.tip("请填写详细地址")
			return false
		}
		const submitaddressUrl=apiUrl+"/WSEditAddress?name="+name+"&cellphone="+cellphone+"&code="+regionCode+"&address="+address
		this.setState({loading:true})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("submitaddress",submitaddressUrl)
				.then(data=>{
					this.setState({loading:false})
					if(data.posts.status==="success"){
						Toast.tip("保存成功")
						this.props.router.push("/buyproduct")
					}else{
						Toast.tip(data.posts.result.message)
					}
				})
		},2000)
	}
	handleChange(name,value){
		const {myaddress}=this.state
		let newMyaddress=myaddress
		newMyaddress[name]=value
		this.setState({
			myaddress:newMyaddress
		})
	}
	handleChangeEdit(event){
		const {myaddress}=this.state
		let newMyaddress=myaddress
		newMyaddress.address=event.target.value
		this.setState({
			myaddress:newMyaddress
		})
	}
	componentWillUnmount(){
		if(document.getElementsByClassName("gearArea")[0])
			document.body.removeChild(document.getElementsByClassName("gearArea")[0])
	}
	render(){
		document.title="我的地址"
		const {myaddress}=this.state
		return (
			<div className="myaddress">
				{myaddress && 
					<div className="data_cell">
						<div className="contact borderBottom">
							<Panel handleChange={this.handleChange.bind(this,"name")} title="收货人" hasBorder={true} input="收货人姓名" defaultValue={myaddress.name} maxlength="20"  />
							<Panel handleChange={this.handleChange.bind(this,"cellphone")} title="手机号" type="tel" input="收货人手机号" defaultValue={myaddress.cellphone} maxlength="11"  />
						</div>
						<div className="select_address borderBottom">
							<h3 className="fontStyle_163">所在地区</h3>
							<LArea regionCode={myaddress.regionCode} input={myaddress.regionName} />
							<span className="fontStyle_159">请选择{' '} ></span>
						</div>
						<div className="detail_address borderBottom">
							<textarea className="fontStyle_143" defaultValue ={myaddress.address} placeholder="详细地址" onChange={this.handleChangeEdit.bind(this)}></textarea>
						</div>
						<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
						  	<Button
						  		handleTouchEnd={this.handleTouchEnd.bind(this)} 
						  		btnCn="btn_big btn_radius btn_danger"
						  		text="修改并保存"
						  	>
						  	</Button>
					    </div>
					</div>
				}
				{this.state.loading && 
					<Loading text="正在保存，请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		myaddress
	}=posts
	return {
		isFetching,
		myaddress
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyAddress))