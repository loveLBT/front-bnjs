import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import '../assets/css/global.css'
import '../assets/css/app.css'

let rootElement=document.getElementById('app')


ReactDOM.render(
	<div>
		{routes}
	</div>,
	rootElement
)
