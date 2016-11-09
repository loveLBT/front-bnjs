import React,{Component} from 'react'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ApplyItem,SliderTab} from "../components"

class Apply extends Component{
	constructor(props){
		super(props)

		this.state={
			page:1,
			pageNum:100,
			registeitems:"",
			upitems:""
		}
	}
	componentWillMount(){
		const {page,pageNum}=this.state
		const {actions}=this.props
		const registerapplyUrl=apiUrl+"/WSMyCustomerRegRequests?page="+page+"&pageNum="+pageNum
		actions.fetchPosts("registerapply",registerapplyUrl)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.registerapply){
			this.setState({
				registeitems:nextProps.posts.registerapply.result.customerList
			})
		}
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.upapply){
			this.setState({
				upitems:nextProps.posts.upapply.result.customerList
			})
		}
	}
	handleChangeTab(){
		const {page,pageNum}=this.state
		const {actions}=this.props
		const upapplyUrl=apiUrl+"/WSUpGradeRequests?page="+page+"&pageNum="+pageNum
		actions.fetchPosts('upapply',upapplyUrl)

	}
	handleLinkTo(url){
		this.props.router.push(url)
	}
	renderItem1(){
		const {registeitems}=this.state
		return (
			<div className="item">
				{!!registeitems &&
					registeitems.map((item,i)=>{
						return (
							<ApplyItem handleLinkTo={this.handleLinkTo.bind(this,"/apply/"+item.userID)} key={i} item={item} />
						)
					})
				}
			</div>
		)
	}
	renderItem2(){
		const {upitems}=this.state
		return (
			<div className="item">
				{!!upitems&&
					upitems.map((item,i)=>{
						return (
							<ApplyItem handleLinkTo={this.handleLinkTo.bind(this,"/upapply/"+item.requestID)} key={i} item={item} />
						)
					})
				}
			</div>
		)
	}
	render(){
		document.title="申请列表"
		return (
			<div className="apply">
				{ 
					<SliderTab
						handleChangeTab={this.handleChangeTab.bind(this)}
						navArry={[
									{text:"注册审核申请",item:this.renderItem1()},
									{text:"升级申请",item:this.renderItem2()}
								]}
					/>
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	return {
		posts:state.posts
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Apply))   