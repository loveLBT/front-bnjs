import React,{Component} from 'react'
import Ajax from '../Ajax'
import Toast from '../Toast'
import Auth from '../Auth'
import Loading  from '../Loading'
import './avator.css'
class Avator extends Component{
	constructor(props){
		super(props)

		this.state={
			loading:false,
			avatorUrl:props.avatorUrl,
			userData:Auth.getUserData()
		}
	}

	handleUpload(){
		const gravatarUrl=hostUrl+"/AD/WSGravatarUpdate"
		const formdata=new FormData(this.refs.form1) 
		const newUserData=this.state.userData
		this.setState({loading:true})
		Ajax.upload(formdata,gravatarUrl,(res)=>{
			if(res.status==="success"){
				this.setState({loading:false})
				this.setState({
					avatorUrl:res.result.gravatar+"?"+Math.random().toString(8).substring(7)
				})
				newUserData.gravatar=res.result.gravatar
				sessionStorage.setItem("userData",JSON.stringify(newUserData))
				Toast.tip("头像修改成功")
			}else{
				Toast.tip("头像修改失败")
			}
		})
	}
	render(){
		const {avatorUrl}=this.state
		const {isUpload}=this.props
		return (
			<div className="avator">
				{isUpload && 
					<form ref="form1" name="form1" id="form1" >
						<input onChange={this.handleUpload.bind(this)} name="file" type="file"/>
					</form>
				}
				<img ref="avator" width="100%" height="100%" src={hostUrl+avatorUrl} alt="用户头像"/>
				{this.state.loading && 
					<Loading text="正在上传头像，请等待" />
				}
			</div>
		)
	}
}
export default Avator