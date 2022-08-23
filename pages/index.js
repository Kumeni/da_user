import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, {useRef, useEffect, useState} from 'react';

import Header from '../components/Header/Header'
import Sections from '../components/sections/Sections';
import Section from '../components/sections/Section';
import Landing from '../components/landing/Landing';
import SocialMedia from '../components/socialMedia/SocialMedia';
import Events from '../components/events/Events';
import AvailableRooms from '../components/availableRooms/AvailableRooms';
import Footer from '../components/footer/Footer';
import { unauthorizedGet } from '../utilities/api';

export default function Home(props) {

	const [rooms ,setRooms] = useState();

	useEffect(()=>{
		if(rooms == undefined){
			unauthorizedGet(props.server, '/api/rooms')
			.then( res => setRooms(res.data.data))
			.catch( err => console.log(err));
		}
	}, [rooms])

	return (
		<div className={styles.container}>
			<Head>
				<title>Dkut Associates | Hostels, Rentals, Events, Products and Services</title>
				<meta 
					name="description" 
					content="
						On this platform, dedan kimathi students find vacant hostels and other stuff they
						need to make their lives more easier.
					"
				/>
				<meta 
					name = "theme-color" 
					content = "white" 
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Sections>
				<Section>
					<Landing />
				</Section>
				<Section id="upcoming-events">
					<Events />
				</Section>
				<Section>
					<AvailableRooms 
						rooms = {rooms}
					/>
				</Section>
			</Sections>
			<SocialMedia />
			<Footer />
		</div>
	)
}
