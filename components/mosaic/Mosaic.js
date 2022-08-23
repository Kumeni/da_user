import React, { useEffect, useRef } from 'react'
import style from './Mosaic.module.css'

function Mosaic(props) {

	const container = useRef(null);
  	const mosaic =(boxes, separation=30) => {
        let availableColumns = [];

        //This block creates the number of columns
        let i, j, end=false, k;
		for (j = 0; j < boxes.length; j++){
			if ( availableColumns.length ==0 ){
				availableColumns.push({
					left:boxes[j].getBoundingClientRect().x
				})
				continue;
			}

			//The code to know the column already exists
			for (i=0; i<availableColumns.length; i++){
				if(availableColumns[i].left == boxes[j].getBoundingClientRect().x){
					end=true;
					break;
				}
			}
			
			if(end)
				break;
			availableColumns.push({
				left:boxes[j].getBoundingClientRect().x
			})
		}
        //console.log(availableColumns);

		//this block loops through all the boxes in the viewport
		let m;
		for (m=0; m < boxes.length; m++){
			//This block targets the box above current box
			let l, element=boxes[m];
			for ( k = 0; k < availableColumns.length; k++){
				if(element.getBoundingClientRect().x == availableColumns[k].left){
					if(m-availableColumns.length >= 0)
						element.style.top = boxes[m-availableColumns.length].getBoundingClientRect().bottom+separation-element.getBoundingClientRect().top+"px";
					break;
				}
			}
		}
    }

	useEffect(()=>{

		container.current &&
			window.addEventListener( "resize", ()=>{
				mosaic(container.current.children, 20);
			})
	}, [container])

	useEffect( () => {
		if(container.current)
			mosaic(container.current.children, 20);
	}, [])
        //mosaic(document.getElementsByClassName("box"), 20);
	return (
		<div ref={container} className={style.mosaic}>
			{props.children}
		</div>
	)
}

export default Mosaic