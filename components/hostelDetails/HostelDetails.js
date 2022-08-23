import React from 'react'
import Images from '../images/Images'
import style from './HostelDetails.module.css'

function HostelDetails(props) {
	return (
		<div className={style.container}>
			<div className={style.details}>
				<span>Hostel</span><span>{props.room ? props.room.attributes.hostel.name: undefined}</span>
				<span>Building</span><span>{props.room ? props.room.attributes.building.name: undefined}</span>
			</div>
			<Images 
				container={style.images}
				images = {props.room && props.room.attributes.building.images}
				server = {props.server}
			/>
		</div>
	)
}

export default HostelDetails