import React,{Component} from 'react'
import classnames from "classnames"
import Ajax from '../Ajax.js'
import Toast from '../Toast'
import Loading from '../Loading'
import "./panel.css"

class Panel extends Component{
	constructor(props){
		super(props)

		this.state={
			img1Url:"",
			img2Url:"",
			loading:false
		}
	}
	renderCarImg(){
		const {hasCarImg,carImg,carReverseImg}=this.props
		if(!hasCarImg){
			return 
		}else{
			return (
				<div className="img_cell flex-column">
					<div className="" style={{marginBottom:"0.32rem"}}>
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
							<input id="zfzZM" onChange={this.handleUploadFom1.bind(this)} type="file" name="file" />
						 </form>
					</div>
					<div className="dashed sfz_reverse">
						<form ref="form2" name="form2" id="form2" >
							{!!imgUrl2 &&
						 		<img width="100%" height="100%" src={hostUrl+imgUrl2} alt="身份证正面"/>
						 	}
							<input id="zfzFM" onChange={this.handleUploadFom2.bind(this)} type="file" name="file" />
						</form>
					</div>
				</div>
			)
		}
	}
	handleUploadFom1(){
		const uploadUrl=hostUrl+"/AD/WSsfzPhotoUpdateZM"
		const formdata=new FormData(this.refs.form1) 
		this.setState({loading:true})
		Ajax.upload(formdata,uploadUrl,(res)=>{
			if(res.status==="success"){
				this.setState({
					imgUrl1:res.result.sfzhThumb
				})
				Toast.tip("上传成功")
				this.setState({loading:false})
			}
		})
	}
	handleUploadFom2(){
		const uploadUrl=hostUrl+"/AD/WSsfzPhotoUpdateFM"
		const formdata=new FormData(this.refs.form2) 
		this.setState({loading:true})
		Ajax.upload(formdata,uploadUrl,(res)=>{
			if(res.status==="success"){
				this.setState({
					imgUrl2:res.result.sfzhThumb
				})
				Toast.tip("上传成功")
				this.setState({loading:false})
			}
		})
	}
	handleChange(event){
		this.props.handleChange(event.target.value)
	}
	render(){
		const {title,text,hasBorder,contentHtml,input,type,maxlength,defaultValue}=this.props
		return (
			<div className={classnames("panel flex",{borderBottom:hasBorder})}>
				<h3 className="fontStyle_163">{title}</h3>
				{text && 
					<p className="fontStyle_143">{text}</p>
				}
				{input && 
					<input maxLength={maxlength} onChange={this.handleChange.bind(this)} className="fontStyle_143" type={type} placeholder={input} defaultValue={defaultValue} />
				}
				{this.renderCarImg()}
				{this.renderUploadImg()}
				{this.state.loading && 
					<Loading text="正在上传，请等待" />
				}
			</div>
		)
	}
}

export default Panel