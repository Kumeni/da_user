import React, {useState} from 'react';
import style from './ContactTenant.module.css';

function ContactTenant() {

	const [details, setDetails] = useState(false);
	const [contacts, setContacts] = useState([
		{
			icon:"/icons/phone-call.PNG",
			alt:"",
			link:"",
			anchorText:"Phone"
		},
		{
			icon:"/icons/whatsapp.PNG",
			alt:"",
			link:"",
			anchorText:"Whatsapp"
		},
		{
			icon:"/icons/gmail.PNG",
			alt:"",
			link:"",
			anchorText:"Email"
		},

	])
	return (
		<div className={style.container}>
			<div>
				<span className={style.title}>
					<label>Contact tenant</label>
					{/* <input type="checkbox" /> */}
				</span>
				<div className={style.more}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={details?style.detailed:style.notDetailed}>
				{
					details && contacts ?
						contacts.map( (element, index) => (
							<div>
								<div className={style.icon}>
									<img src={element.icon} alt={element.alt} />
								</div>
								<a className={style.anchorText + " " + "text-primary"} href={element.link}>{element.anchorText}</a>
							</div>
						))
					: 	contacts.map( (element, index) => (
							<a href={element.link}>
								<div className={style.icon}>
									<img src={element.icon} alt={element.alt} />
								</div>
								<span className={style.anchorText + " " + "text-primary"} href="#">{element.anchorText}</span>
							</a>
						))
				}
			</div>
		</div>
	)
}

export default ContactTenant