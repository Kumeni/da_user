import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import React, {useRef, useState} from 'react'

function MyApp({ Component, pageProps }) {

	const [server, setServer]	 = useState("http://localhost:1337");
	return <Component {...pageProps} 
				server = { server}
			/>
}

export default MyApp
