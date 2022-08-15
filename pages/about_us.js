import React, {useRef} from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import styles from '../components/about_us/About_us.module.css';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';

function About_us(props) {

	const header = useRef(null);

	return (
		<div>
			<Head>
				<title>Contact us</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header 
				header = {header}
				menu_info = {props.menu_info}
				barsContainer = {props.barsContainer}
				handleMenuClick = {data => props.handleMenuClick(data)}
			/>
			<main ref = {props.main} className = {styles.main}>
				<Navigation menu_info = {props.menu_info}/>
				<h1>Matmax limited</h1>
				<div className = {styles.backdrop}>
					<img src="" alt="" />
					<div className = {styles.logo}>
						<img src="" alt="" />
					</div>
				</div>
				<section>
					<p>
						Matmax enterprises is a private registered company in Kenya with its
						wide angle in supply, fabrication and installation of well crafted tents,
						shades , greenhouses ,vehicle loose covers etc.
					</p>
				</section>
				<section>
					<h2>Our vision</h2>
					<p>
						To become the leader in tent fabrication, installation and furniture supplier
						through our most innovative team work so as to achieve our clients requirements.
					</p>
				</section>
				<section>
					<h2>Our mission</h2>
					<p>
						To articulate innovations on designs to keep up with the latest trends and technology
						in order to deliver authentic and quality products to our clients satisfaction.
					</p>
				</section>
				<section>
					<p>Our services include supply, fabrication and installation of:</p>
					<ol>
						<li>Car shades</li>
						<li>Party tents</li>
						<li>Sail shades</li>
						<li>Camping tents</li>
						<li>Canopies</li>
						<li>Green houses</li>
						<li>Garden umbrellas</li>
						<li>Camping chairs/ stools</li>
						<li>Camping toilets</li>
						<li>Tarpaulins</li>
						<li>Vehicle loose covers</li>
						<li>Pickup covers</li>
						<li>Hoods</li>
						<li>Hammocks</li>
						<li>Pergola</li>
						<li>Gazebo</li>
						<li>School chairs</li>
						<li>Beds</li>
					</ol>
				</section>
			</main>
			<Footer footer = {props.footer} />
		</div>
	)
}

export default About_us