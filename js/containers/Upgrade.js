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
			items:[],
			index:0,
			loading:false,
			btnText:"升级"
		}
	}
	componentWillMount(){
		const {actions}=this.props
		const upgradeUrl=apiUrl+"/WSMyProductUpgrades"
		actions.fetchPosts("upgrade",upgradeUrl)
	}
	componentWillReceiveProps(nextProps){
		const {index}=this.state
		if(this.props.posts!==nextProps.posts && !!nextProps.posts.upgrade){
			this.setState({
				items:nextProps.posts.upgrade.result.upgradeProducts,
			})
		}
	}
	changeIndex(index){
		this.setState({
			index,
		})
	}
	handleTouchEnd(){
		const {items,index}=this.state
		if(items[index].upGrade==1){
			this.setState({
				loading:true
			})
			const upproductUrl=apiUrl+"/WSMyUpGrade?productId="+items[index].productId
			this.timer=setTimeout(()=>{
				actions.fetchPosts("upproduct",upproductUrl)
				.then(data=>{
					if(data.posts.status==="success"){
						Toast.tip("升级申请已提交")
						this.props.router.push('/apply')
					}else{
						Toast.tip("升级失败")
					}
				})
			},2000)
		}else{
			return false
		}
		
	}
	render(){
		document.title="产品升级"
		const {items,index}=this.state
		return (
			<div className="upgrade">
				<div className="upgrade_cell">
					{items[index] &&
						<ProductItem 
							changeIndex={this.changeIndex.bind(this)}
							maskText={items[index].productName}
						>
							{items.map((item,i)=>{
								return (
									<Link key={i} className="slider-item" style={{backgroundImage:'url('+hostUrl+item.thumbnailUrl+')'}}></Link>
								)
							})}
						</ProductItem>
					}
					{items[index] && 
						<div className="nature flex-ai">
							<div className="fontStyle_143">当前等级：<span className="red">{items[index].agentLevelName}</span></div>
							<div className="fontStyle_143">累计拿货量：<span className="red">{items[index].sumPurchase}盒</span></div>
						</div>
					}
					<div className="btn_big_cell">
					  {items[index] &&
						<Button
						  	btnCn={classnames("btn_big btn_radius",{btn_danger:items[index].upGrade==1},{btn_disabled:items[index].upGrade!=1})}
						  	text="升级"
						  	handleTouchEnd={this.handleTouchEnd.bind(this)}
						  >
					 	 </Button>
					  }
					</div>
				</div>
				{this.state.loading && 
					<Loading text="正在升级请等待" />
				}
			</div>
		)
	}
}

const mapStateToProps=state=>{
	return {
		posts:state.posts,
	}
}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Upgrade) ) 