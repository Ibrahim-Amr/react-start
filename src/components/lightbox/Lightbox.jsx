import React, { useState } from 'react';

export default function Lightbox(props) {
	return (
		<>
			<div className="popup-layer ">
				<div className="popup py-3 position-relative">
					<div className="container">
						<div className="row">
							<div className="col-md-7 mx-auto">
								<i className="fa-solid fa-xmark position-absolute top-0 end-0 m-4 text-danger" onClick={props.handleCLickClose}></i>
								<h1 className="title mb-5  text-uppercase fw-bolder">{props.item.name}</h1>
								<img src={props.item.imgurl} alt="" className="w-100 rounded-3 mb-5 " />
								<p className="mb-2 text-dark">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos
									quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
								</p>
								<button className="btn btn-outline-danger" onClick={props.handleCLickClose}>
									Close Window
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
