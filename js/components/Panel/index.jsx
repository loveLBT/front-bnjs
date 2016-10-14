import React,{Component} from 'react'
import classnames from "classnames"
import "./panel.css"

class Panel extends Component{
	renderCarImg(){
		const {hasCarImg}=this.props
		if(!hasCarImg){
			return 
		}else{
			return (
				<div className="img_cell flex-column">
					<div className="">
						<img width="100%" height="100%" src="" alt="身份证正面"/>
					</div>
					<div className="">
						<img width="100%" height="100%" src="" alt="身份证背面"/>
					</div>
				</div>
			)
		}
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
					<input type="text" placeholder={input}/>
				}
				{this.renderCarImg()}
			</div>
		)
	}
}

export default Panel