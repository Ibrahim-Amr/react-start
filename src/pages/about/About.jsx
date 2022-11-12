import React from 'react';
import './About.css';

export default function About() {
	return (
		<>
			<section className="about py-5  my-5 " id="about">
				<div className="container ">
					<div className="row">
						<div className="col-lg-5 text-center mb-5">
							<div className="about-img">
								<img src="https://i.imgur.com/rxGcqiO.jpeg" alt="hero" className="w-100" />
							</div>
						</div>
						<div className="col-lg-6  d-flex justify-content-center align-items-center">
							<div className="about-content">
								<header className=" mb-4">
									<h3>About Me.</h3>
									<span className="text-muted text-uppercase">UI / UX Designer & Web Developer</span>
								</header>
								<p className=" text-muted mb-5">
									I am Ibrahim Omar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into
									electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
									containing
								</p>
								<button type="button" className="btn btn-dark py-2 px-4 me-3">
									Download C.V
								</button>
								<button type="button" className="btn btn-outline-dark py-2 px-4">
									Contact Me
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
