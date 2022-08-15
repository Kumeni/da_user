import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import React, {useRef, useState} from 'react'

function MyApp({ Component, pageProps }) {

	const menu = useRef(null);
	const main = useRef(null);
	const menu_info = useRef(null);
	const barsContainer = useRef(null);
	const footer = useRef(null);

	const [menuState, setMenuState] = useState("CLOSED");
	const [lastScrollPos, setLastScrollPos] = useState();
	const [baseURL, setBaseURL] = useState("http://192.168.88.187:1337");

	const handleMenuClick = () => {
		let bars = barsContainer.current.getElementsByTagName("div"), i, menuInfoHeight;
		
		//footer = document.getElementsByTagName("footer")[0],
		//menu_info = document.getElementsByClassName("menu_info")[0],
		//header = document.getElementsByTagName("header"), menuInfoHeight;

		

		if(menuState === "CLOSED"){
			for(i=1; i<bars.length; i++){
				bars[i].style.width = "100%";
			}
			
			setLastScrollPos(window.scrollY);
			
			menuInfoHeight = menu_info.current.getBoundingClientRect().height;

			main.current.style.height = menuInfoHeight + "px";
			menu_info.current.style.marginLeft = "0px";

			footer.current.style.display = "none";

			setMenuState("OPEN");
			window.scrollTo(0,0);

		} else if( menuState === "OPEN"){
			for (i=1; i<bars.length; i++){
				if(i === 1)
					bars[i].style.width = "50%";
				else
					bars[i].style.width = "25%";
			}

			main.current.style.height = "auto";
			menu_info.current.style.marginLeft = -window.innerWidth +"px";

			footer.current.style.display = "block";

			setMenuState("CLOSED");
			lastScrollPos !== undefined &&
				window.scrollTo(0, lastScrollPos);
			
		}
		console.log(Date());
		console.log(menuState);
		
		return null;

	}
	return <Component {...pageProps} 
				menuState={menuState}
				setMenuState = {data => setMenuState(data)}
				lastScrollPos = {lastScrollPos}
				setLastScrollPos = {data => setLastScrollPos(data)}
				handleMenuClick = {data => handleMenuClick(data)}
				menu = {menu}
				main = {main}
				menu_info = {menu_info}
				barsContainer = {barsContainer}
				footer = {footer}
				baseURL = {baseURL}
			/>
}

export default MyApp
