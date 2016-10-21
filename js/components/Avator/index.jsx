import React,{Component} from 'react'
import Ajax from '../Ajax'
import Toast from '../Toast'
import './avator.css'
class Avator extends Component{
	constructor(props){
		super(props)

		this.state={
			avatorUrl:props.avatorUrl
		}
	}
	handleUpload(){
		const gravatarUrl=hostUrl+"/AD/WSGravatarUpdate"
		const formdata=new FormData(this.refs.form1) 
		Ajax.upload(formdata,gravatarUrl,(res)=>{
			if(res.status==="success"){
				this.setState({
					avatorUrl:res.result.gravatar+"?"+Math.random().toString(8).substring(7)
				})
				Toast.tip("头像修改成功")
			}else{
				Toast.tip("头像修改失败")
			}
		})
	}
	render(){
		const {avatorUrl}=this.state
		return (
			<div className="avator">
				
					<form ref="form1" name="form1" id="form1" >
						<input onChange={this.handleUpload.bind(this)} name="file" type="file"/>
					</form>
				
				<img ref="avator" width="100%" height="100%" src={hostUrl+avatorUrl} alt="用户头像"/>
				}
			</div>
		)
	}
}
export default Avator