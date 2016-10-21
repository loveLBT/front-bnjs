import React,{Component} from 'react'
import './avator.css'
class Avator extends Component{
	render(){
		const {isUpload,avatorUrl}=this.props
		return (
			<div className="avator">
				{isUpload && 
					<input type="file"/>
				}
				<img width="100%" height="100%" src={hostUrl+avatorUrl} alt="用户头像"/>
				}
			</div>
		)
	}
}
export default Avator