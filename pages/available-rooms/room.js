import React from 'react'
import Head from 'next/head';
import Header from '../../components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react'
import RoomDetails from '../../components/roomDetails/RoomDetails';
import GoogleMaps from '../../components/googleMaps/GoogleMaps';
import HostelDetails from '../../components/hostelDetails/HostelDetails';
import RoomAd from '../../components/roomAd/RoomAd';
import Images from '../../components/images/Images';

function Room() {
  return (
    <div>
      <Head>
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
			<section>
				<Images />
				<RoomDetails />
			</section>
			<section>
				<GoogleMaps />
			</section>
			<section>
				<HostelDetails />
				<RoomAd />
			</section>
		</div>
    </div>
  )
}

export default Room