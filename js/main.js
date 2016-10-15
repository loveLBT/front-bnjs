import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import routes from './routes'
import '../assets/css/global.css'
import '../assets/css/app.css'

let store=configureStore()
let rootElement=document.getElementById('app')

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	rootElement
)
