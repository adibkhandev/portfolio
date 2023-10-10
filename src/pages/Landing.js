import React,{useState,useEffect,useRef,useLayoutEffect} from 'react'
import Nav from './Nav'
import model from '../images/model.png'

const Landing = ({imageNav,setImageNav,contRef}) => {
	let [textRight,setTextRight] = useState(true)
	let [textLeft,setTextLeft] = useState(true)
	let [scroller,setScroller] = useState(true)
	let [inbottom,setInbottom]=useState(false)
	let [height,setHeight] = useState(0)
	let page_ref = useRef(null)

	console.log(textRight,'ttt')
   
   useLayoutEffect(() => {
   	setHeight(page_ref.current.offsetHeight)
   },[])

	useEffect(() => {
	   let checker = () => {
            // console.log(window.scrollY,'scr')
	   	if(scroller){
            if (window.scrollY>=600 && window.scrollY<=height ){
            	console.log('still interfering')
            	setTextLeft(false)
            }
            if(window.scrollY<600){
                setTextLeft(true)
            }
            if(1800<=window.scrollY && window.scrollY<=height ){
            	console.log('still interfering',height-500,window.scrollY)
            
            	setTextRight(false)
            	setInbottom(true)

            	
            }
             if(window.scrollY<1800){
                setTextRight(true)
            }
          }

	   }
	   window.addEventListener('scroll',checker);
	   return ()=>{
	   	window.removeEventListener('scroll',checker);
	   }	
	})




	return (

	 <div className="landing-page">
	 <Nav contRef={contRef} imageNav={imageNav} ></Nav>
      <div className="siders">
        <div className="side" id="left-text">
	 	<div className={textLeft?"text-cont hidden-left":"text-cont"} id="cont-left">
	 		<h1 className="heading">
	 			A front end developer with designing skills
	 		</h1>
	 		<h1 className="details">
	 			With expertise in React and Vue JS along with experience in 
	 			Next and Nuxt JS 
	 			I can beathe life into any of your figma deisgns or ideas  
	 			with any given API endpoint that can respond with JSON
	 			or i can make the APIs with next or nuxt JS or maybe use any of my backend services
	 			Have worked on animations with Framer motion for react and VueUse for Vue
	 			I am a sass fan but i can also make pretty sophisticated animations and responsive UI just using
	 			raw css then again if i am working on smaller projects I use tailwind or other Pre built UI libraries
	 			like Material Chakra Prime Vue Bootstrap
	 			Oh by the way i designed this myself using a startup web app penpot shoutout to them
	 			But i have also worked in Figma Illustrator Photoshop even if we don't have a degin i can do that for you
	 		</h1>
	 	</div>
        </div>
        <div className="side" id="right-text">
	 	<div className={textRight?"text-cont hidden-right":"text-cont"} id="cont-right" >
	 		<h1 className="heading">
	 			Django backend dev and a part time python coder  
	 		</h1>
	 		<h1 className="details">
	 			    Profficient python and Node JS developer who works with REST 
                    and JSON APIs while maniipulating data from the database with ORM oh and by the way django provides a pre built admin panel for that and bunch of 
                    user registration and auth models and managers out of the box we can do the same things using a Node server  As I can mantain databases like MYSQL POSTGRESQL and MongoDb 
                    i can wok with any of your required technology  
                    Well i actually started out with Python then i got into Node but i use the front end solutions more often for time and cost efficience i still love python i have worked with web scrapping tools like selenium and made silly games with PyGame.
	 		</h1>
	 	</div>
        </div>	
             <div 
              onClick={()=>{
             	setTextRight(true)
             	console.log('clicks',imageNav)
              }}
              // onAnimationEnd={()=>{
              // 	setImageNav(false)
              // }} 
             className={!imageNav?"hero-image above":"hero-image below"}>
             <img src={model} alt=""/>
             </div>   	
      </div>
         <div ref={page_ref} className="content">
         	
         </div>
        
        	
	 	
	 </div>
	)
}



export default Landing