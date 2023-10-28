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
		let itemsRef = useRef(null)
		let projectRef= useRef(null);
		let itemContRef = useRef(null);
		let [margin,setMargin]= useState(0);
		let [contWidth,setContWidth] = useState(null);
		let [itemsWidth,setItemsWidth] = useState(null);
		let [scrollEvent,setScrollEvent] = useState(false)
		// useEffect(()=>{
        //      if(itemContRef.current){
		// 		 console.log('setting number from node -' ,Number(itemContRef.current.style.marginLeft))
		// 		 setMargin(Number(itemContRef.current.style.marginLeft.replace('%','')))
		// 		 console.log(itemContRef.current.style.marginLeft,'item node')
		// 		}
		// 	},[itemContRef])
			//pc handler of containers
let marginHandler = e => {
	if(scrollEvent){
		console.log(e.deltaY,'delta')
		console.log('handling margin')
		if(e.deltaY>0){
			console.log('margin increment')
			setMargin(margin=>{
				return margin+10
			})
			
		}   
		if(e.deltaY<0){
			console.log('margin decrement')
			setMargin(margin=>{
				return margin-10
			})
		}

	}
 }
	//margin state manager
	useEffect(()=>{
		console.log('margin state changed to :' ,margin)
		if(margin){
			console.log(margin,'-current margin spot')
			// if(margin=-100){
			// 	console.log(margin,'--is the limit')
			// 	setScrollEvent(false);
			// }
			// if(margin=100){
			// 	setScrollEvent(true);
			// 	console.log(margin,'--is the limit')
			// }
			console.log(-2010<-110,'js logic')
			if(margin<-110){
				setScrollEvent(false);
				console.log(margin,'--is the limit')
			}
			if(margin>100){
				setScrollEvent(false);
				console.log(margin,'--is the limit')
			}
			if(margin<100 && margin>-110){
				setScrollEvent(true)
			}

		}
	},[margin])
	//pointing at handler functions of mobile and pc
	 useEffect(() => {
		console.log('listener placed')
		console.log('mobile device -' ,isMobile)
	if(!isMobile){
		if(scrollEvent ){
		window.addEventListener('wheel',marginHandler)
		return () => {
		window.removeEventListener('wheel',marginHandler)
		};
	}
	else{
		console.log('event unplugged')
	}
}
	if(isMobile){
		if(scrollEvent){
			window.addEventListener('scroll',scrollHandler)
			return () =>{
			window.removeEventListener('sroll',scrollHandler)
			}
		}
	
	}
	})
	//
	//observing functions
	//=>
	useEffect(() => {	
	   console.log('observer initiated')
	   let landingObserver = new IntersectionObserver ((entries)=>{
		   let entry = entries[0]
	//		console.log(entry)
		   setImageNav(entry.isIntersecting)
		//    setScrollStart(entry.isIntersecting)
		  },{threshold:0.0000000000001}
	   ) 
	   let projectObserver = new IntersectionObserver((entries)=>{
		console.log('event activated')   
		setScrollEvent(entries[0].isIntersecting)
	//		console.log(entries[0].isIntersecting,'pro ref')
	   },{threshold:0.8})
	   if(projectRef.current){
		
		   projectObserver.observe(projectRef.current)
		   }
	   if(contRef.current){
		   landingObserver.observe(contRef.current)
	   }
	return () => {
	  if(projectRef.current){
	   projectObserver.unobserve(projectRef.current)
	  }
	  else if(contRef.current){
	   landingObserver.unobserve(contRef.current)
	  }
	}; 
	},[])
	useEffect(()=>{
		console.log(scrollEvent,'changed into')
        if(scrollEvent){
			console.log('you can unleash the horizontal scroling')

			//stop scrolling here
			// document.body.style.overflow = "hidden";
            // document.body.style.userSelect = "none";
		}
		else{
			console.log('horizontal scroling shutdown')
            
			//start again
			// document.body.style.overflow = "auto";
            // document.body.style.userSelect = "auto";
		}
	},[scrollEvent])
    let [previous,setPrevious] = useState(0)
//       console.log(previous,'prevv')

	//mobile mover of containers
    let scrollHandler = e => {
//    	console.log(window.scrollY,'Y')
    	if(scrollEvent){
	    	if(window.scrollY>previous){
//	    		console.log('great')
	    		
	    		setPrevious(window.scrollY)
	    	}
	    	if(window.scrollY<previous){
//	    		console.log('decrement')
	    		

	    		setPrevious(window.scrollY)
	    	}
    		
    	}
    }


	return (
// 	   <div 
// 	      ref={contRef}   className="projects-cont">
// 			<div className="hero-header" >
// 			 <h1>My Work</h1>
// 			</div>
// 			 <button 
// 			  className="anchor"
//               onClick={()=>{
// //             	console.log('confirm')
//              	window.scrollTo({
//              		top:0,
//              		behavior:'smooth',
//              	})
//                }}
// 			  >	
// 			 <img src={anchor} alt=""/>
// 			</button>
            <div className='project-page-frame'>
				<div className="hero-header" >
			 <h1>My Work</h1>
			</div>
			 <button 
			  className="anchor"
              onClick={()=>{
//             	console.log('confirm')
             	window.scrollTo({
             		top:0,
             		behavior:'smooth',
             	})
               }}
			  >	
			 <img src={anchor} alt=""/>
			</button>
			<Swiper
				slidesPerView="1"
				
				effect="creative"
				onSwiper={(swiper)=>console.log(swiper,'swipeeerr')}
				onSlideChange={() => console.log('slide change')}
				keyboard={{ enabled: true, onlyInViewport: false }}
				direction="horizontal"
				height={window.innerHeight}
				className="projects-page"
			>
				
				{projects.map((project_data)=>{
				 		return(
							<SwiperSlide className='items-cont'>
					           <Item opacity={1} project_data={project_data}></Item>
						   </SwiperSlide>

				 		)
				 	})}
			</Swiper>

			</div>
		// {/* <div ref={projectRef}  className="projects-page">
		//     <div
		// 	ref={itemContRef} className="items-cont">
		// 		    {projects.map((project_data)=>{
		// 		 		return(
		// 			       <Item opacity={1} project_data={project_data}></Item>

		// 		 		)
		// 		 	})}
			 
        //      </div>
        // </div> */}
    // </div>
	
		
	)
}

const Item = ({project_data,opacity}) => {
    
    return(
         <>
		 <div className="item-cont">
		 <Link to={project_data.live_url}>
		 <div className="item">
				<div className="border-layer"></div>
				{/* <div className="blur-layer">
					<div className="child"></div>
				</div> */}
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

			</div>
		 </Link>
			

		 </div>
         </>
    )
}

export default Projects