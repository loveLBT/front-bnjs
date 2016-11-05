import React,{Component} from 'react'
import { withRouter } from 'react-router'
import {Link} from "react-router"
import classnames from 'classnames'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ProductItem,Button,Loading,Toast} from '../components'

class Upgrade extends Component{
	constructor(props){
		super(props)

		this.state={
			index:0,
			loading:false,
		}
	}
	componentWillMount(){
		this.getUpgrade()
	}
	getUpgrade(){
		const {actions}=this.props
		const upgradeUrl=apiUrl+"/WSMyProductUpgrades"
		actions.fetchPosts("upgrade",upgradeUrl)
	}
	changeIndex(index){
		this.setState({
			index,
		})
	}
	handleTouchEnd(){
		const {index}=this.state
		const {upgrade,actions}=this.props
		if(upgrade.result.upgradeProducts[index].upGrade==1){
			this.setState({loading:true})
			const upproductUrl=apiUrl+"/WSMyUpGrade?productId="+upgrade.result.upgradeProducts[index].productId
			this.timer=setTimeout(()=>{
				actions.fetchPosts("upproduct",upproductUrl)
				.then(data=>{
					this.setState({loading:false})
					if(data.posts.status==="success"){
						Toast.tip(data.posts.result.message)
						this.getUpgrade()
					}else{
						Toast.tip(data.posts.result.message)
					}
				})
			},2000)
		}else{
			return false
		}
		
	}
	render(){
		document.title="产品升级"
		const {index}=this.state
		const {upgrade}=this.props
		console.log(upgrade)
		let items=!upgrade?null:upgrade.result.upgradeProducts
		return (
			<div className="upgrade">
				{items && 
					<div className="upgrade_cell">
						<ProductItem 
							changeIndex={this.changeIndex.bind(this)}
							maskText={items[index].productName}
						>
							{items.map((item,i)=>{
								return (
									<img src={hostUrl+item.thumbnailUrl} className="slider-item" key={i} alt=""/>
								)
							})}
						</ProductItem>
						<div className="nature flex-ai">
							<div className="fontStyle_143">当前等级：<span className="red">{items[index].agentLevelName}</span></div>
							<div className="fontStyle_143">累计拿货量：<span className="red">{items[index].sumPurchase}盒</span></div>
						</div>
						<div className="btn_big_cell">
							<Button
							  	btnCn={classnames("btn_big btn_radius",{btn_danger:items[index].upGrade==1},{btn_disabled:items[index].upGrade!=1})}
							  	text={items[index].upGrade==2?"升级中...":"升级"}
							  	handleTouchEnd={this.handleTouchEnd.bind(this)}
							  >
						 	 </Button>
						</div>
					</div>
				}
				{this.state.loading && 
					<Loading text="正在升级请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {posts}=state
	const {
		isFetching,
		upgrade
	}=posts
	return {
		isFetching,
		upgrade
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Upgrade) ) 
