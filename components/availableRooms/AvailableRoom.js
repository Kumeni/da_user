import React, { useEffect, useState } from 'react';
import style from './AvailableRoom.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Images from '../images/Images';

function AvailableRoom(props) {

	const [SARent ,setSARent] = useState();
	const [SADeposit, setSADeposit] = useState();
	const [WRRent ,setWRRent] = useState();
	const [WRDeposit, setWRDeposit] = useState();
	
	useEffect(()=>{
		if(props.room){
			setSARent(props.room.attributes.SARent);
			setSADeposit(props.room.attributes.SADeposit);
			setWRRent(props.room.attributes.WRRent);
			setWRDeposit(props.room.attributes.WRDeposit);
		}
	}, [props.room])

	return (
		<div className={props.mosaic?style.roomMosaic:style.room}>
			<Images 
				container = {props.mosaic?style.imageMosaic:style.image}
				images = {props.room && props.room.attributes.images}
				server = {props.server}
			/>
			{/*<div className={style.images}>
				<span>5</span>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<div className={props.mosaic?style.imageMosaic:style.image}>
							<img src="/images/wallE.png" alt="wallE" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={props.mosaic?style.imageMosaic:style.image}>
							<img src="/images/wallE.png" alt="wallE" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={props.mosaic?style.imageMosaic:style.image}>
							<img src="/images/wallE.png" alt="wallE" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={props.mosaic?style.imageMosaic:style.image}>
							<img src="/images/wallE.png" alt="wallE" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>*/}
			<div className={style.content}>
				<p>{props.room.attributes.roomType}</p>
				<p>{props.room.attributes.building.location}</p>
				<p>{ SARent ? ("Ksh. "+ SARent):"" + WRRent ? (", Ksh. " + WRRent):""}</p>
				<Link href={"/available-rooms/room?id="+props.room.id}>
					<a className={"bg-success"}>More...</a>
				</Link>
				</div>
		</div>
	)
}

export default AvailableRoom