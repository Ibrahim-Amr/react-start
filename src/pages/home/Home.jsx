import React from 'react';
import './Home.css';

export default function Home() {
	return (
		<>
			<header className="home layer vh-100" id="home position-relative">
				<div className="layer d-flex justify-content-center align-items-center vh-100" id="home">
					<div className="home-content">
						<img src="http://routeegypt.com/start-react/assets/img/avataaars.svg" className="w-50 mb-5" alt="" srcset="" />
						<h5 className="text-white">Start React</h5>
						<h3 className="text-white">Graphic Artist - Web Designer - Illustrator</h3>
					</div>
				</div>
			</header>
		</>
	);
}
