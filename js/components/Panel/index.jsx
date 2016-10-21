import React,{Component} from 'react'
import classnames from "classnames"
import Ajax from '../Ajax.js'
import Toast from '../Toast'
import "./panel.css"

class Panel extends Component{
	constructor(props){
		super(props)

		this.state={
			img1Url:"",
			img2Url:""
		}
	}
	renderCarImg(){
		const {hasCarImg,carImg,carReverseImg}=this.props
		if(!hasCarImg){
			return 
		}else{
			return (
				<div className="img_cell flex-column">
					<div className="">
						<img width="100%" height="100%" src={hostUrl+carImg} alt="身份证正面"/>
					</div>
					<div className="">
						<img width="100%" height="100%" src={hostUrl+carReverseImg} alt="身份证背面"/>
					</div>
				</div>
			)
		}
	}
	renderUploadImg(){
		const {imgUrl1,imgUrl2}=this.state
		const {UploadImg}=this.props
		if(!UploadImg){
			return 
		}else{
			return (
				<div className="img_cell flex-column">
					<div className="dashed sfz">
						 <form ref="form1" name="form1" id="form1" >
						 	{!!imgUrl1 &&
						 		<img width="100%" height="100%" src={hostUrl+imgUrl1} alt="身份证正面"/>
						 	}
							<input onChange={this.handleUploadFom1.bind(this)} type="file" name="file" />
						 </form>
					</div>
					<div className="dashed sfz_reverse">
						<form ref="form2" name="form2" id="form2" >
							{!!imgUrl2 &&
						 		<img width="100%" height="100%" src={hostUrl+imgUrl2} alt="身份证正面"/>
						 	}
							<input onChange={this.handleUploadFom2.bind(this)} type="file" name="file" />
						</form>
					</div>
				</div>
			)
		}
	}
	handleUploadFom1(file){
		const uploadUrl=hostUrl+"/AD/WSsfzPhotoUpdate"
		const formdata=new FormData(this.refs.form1) 
		Ajax.upload(formdata,uploadUrl,(res)=>{
			if(res.status==="success"){
				this.setState({
					imgUrl1:res.result.sfzh
				})
				Toast.tip("上传成功")
			}
		})
	}
	handleUploadFom2(file){
		const uploadUrl=hostUrl+"/AD/WSsfzPhotoUpdate"
		const formdata=new FormData(this.refs.form2) 
		Ajax.upload(formdata,uploadUrl,(res)=>{
			if(res.status==="success"){
				this.setState({
					imgUrl2:res.result.sfzh
				})
				Toast.tip("上传成功")
			}
		})
	}
	handleChange(event){
		this.props.handleChange(event.target.value)
	}
	render(){
		const {title,text,hasBorder,contentHtml,input}=this.props
		return (
			<div className={classnames("panel flex",{borderBottom:hasBorder})}>
				<h3 className="fontStyle_163">{title}</h3>
				{text && 
					<p className="fontStyle_143">{text}</p>
				}
				{input && 
					<input onChange={this.handleChange.bind(this)} className="fontStyle_143" type="text" placeholder={input} />
				}
				{this.renderCarImg()}
				{this.renderUploadImg()}
			</div>
		)
	}
}

export default Panel