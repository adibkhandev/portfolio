import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
const About = () => {
	return (
		<div className="about-page-cont">
			<Nav></Nav>
			<div className="about-page">
			    <div className="text-cont">
				<span className="big">"H</span>
				<span className="small">
				    ello there developers and clients.
				    I construct captivating websites
					with cutting-edge frameworks like React,Sass and Tailwind.
					 I possess a mastery of python
					 server-side programming and expertise 
					 in integrating SQL databases. 
					 Collaborating together,
					  we can breathe life into your web project.
				</span>
			    </div>
			    	
			</div>
			<Footer></Footer>
		</div>
	)
}

export default About