import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {UserTop,Panel,Button,LArea,Loading,Toast} from "../components"

class MyAddress extends Component{
	constructor(props){
		super(props)

		this.state={
			name:"",
			cellphone:"",
			regionName:"",
			address:"",
			loading:false
		}

	}
	componentWillMount(){
		if(!this.props.myaddress){
			this.getMyAddress()
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.myaddress){
			this.setState({
				name:nextProps.myaddress.result.name,
				cellphone:nextProps.myaddress.result.cellphone,
				address:nextProps.myaddress.result.address,
				regionName:nextProps.myaddress.result.regionName,
				regionCode:nextProps.myaddress.result.regionCode
			})
		}
	}
	getMyAddress(){
		const {actions}=this.props
		const myaddressUrl=apiUrl+"/WSGetAddress"
		actions.fetchPosts("myaddress",myaddressUrl)
	}
	handleTouchEnd(){
		const{actions}=this.props
		let regionCode=document.getElementById("value2").value.split(",")[2]
		const {name,cellphone,address}=this.state
		const submitaddressUrl=apiUrl+"/WSEditAddress?name="+name+"&cellphone="+cellphone+"&code="+regionCode+"&address="+address
		this.setState({
			loading:true
		})
		this.timer=setTimeout(()=>{
			actions.fetchPosts("submitaddress",submitaddressUrl)
				.then(data=>{
					this.setState({loading:false})
					console.log(data)
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
		let newObj={}
		newObj[name]=value
		this.setState(newObj)
	}
	handleChangeEdit(event){
		this.setState({
			address:event.target.value
		})
	}
	render(){
		document.title="我的地址"
		const {myaddress}=this.props
		console.log(myaddress)
		return (
			<div className="myaddress">
				{myaddress && 
					<div>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel handleChange={this.handleChange.bind(this,"name")} title="收货人" hasBorder={true} input={myaddress.result.name}  />
								<Panel handleChange={this.handleChange.bind(this,"cellphone")} title="手机号" input={myaddress.result.cellphone}  />
							</div>
							<div className="select_address borderBottom">
								<h3 className="fontStyle_163">所在地区</h3>
								<LArea regionCode={myaddress.result.regionCode} input={myaddress.result.regionName} />
								<span className="fontStyle_159">请选择{' '} ></span>
							</div>
							<div className="detail_address borderBottom">
								<textarea className="fontStyle_143" placeholder={myaddress.result.address} onChange={this.handleChangeEdit.bind(this)}></textarea>
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

/*{myaddress && 
					<div>
						<div className="data_cell">
							<div className="contact borderBottom">
								<Panel handleChange={this.handleChange.bind(this,"name")} title="收货人" hasBorder={true} input={myaddress.result.name}  />
								<Panel handleChange={this.handleChange.bind(this,"cellphone")} title="手机号" input={myaddress.result.cellphone}  />
							</div>
						</div>
						<div className="select_address borderBottom">
							<h3 className="fontStyle_163">所在地区</h3>
							<LArea input={myaddress.result.regionName} />
							<span className="fontStyle_159">请选择{' '} ></span>
						</div>
						<div className="detail_address borderBottom">
							<textarea className="fontStyle_143" placeholder={myaddress.result.address} onChange={this.handleChangeEdit.bind(this)}></textarea>
						</div>
						<div className="btn_big_cell" style={{marginTop:"0.32rem"}}>
						  	<Button
						  		handleTouchEnd={this.handleTouchEnd.bind(this)} 
						  		btnCn="btn_big btn_radius btn_danger"
						  		text="保存"
						  	>
						  	</Button>
					    </div>
					</div>
				}

componentWillReceiveProps(nextProps){
		if(nextProps.myaddress){
			this.setState({
				name:nextProps.myaddress.result.name,
				cellphone:nextProps.myaddress.result.cellphone,
				address:nextProps.myaddress.result.address,
				regionName:nextProps.myaddress.result.regionName
			})
		}
	}
				*/