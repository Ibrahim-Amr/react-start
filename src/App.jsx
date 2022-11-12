import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Layout from './pages/Layout';
import Notfound from './pages/NotFound/Notfound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/portfolio/Portfolio';

let routers = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'contact', element: <Contact /> },
			{ path: 'portfolio', element: <Portfolio /> },
			{ path: '*', element: <Notfound /> },
		],
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={routers}></RouterProvider>
		</>
	);
}
