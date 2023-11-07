import React,{useState,useRef,useLayoutEffect,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import {isMobile} from 'react-device-detect'
import Footer from './Footer'
import weebzone_logo from '../images/manga-archieve-back.jpg'
import adictionary_logo from '../images/adictionary-2d.png'
import weebzone_categories from '../images/weebzone_categories.jpg'
import eye from '../images/icons8-eye-100.png'
import globe from '../images/icons8-globe-96.png'
import github from '../images/icons8-github-64.png'
import anchor from '../images/anchor.png'
import sugary from '../images/sugary.png'
import texture from '../images/texture.jpg'
import { useScroll,motion, useSpring, useTransform, transform } from 'framer-motion'
const Projects = ({setImageNav,contRef}) => {
	let projects = [
		{
                "name":"Sugary",
                "live_url":"https://sugary.me/",
                "clip_url":"",
                "repo_url":"https://github.com/SugaryLLC/sugary-site-web",
                "image_url":sugary,
                "hover_image_url":weebzone_categories,
                "intro":'Lorem ipsum dolor sit amet consectetur. Facilisis tortor lectus vel a. Tortor sapien ornare at . Non elementum dolor neque arcu nascetur.',
				"extra":'Lorem ipsum dolor sit amet consectetur. Ut ut sagittis sed amet magna nec id  dictum enim aenean blandit sit. Eget nibh  commodo non ac phasellus. Amet sem tellus sem aliquam cursus vel a. Id egestas sed tortor et. Malesuada egestas senectus adipiscing risus elementum sit amet tortor.',
				"release":'11/07/2022',
				"tools":[
					{
						name:'Vue',
						percent:80,
					},
					{
						name:'Nuxt',
						percent:70,
					},
					{
						name:'Sass',
						percent:20,
					}
				],
			},
			{
                "name":"Manga zone",
                "live_url":"https://adibkhandev.github.io/rhinoapp",
                "clip_url":"",
                "repo_url":"https://github.com/adibkhandev/rhinoapp",
                "image_url":weebzone_logo,
                "hover_image_url":weebzone_categories,
                "intro":'Lorem ipsum dolor sit amet consectetur. Facilisis tortor lectus vel a. Tortor sapien ornare at condimentum est. Feugiat magna dolor aliquet dolor neque arcu nascetur.',
				"extra":'Lorem ipsum dolor sit amet consectetur. Ut ut sagittis sed amet magna nec id bibendum erat. Suscipit pellentesque dictum enim aenean blandit sit. Eget nibh blandit enim aliquam. Rutrum pellentesque commodo non ac phasellus. Amet sem tellus sem aliquam cursus vel a. Id egestas sed tortor et. Malesuada egestas senectus adipiscing risus elementum sit amet tortor.',
				"release":'11/07/2022',
				"tools":[
					{
						name:'Vue',
						percent:80,
					},
					{
						name:'Nuxt',
						percent:70,
					},
					{
						name:'Sass',
						percent:20,
					}
				],

			},
			{
                "name":"Adictionary",
                "live_url":"https://adictionary.vercel.app",
                "clip_url":"",
                "repo_url":"https://github.com/adibkhandev/adictionary",
                "image_url":adictionary_logo,
                "hover_image_url":weebzone_categories,
                "intro":'Lorem ipsum dolor sit amet consectetur. Facilisis tortor lectus vel a. Tortor sapien ornare at condimentum est. Feugiat . Non elementum dolor neque arcu nascetur.',
				"extra":'Lorem ipsum dolor sit amet consectetur. Ut ut sagittis sed amet magna nec id bibendum erat. Suscipit pellentesque dictum enim aenean blandit sit. Eget nibh blandit enim aliquam. Rutrum pellentesque commodo non ac phasellus. Amet sem tellus sem aliquam cursus vel a. Id egestas sed tortor et. Malesuada egestas senectus adipiscing risus elementum sit amet tortor.',
				"release":'11/07/2022',
				"tools":[
					{
						name:'Vue',
						percent:80,
					},
					{
						name:'Nuxt',
						percent:70,
					},
					{
						name:'Sass',
						percent:20,
					}
				],

			},

		]  
		const targetRef = useRef(null)
		const { scrollYProgress } = useScroll({
			target: targetRef,
			offset: ["start end", "end start"]
		})
		const transform = useTransform(scrollYProgress,[0,1],[5000,-5000])
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
				{projects.map((project_data)=>{
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
								return <h1>{tool.name}</h1>
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