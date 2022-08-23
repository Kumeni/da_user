import React, {useState, useEffect} from 'react'
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Mosaic from '../../components/mosaic/Mosaic';
import Filter from '../../components/filter/Filter';
import AvailableRoom from '../../components/availableRooms/AvailableRoom';
import { unauthorizedGet } from '../../utilities/api';

function AvailableRooms(props) {

    const [rooms ,setRooms] = useState();

	useEffect(()=>{
		if(rooms == undefined){
			unauthorizedGet(props.server, '/api/rooms')
			.then( res => setRooms(res.data.data))
			.catch( err => console.log(err));
		}
	}, [rooms])

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
            <Mosaic>
                <Filter />
                {
                    rooms && rooms.map( (element, index) =>(
                        <AvailableRoom 
                            mosaic={true}
                            room = {element}
                            key = {index}
                            server = {props.server}
                        />
                    ))
                }
            </Mosaic>
        </div>
    )
}

export default AvailableRooms