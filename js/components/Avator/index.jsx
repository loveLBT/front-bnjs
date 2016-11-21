import React,{Component} from 'react'
import Ajax from '../Ajax'
import Toast from '../Toast'
import Loading from '../Loading'
import './avator.css'
class Avator extends Component{
	constructor(props){
		super(props)

		this.state={
			loading:false,
			avatorUrl:props.avatorUrl+"?"+Math.random().toString(8).substring(7),
			userData:JSON.parse(sessionStorage.getItem("userData")),
		}
	}

	handleUpload(event){
		const gravatarUrl=hostUrl+"/AD/WSGravatarUpdate"
		const formdata=new FormData(this.refs.form1) 
		const newUserData=this.state.userData
		this.setState({loading:true})
		Ajax.upload(formdata,gravatarUrl,(res)=>{
			this.setState({loading:false})
			if(res.status==="success"){
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
						<input onChange={this.handleUpload.bind(this)} name="file" type="file" accept="image/*" />
					</form>
				}
				<img ref="avator" width="100%" height="100%" src={hostUrl+avatorUrl} alt="用户头像"/>
				{this.state.loading && 
					<Loading text="头像正在上传，请等待" />
				}
			</div>
		)
	}
}
export default Avator