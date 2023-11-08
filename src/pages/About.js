import React,{useRef} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {useMotionValueEvent, useScroll,motion, useSpring, useTransform, transform } from 'framer-motion'
const About = () => {
	let text = `ello there developers and clients.
	I construct captivating websites
	with cutting-edge frameworks like React,Sass and Tailwind.
	 I possess a mastery of python
	 server-side programming and expertise 
	 in integrating SQL databases. 
	 Collaborating together,
	  we can breathe life into your web project.`
	let textArray = text.split(' ')
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"]
	})
	const transform = useTransform(scrollYProgress,[0,1],[0,textArray.length])
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log(transform.get(),'array')
	  })
	return (
		<div className="about-page-cont">
			<Nav></Nav>
			<div ref={targetRef} className="about-page">
			    <div className="text-cont">
				<span className="big">"H</span>
				<span className="small">
				  {/* {textArray?textArray.map((letter,index)=>{
					
                      return(
						<motion.span
						 
						> 
							{letter} 
						</motion.span>
					  )
				  }):''} */}
				  {text}
				</span>
			    </div>
			    	
			</div>
			<Footer></Footer>
		</div>
	)
}

export default About