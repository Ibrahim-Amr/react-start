import React, { useState } from 'react';
import Lightbox from '../lightbox/Lightbox';
import './Card.css';

export default function Card(props) {
	const [box, setlightbox] = useState(false);
	const handleCLickOpen = () => {
		setlightbox(true);
	};
	const handleCLickClose = () => {
		setlightbox(false);
	};
	return (
		<>
			<div className="item col-lg-4 col-md-6 mb-5 position-relative " key={props.indexNumber}>
				<div className="card border-0 shadow" onClick={() => {handleCLickOpen()}}>
					<div className="card-img overflow-hidden position-relative">
						<img src={props.items.imgurl} className="card-img-top" alt="work" />
					</div>

					<div className="card-caption text-center position-absolute bg-black top-0 bottom-0 w-100 d-flex flex-column justify-content-center ">
						<h6 className="card-text text-white">
							<i className="fa-solid fa-plus fa-5x"></i>
						</h6>
					</div>
				</div>
			</div>
			{box ? <Lightbox item={props.items} handleCLickClose={handleCLickClose} /> : ''}
		</>
	);
}
