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
				    ello there developers and clients
					I am a computer science enthusist i develop 
                   modern web applications and also design them 
                   every now and then.
                   Turn your design or idea into reality now
                   and together we shall create value.
				</span>
			    </div>
			    	
			</div>
			<Footer></Footer>
		</div>
	)
}

export default About