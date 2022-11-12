import React from 'react';
import './portfolio.css';
import img1 from '../../assets/imgs/cabin.png';
import img2 from '../../assets/imgs/cake.png';
import img3 from '../../assets/imgs/circus.png';
import img4 from '../../assets/imgs/game.png';
import img5 from '../../assets/imgs/safe.png';
import img6 from '../../assets/imgs/submarine.png';
import Card from '../../components/card/Card';

export default function Portfolio() {
	let portfolioItems = [
		{ name: 'cabin', imgurl: img1, desc: '' },
		{ name: 'cake', imgurl: img2, desc: '' },
		{ name: 'circus', imgurl: img3, desc: '' },
		{ name: 'game', imgurl: img4, desc: '' },
		{ name: 'safe', imgurl: img5, desc: '' },
		{ name: 'submarine', imgurl: img6, desc: '' },
	];

	return (
		<>
			<div className="container py-5 mt-5 text-center">
				<header className="pt-5 mb-5">
					<div className="row">
						<div className="col-sm-12">
							<div className="title">
								<h3 className="w-bold text-capitalize position-relative">Portfolio</h3>
							</div>
						</div>
					</div>
				</header>
				<div className="row">
					{portfolioItems.map((item, index) => (
						<Card items={item} indexNumber={index} />
					))}
				</div>
			</div>
		</>
	);
}
