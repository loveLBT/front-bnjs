import React,{Component} from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import classnames from "classnames"
import Auth from '../components/Auth.js'
import UserTop from '../components/UserTop'
import Badge from '../components/Badge'

class Menu extends Component {
	constructor(props){
		super(props)

		count:false
	}
	componentWillMount(){
		if(this.props.count==0 || !this.props.count){
			this.setState({
				count:false
			})
		}else {
			this.setState({
				count:this.props.count
			})
		}
	}
	render(){
		const {hasBorder,iconCn,menuName,linkTo}=this.props
		const {count}=this.state
		return (
			<Link to={linkTo} className={classnames("flex-1 flex-direction-center",{borderRight:hasBorder})}>
				<div>
					<i className={classnames("icon",iconCn)} style={{marginTop:"0.22rem"}}></i>
					{count &&
						<Badge count={count} s={{position:"absolute"}} cn="redBage" />
					}
				</div>
				<p className="fontStyle_146">{menuName}</p>
			</Link>
		)
	}
}									
class Home extends Component{
	componentWillMount(){
		this.getHome()
	}
	getHome(){
		const {actions}=this.props
		const homeUrl=apiUrl+"/WSAppIndexState"
		actions.fetchPosts("home",homeUrl)
	}
	handleTouchStart(event){
		event.stopPropagation()
	}
	render(){
		document.title="首页"
		const {home}=this.props
		return (
			<div className="home">
				{home &&
					<div className="order_cell" style={{paddingTop:"3px",marginTop:"-2px"}} onTouchStart={this.handleTouchStart.bind(this)}>
						<ul>
							<li>
								<Link to="/myorder"><i className="icon icon_myorder"></i><span ref="badgePosition1">我的订单</span></Link>
								{home.result.myOrderNum!=0 &&
									<Badge 
										count={home.result.myOrderNum}
									/>
								}
							</li>
							<li>
								<Link to="/userorder"><i className="icon icon_userorder"></i><span>客户订单</span></Link>
								{home.result.customerOrderNum!=0 &&
									<Badge 
										count={home.result.customerOrderNum} 
									/>
								}
							</li>
						</ul>
					</div>
				}
				{home && 
					<div className="menu_cell flex-column" onTouchStart={this.handleTouchStart.bind(this)}>
						<div className="item borderBottom flex-1 flex">
							<Menu linkTo="/mytea" hasBorder={true} iconCn="icon_mytea" menuName="我的团队" />
							<Menu linkTo="/apply" hasBorder={true} iconCn="icon_apply" menuName="申请列表" count={home.result.userRegNum} />
							<Menu linkTo="/myaccount" iconCn="icon_user" menuName="我的账户" count={home.result.productUpgradeNum} />
						</div>
						<div className="item borderBottom flex-1 flex">
							<Menu linkTo="/myretail" hasBorder={true} iconCn="icon_retial" menuName="我的零售" />
							<Menu linkTo="/buyproduct" hasBorder={true} iconCn="icon_stock" menuName="我要进货" />
							<Menu linkTo="/backproduct" iconCn="icon_back" menuName="退货申请" />
						</div>
						<div className="item borderBottom flex-1 flex">
							<Menu linkTo="/myaddress" hasBorder={true} iconCn="icon_address" menuName="我的地址" />
							<Menu linkTo="/realname" hasBorder={true} iconCn="icon_realname" menuName="实名认证" />
							<Menu linkTo="/editpwd" iconCn="icon_pwd" menuName="修改密码" />
						</div>
					</div>
				}
			</div>
		)
	}
}
const mapStateToProps = state => {
	const {posts}=state
	const {
		isFetching,
		home
	}=posts
	return {
		isFetching,
		home
	}
}
const mapDispatchToProps = dispatch =>({
	actions:bindActionCreators(actions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)

