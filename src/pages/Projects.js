import React,{useState,useRef,useLayoutEffect,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import {isMobile} from 'react-device-detect'
import Footer from './Footer'
import anchor from '../images/anchor.png'
import texture from '../images/texture.jpg'
import data from './Data'
import { useMotionValueEvent , useScroll,motion, useSpring, useTransform, transform } from 'framer-motion'
const Projects = ({setImageNav,contRef,setShrinkTime}) => {
const targetRef = useRef(null)
const { scrollYProgress } = useScroll({
	target: targetRef,
	offset: ["start end", "end start"]
})
const transform = useTransform(scrollYProgress,[0,1],[5000,-5000])

useMotionValueEvent(scrollYProgress, "change", (latest) => {
	if(latest>0.01){
		console.log('gooo')
        setShrinkTime(true)
	}
	else{
		setShrinkTime(false)
	}
})
	return (
            <div 
			 ref={targetRef} 
			 className={'project-page-frame'+ " " + (isMobile?'mobile-frame':'')}>
				<div className="hero-header" >
			 <h1>My Work</h1>
			</div>
			 <button 
			  className="anchor"
              onClick={()=>{
             	window.scrollTo({
             		top:0,
             		behavior:'smooth',
             	})
               }}
			  >	
			 <img src={anchor} alt=""/>
			</button>
			<motion.div 
			 style={{x:!isMobile?transform:''}}
			 
			 className={ "projects-page" +" "+ (isMobile?'mobile-projects':'')}
			 >
				{data.map((project_data)=>{
				 		return(
							<div className='items-cont'>
					           <Item opacity={1} project_data={project_data}></Item>
						   </div>

				 		)
				 	})}
			

			</motion.div>
				

			</div>
	
		
	)
}

const Item = ({project_data,opacity}) => {
    
    return(
         <>
		 <div className="item-cont">
		 <Link to={project_data.live_url}>
		 <motion.div  whileTap={{ scale: 0.9 }} className="item">
				<div className="border-layer"></div>
				
				<div className="paper-layer">
					<img src={texture} alt="" />
				</div>

				<div className="content-layer">
					<div className="img-cont">
						<img src={project_data.image_url} alt=""/>
					</div>
					<div className="header">
						<h1>
						{project_data.name}
						</h1>
						<h1 className="release">
							{project_data.release}
						</h1>
					</div>
					<div className="details">
						<h1 className="first">
						   {project_data.intro}
						</h1>
						<h1 className="second">
							{project_data.extra}
						</h1>

					</div>
					<div className="tools-cont">
						<div className="names">
							{project_data.tools.map((tool)=>{
								return(
									<div className="name">
                                      <h1>{tool.name}</h1>
									</div>
								)	
							})}
						</div>
						<div className="bars">
							{project_data.tools.map((tool)=>{
								return (
								  <div className="bar-cont">
									  <div style={{width:tool.percent + "%"}} className="bar"></div>
								  </div>

								)
							})}
						</div>
					</div>
					
				</div>

			</motion.div>
		 </Link>
			

		 </div>
         </>
    )
}

export default Projects