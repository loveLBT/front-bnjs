import React,{Component} from 'react'
import { withRouter,Link } from 'react-router'
import objectAssign from "object-assign"
import classnames from 'classnames'
import Avator from '../Avator'
import Badge from '../Badge'
import Button from '../Button'
import './usertop.css'
class UserTop extends Component{ 
	renderStateCell(){
		const {hasStateCell,hasBtnCell,state}=this.props
		if(!hasStateCell){
			return 
		}else{
			return (
				<div className="state_cell flex-ai">
					<div className="flex-1">
						{state==0 && 
							<p className="state">待审核</p>
						}
						{state==1 && 
							<p className="state">审核通过</p>
						}
						{state==-1 && 
							<p className="state">审核不通过</p>
						}
					</div>
					{state==0 && 
						<div className="btn_small_cell" style={{marginRight:"0.32rem"}}>
							<Button 
								handleTouchEnd={this.props.handleTouchAgree}
								btnCn="btn_small btn_radius btn_danger"
						  		text="同意"
							/>
						</div>
					}
					{state==0 && 
						<div className="btn_small_cell">
							<Button 
								handleTouchEnd={this.props.handleTouchReject}
								btnCn="btn_small btn_radius btn_default"
						  		text="拒绝"
							/>
						</div>
					}
				</div>
			)
		}
	}
	constructor(props){
		super(props)

		this.state={
			hasBeAuth:true,
		}
	}
	componentWillMount(){
		this.setBeAuth()
	}
	setBeAuth(){
		const {hasBeAuth}=this.props
		if(hasBeAuth!=undefined){
			this.setState({
				hasBeAuth
			})
		}
	}
	handleTouchEnd(){
		this.props.router.push("/empower")
	}
	render(){
		const {hasBeAuth}=this.state
		const {className,userData}=this.props
		return (
			<div className={classnames("usertop",className)}>
				<div className="datas_cell flex-ai">
					<Avator isUpload={this.props.isUpload} avatorUrl={userData.gravatar} />
					<div className="name_cell flex-1 flex-column-around">
						{hasBeAuth && 
							<Link to="/personal" className="name">{userData.trueName}<i className="icon_name"></i></Link>	
						}
						{!hasBeAuth &&
							<p className="fontStyle_163">{userData.trueName}（{userData.phone}）</p>
						}
						<p className="leave">等级：<span>{userData.agentLevelName}</span></p>
					</div>
					{hasBeAuth && 
						<div className="be_auth">
							<button onTouchEnd={this.handleTouchEnd.bind(this)}>授权</button>
						</div>
					}
				</div>
				{this.renderStateCell()}
			</div>
		)
	}
}
export default withRouter(UserTop) 