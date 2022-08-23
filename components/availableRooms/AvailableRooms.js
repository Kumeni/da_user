import React from 'react'
import AvailableRoom from './AvailableRoom'
import style from './AvailableRooms.module.css'
import Link from 'next/link'

function AvailableRooms(props) {
	return (
		<div className={style.container}>
			<div className={style.title}>
			<h2>Available rooms</h2>
			<Link href="/available-rooms"><a>More</a></Link>
			</div>
			
			<div className={'scrollContainer'}>
			{
				props.rooms && props.rooms.map( (element, index) => (
					<AvailableRoom room = {element}/>
				))
			}
			</div>
		</div>
	)
}

export default AvailableRooms