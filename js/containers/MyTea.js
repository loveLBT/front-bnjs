import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Avator,Scroll} from "../components"

class MyTeaItem extends Component{
	render(){
		const {item}=this.props
		return (
			<div className="myteaitem borderBottom">
				<div className="flex-ai borderBottom" style={{padding:"0.32rem 0"}}>
					<div className="avator_cell">
						<Avator avatorUrl={item.gravatarThumb} />
					</div>
					<div className="msg_cell flex-1 flex-column-between">
						<div>
							<h3 className="fontStyle_163">{item.trueName}（{item.phone}）</h3>
						</div>
						<div>
							<p className="fontStyle_136">等级：{item.agentLevelName}</p>
							<p className="fontStyle_136">直接邀请成员：{item.customerUserNum}</p>
						</div>
					</div>
					</div>
				<div className="kinds_cell flex-ai">
					<p className="fontStyle_126">拿货：总计<span className="red">{item.buyQuantitySum}盒</span>/上月<span style={{marginRight:"0.32rem"}} className="red">{item.sellQuantityMonth}盒</span>出货：总计<span className="red">{item.sellQuantitySum}盒</span>/上月<span className="red">{item.sellQuantityMonth}盒</span></p>
				</div>
			</div>
		)
	}
}

class MyTea extends Component{
	componentWillMount(){
		if(!this.props.mytea){
			this.getMyTea()
		}
	}
	getMyTea(){
		const {actions}=this.props
		const myteasUrl=apiUrl+"/WSMyCustomerList?page=1&pageNum=100"
		actions.fetchPosts("mytea",myteasUrl)
	}
	render(){
		document.title="我的团队"
		const {mytea}=this.props
		console.log(mytea)
		return (
			<div className="mytea">
				{mytea &&
					<div className="count_cell flex-ai">
						<p>直接邀请成员：<span className="red">{mytea.result.totalCount}人</span></p>
					</div>
				}
				<Scroll>
					<div className="scroll_cell">
						{mytea && 
							mytea.result.customerList.map((item,i)=>{
								return (
									<MyTeaItem key={i} item={item} />
								)
							})
						}
					</div>
				</Scroll>
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		mytea
	}=posts
	return {
		isFetching,
		mytea
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyTea))   