import React from 'react';
import './Contact.css';

export default function Contact() {
	return (
		<>
			<section className="contact text-center" id="contact">
				<div className="container py-5">
					<header className="pt-5 mb-5">
						<div className="row">
							<div className="col-sm-12">
								<div className="title">
									<h3 className="w-bold text-capitalize position-relative">Contact Me.</h3>
								</div>
							</div>
						</div>
					</header>

					<div className="contact-info mb-5">
						<div className="row">
							<div className="col-lg-4">
								<div className="item">
									<span className="icon">
										<i className="fa fa-location-arrow d-flex justify-content-center align-items-center rounded-circle mb-4" aria-hidden="true"></i>
									</span>
									<h6 className=" fw-bold">Address</h6>
									<p className="text-muted">6834 Hollywood Blvd - Los Angeles CA</p>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="item">
									<i className="fa fa-envelope d-flex justify-content-center align-items-center rounded-circle mb-4" aria-hidden="true"></i>
									<h6 className=" fw-bold">Email</h6>
									<p className="text-muted">ebrahimamra69@gmail.com</p>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="item">
									<span className="icon">
										<i className="fa fa-phone d-flex justify-content-center align-items-center rounded-circle mb-4" aria-hidden="true"></i>
									</span>
									<h6 className=" fw-bold">Phone</h6>
									<p className="text-muted">+20 010 2030 7846</p>
								</div>
							</div>
						</div>
					</div>

					<form action="" className=" text-start">
						<div className="row">
							<div className=".col-md-12 mb-4">
								<div className="row">
									<div className="col-md-6 mb-3">
										<input type="text" name="name" className="form-control bg-light" id="name" placeholder="Your Name" required="" />
									</div>
									<div className="col-md-6 ">
										<input type="text" name="name" className="form-control bg-light" id="name" placeholder="Email" required="" />
									</div>
								</div>
							</div>

							<div className="col-md-12 mb-4">
								<textarea className="form-control bg-light" name="message" rows="8" placeholder="Message" required=""></textarea>
							</div>
						</div>
						<input type="submit" value="Submit" className="btn btn-dark py-2 px-5" />
					</form>
				</div>
			</section>
		</>
	);
}
