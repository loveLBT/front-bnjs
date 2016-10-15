import React,{Component} from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import classnames from "classnames"
import {UserTop,MenuLink,Badge} from '../components'

class Menu extends Component {
	render(){
		const {hasBorder,iconCn,menuName}=this.props
		return (
			<Link to="/login" className={classnames("flex-1 flex-direction-center",{borderRight:hasBorder})}>
				<div>
					<i className={classnames("icon",iconCn)} style={{marginTop:"0.22rem"}}></i>
					<Badge count="2" s={{position:"absolute"}} cn="redBage" />
				</div>
				<p className="fontStyle_146">{menuName}</p>
			</Link>
		)
	}
}									
class Home extends Component{
	handleTouchStart(event){
		event.stopPropagation()
	}
	render(){
		return (
			<div className="home">
				<UserTop hasOrderCell={true} badge1Num={10} badge2Num={8} />
				<div className="menu_cell flex-column" onTouchStart={this.handleTouchStart.bind(this)}>
					<div className="item borderBottom flex-1 flex">
						<Menu hasBorder={true} iconCn="icon_mytea" menuName="我的团队" />
						<Menu hasBorder={true} iconCn="icon_apply" menuName="申请列表" />
						<Menu iconCn="icon_user" menuName="我的账户" />
					</div>
					<div className="item borderBottom flex-1 flex">
						<Menu hasBorder={true} iconCn="icon_retial" menuName="我的零售" />
						<Menu hasBorder={true} iconCn="icon_stock" menuName="我要进货" />
						<Menu iconCn="icon_back" menuName="退货申请" />
					</div>
					<div className="item borderBottom flex-1 flex">
						<Menu hasBorder={true} iconCn="icon_address" menuName="我的地址" />
						<Menu hasBorder={true} iconCn="icon_realname" menuName="实名认证" />
						<Menu iconCn="icon_pwd" menuName="修改密码" />
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		userData:state.userData
	}
}
const mapDispatchToProps = dispatch =>({
	actions:bindActionCreators(actions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)