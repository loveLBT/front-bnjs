import React,{Component} from 'react'
import {polyfill} from 'es6-promise'
import fetch from 'isomorphic-fetch'
import TabBar from "../components/TabBar"
import UserTop from "../components/UserTop"

class Dashboard extends Component{
	constructor(props){
		super(props)

		this.state={
			userData:JSON.parse(sessionStorage.getItem("userData"))
		}
	}
	componentWillMount(){
		const newLogin=sessionStorage.newLogin
		const password=this.GetQueryString(newLogin,"password")
		const username=this.GetQueryString(newLogin,"username")
		const newLoginUrl=apiUrl+"/wslogin?username="+username+"&password="+password
		fetch(newLoginUrl)
			.then(response=>response.json())
			.then(json=>{
				sessionStorage.setItem("userData",JSON.stringify(json.result.result))
			})
	}
	GetQueryString(loginUrl,name){
		const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
		const loginUrlQuery=loginUrl.toLowerCase().substr(loginUrl.indexOf("?")+1).match(reg)
		return  unescape(loginUrlQuery[2]) 

	}
	componentDidMount(){
		let oHeight=document.body.clientHeight 
		window.onresize=()=>{
			if(document.body.clientHeight<oHeight){
				document.getElementsByClassName("footer")[0].style.display="none"
			}else{
				document.getElementsByClassName("footer")[0].style.display="block"
			}
		}
	}
	render(){
		const {userData}=this.state
		return (
			<div className="dashboard flex-column" >
				{!this.props.params.id && 
					<div className="header flex-0">
						<UserTop isUpload={true} userData={userData} />
					</div>
				}
				
				<div className="content flex-1">
					<div className="children">
						{this.props.children}
					</div>
				</div>
				<div className="footer flex-0">
					<TabBar />
				</div>
			</div>
		)
	}
}

export default Dashboard
