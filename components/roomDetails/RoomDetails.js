import React, {useEffect, useState} from 'react'
import style from './RoomDetails.module.css'

function RoomDetails(props) {

	const [canSA, setCanSA] = useState();
	const [canWR, setCanWR] = useState();
	const [rentType, setRentType] = useState();
	const [rent, setRent] = useState();
	const [deposit, setDeposit] = useState();
	const [water, setWater] = useState();
	const [electricity, setElectricity] = useState();
	const [wifi, setWifi] = useState();

	useEffect(()=>{
		if(props.room != undefined){
			if(props.room.attributes.SARent != null){
				setCanSA(true);
			}
			if(props.room.attributes.WRRent != null){
				setCanWR(true);
			}

			if(props.room.attributes.SARent != null){
				setRentType("SA")
			} else if (props.room.attributes.SARent != null){
				setRentType("WR")
			}

			setWater(props.room.attributes.water);
			setElectricity(props.room.attributes.electricity);
			setWifi(props.room.attributes.wifi);
		}
	}, [props.room])
	console.log(props.room);

	useEffect(()=>{
		if(rentType === "SA"){
			setRent(props.room.attributes.SARent);
			setDeposit(props.room.attributes.SADeposit);
		} else if(rentType === "WR"){
			setRent(props.room.attributes.WRRent);
			setDeposit(props.room.attributes.WRDeposit);
		}
	}, [rentType])

	const handleRentType = rentType => {
		setRentType(rentType)
	}

	return (
		<div className={style.container}>
			<p>{(props.room ? props.room.attributes.roomType:"")} {props.room ? ("| Room " + props.room.attributes.roomNo):""}</p>
			<p>{props.room ? props.room.attributes.building.location: ""}</p>
			<div className={style.rentTabs}>
				{
					canSA &&
						<span>
							<label htmlFor="stayAlone">Stay alone</label>
							<input onChange = {()=> handleRentType("SA")} type="radio" name="rent" id="stayAlone" checked = {rentType == "SA"}/>
						</span>
				}
				{
					canWR &&	
						<span>
							<label htmlFor="rent">With roommate</label>
							<input onChange = {()=> handleRentType("WR")}type="radio" name="rent" id="rent" checked = {rentType == "WR"}/>
						</span>
				}
				
			</div>
			<div className={style.rent}>
				{
					rent &&
						<>
							<span>Rent</span><span>Ksh. {rent}</span>
						</>
				}
				{
					deposit &&
						<>
							<span>Deposit</span><span>Ksh. {deposit}</span>
						</>
				}
			</div>
			
			<div className={style.rentInclusives}>
				<p>Rent inclusives</p>
				<div>
					{
						water &&
							<span>
								<label htmlFor="water">Water</label>
								<input type="checkbox" name="inclusive" value="water" id="water" checked = {water}/>
							</span>
					}
					{
						electricity &&
							<span>
								<label htmlFor="electricity">Electricity</label>
								<input type="checkbox" name="inclusive" value="electricity" id="electricity" checked = {electricity}/>
							</span>
					}
					{
						wifi &&
							<span>
								<label htmlFor="wifi">WIFI</label>
								<input type="checkbox" name="inclusive" value="wifi" id="wifi" checked = {wifi}/>
							</span>
					}
					
				</div>
			</div>
			<div className={style.requiredGender}>
				<p>Required gender</p>
				<span>
					{/* <span>
						<i className="fa-solid fa-mars"></i> 
					</span>
					<span>
						<i className="fa-solid fa-venus-mars"></i>
					</span>
					<span>
						<i className="fa-solid fa-venus"></i>
					</span> */}
					
					{props.room? props.room.attributes.requiredGender: undefined}
				</span>
			</div>
			
		</div>
	)
}

export default RoomDetails