import React from 'react';

export default function Notfound() {
	return (
		<>
			<div className="container d-flex justify-content-center align-items-start flex-column vh-100">
				<i class="fa-solid fa-bug fa-10x text-muted mb-5"></i>
				<h1 className="fs-1 fw-bolder">Page Not Found</h1>
				<p className="text-muted fs-3">We couldn't find what you were looking for.</p>
				<p className=" fs-4">Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
			</div>
		</>
	);
}
