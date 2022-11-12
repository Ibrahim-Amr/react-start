import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top mb-5" id="mainNav">
				<div className="container">
					<div className="logo">
						<Link className="navbar-brand" to="">
							Start React
						</Link>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse text-uppercase nav-links" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item py-1 ps-2 position-relative">
								<Link className="nav-link uline" to="">
									Home
								</Link>
							</li>
							<li className="nav-item py-1 ps-2 position-relative">
								<Link className="nav-link uline " to="about">
									About
								</Link>
							</li>
							<li className="nav-item py-1 ps-2 position-relative">
								<Link className="nav-link uline" to="portfolio">
									Portfoio
								</Link>
							</li>
							<li className="nav-item py-1 ps-2 position-relative">
								<Link className="nav-link uline" to="contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
