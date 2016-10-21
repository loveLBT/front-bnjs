import React,{Component} from 'react'
import classnames from "classnames"
import Ajax from '../Ajax.js'
import "./panel.css"

class Panel extends Component{
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
		const {UploadImg}=this.props
		if(!UploadImg){
			return 
		}else{
			return (
				<div className="img_cell flex-column">
					<div className="dashed">
						 <form ref="form1" name="form1" id="form1" encType="multipart/form-data" >
							<input onChange={this.handleUpload.bind(this)} id="file" type="file" name="file" />
						</form>
					</div>
					<div className="dashed">
						<input type="file"/>
					</div>
				</div>
			)
		}
	}
	handleUpload(event){
		$.ajax({
			url:"http://202.107.219.19/AD/WSGravatarUpdate",
			type:"POST",
			cache:false,
			data:new FormData($('#form1')[0]),
			processData:false,
			contentType:false
		}).done(function(res){
			console.log(res)
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
					<input className="fontStyle_143" type="text" placeholder={input} onChange={this.handleChange.bind(this)} />
				}
				{this.renderCarImg()}
				{this.renderUploadImg()}
			</div>
		)
	}
}

export default Panel