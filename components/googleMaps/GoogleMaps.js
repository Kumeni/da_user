import React from 'react'
import style from './GoogleMaps.module.css'

function GoogleMaps() {
	return (
		<div className={style.container}>
			<h4>Location</h4>
			<iframe src="http://localhost:3000/available-rooms/room"></iframe>
			<a href="#">view on maps</a>
		</div>
	)
}

export default GoogleMaps