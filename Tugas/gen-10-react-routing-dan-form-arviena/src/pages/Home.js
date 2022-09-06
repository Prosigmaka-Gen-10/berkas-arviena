import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

export default class Home extends Component {
	render () {
		return <>
			<p>Ini adalah halaman Home</p>
			<Link to="/biodata">
				Input Biodata Pemain Disini
			</Link>
		</>
	}
}