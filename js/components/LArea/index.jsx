import React,{Component} from 'react'
import './utils/LAreaFn'
import * as LAreaData from './utils/LAreaData'
import './larea.css'

class LArea extends Component{
	componentDidMount(){
		var area2 = new LAreaFn();
		area2.init({
		    'trigger': '#demo2',
		    'valueTo': '#value2',
		    'keys': {
		        id: 'value',
		        name: 'text'
		    },
		    'type': 2,
		    'data': [LAreaData.provs_data, LAreaData.citys_data, LAreaData.dists_data]
		});
	}
	render(){
		return (
			<div className="larea content-block" id="test" >
				<input  className="fontStyle_143" id="demo2" type="text" readOnly={true} placeholder={this.props.input} />
            	<input  className="fontStyle_143" id="value2" type="hidden" readOnly={true}  defaultValue={this.props.regionCode} />
			</div>
		)
	}
}
export default LArea