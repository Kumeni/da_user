import React, { useState, useEffect} from 'react'
import Head from 'next/head';
import Header from '../../components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react'
import RoomDetails from '../../components/roomDetails/RoomDetails';
import GoogleMaps from '../../components/googleMaps/GoogleMaps';
import HostelDetails from '../../components/hostelDetails/HostelDetails';
import RoomAd from '../../components/roomAd/RoomAd';
import Images from '../../components/images/Images';
import style from '../../components/room/room.module.css';
import Script from 'next/script'
import ContactTenant from '../../components/contactTenant/ContactTenant';
import Mosaic from '../../components/mosaic/Mosaic';
import AvailableRoom from '../../components/availableRooms/AvailableRoom';
import { unauthorizedGet } from '../../utilities/api';
import { useRouter} from 'next/router';

function Room(props) {

	const [room ,setRoom ] =useState();
	const [rooms ,setRooms] = useState();

	const router = useRouter();

	useEffect(()=>{
		if(rooms == undefined){
			unauthorizedGet(props.server, '/api/rooms')
			.then( res => setRooms(res.data.data))
			.catch( err => console.log(err));
		}
		if(room == undefined){
			unauthorizedGet(props.server, ('/api/rooms/'+router.query.id))
			.then( res => setRoom(res.data.data))
			.catch( err => console.log(err));
		}
	}, [rooms, room])

	return (
		<div>
			<Script src="https://kit.fontawesome.com/e477c42a9e.js" crossOrigin="anonymous"/>
			<Head>
				{/* FontAwesome icons */}
				<script src="https://kit.fontawesome.com/e477c42a9e.js" crossOrigin="anonymous"></script>
				<link 
					rel="stylesheet" 
					href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" 
					integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" 
					crossOrigin="anonymous" 
				/>

				<title>Vacant hostel rooms and rentals around Dedan Kimathi University | Dkut Associates</title>

				<meta 
					name="description" 
					content="
						Find vacant hostel rooms and rentals around Dedan Kimathi University of Technology, Dkut.
						We ensure that only vacant hostel rooms and rentals around Dedan Kimathi University of Technology
						pre present here.
					"
				/>

				<meta 
					name="keywords"
					content ="
						vacant hostel rooms in Dkut,
						vacant hostel rooms  in Dedan Kimathi,
						vacant hostel rooms around Dedan Kimathi University of Technology,
						affordable hostel rooms in Dkut,
						affordable hostel romms in Dedan Kimathi,
						vacant rentals in Dkut,
						vacant rentals around Dedan Kimathi University of Technology 
					"
				/>
				<meta name = "theme-color" content = "white" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div>
				<section className={style.introduction}>
					<Images 
						container={style.images}
						images = { room && room.attributes.images}
						server = {props.server}
					/>
					<RoomDetails room = {room && room}/>
				</section>
				<section className={style.landlord}>
					<ContactTenant />
					{
						(room && room.attributes.fromLandlord != null) &&
							<div className={style.fromLandlord}>
								<h4>From Landlord</h4>
								<p>
									{room.attributes.fromLandlord}
								</p>
							</div>
					}
					
				</section>
				<section className={style.hostel}>
					<HostelDetails 
						room = {room && room}
						server = {props.server}
					/>
					{
						room && room.attributes.building.mapsLink &&
							<GoogleMaps url={room && room.attributes.building.mapsLink}/>
					}
					
				</section>
				{
					rooms &&
						<>
							<h3 className={style.more}>More like this</h3>

							<Mosaic>
								{
									rooms.map( (element, index) =>(
										<AvailableRoom 
											mosaic={true}
											room = {element}
											key = {index}
											server = {props.server}
										/>
									))
								}
							</Mosaic>
						</>
				}
				
				<section>
					<RoomAd />
				</section>
			</div>
		</div>
	)
}

export default Room