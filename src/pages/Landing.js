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
	 			An aspiring react developer with expertise in vanila
javascript third party libraries, routing and centralised state management tools like Redux and Context
 Able of reading json data using Fetch and asios
UI libraries like Material UI Bootstrap and Tailwind
Preprocessoing tools like SASS and also writing responsive CSS   
Also a part time designer working with image files in photoshop and illustrations in Adobe Illustrator
Creating animations integrating latest js css keyframes
and svgs
	 		</h1>
	 	</div>
        </div>
        <div className="side" id="right-text">
	 	<div className={textRight?"text-cont hidden-right":"text-cont"} id="cont-right" >
	 		<h1 className="heading">
	 			Django backend dev and a part time python coder  
	 		</h1>
	 		<h1 className="details">
	 			    Profficient django developer who works with REST 
                    and JSON APIs while maniipulating data from the database with ORM oh and by the way django provides a pre built admin panel for that and bunch of 
                    user registration and auth models and managers out of the box I can also use dbms like MYSQL POSTGRESQL and MongoDb 
                    Well i actually started out with Python it's more of a hobby i still do code python throught my way  have worked with wen scrapping tools like selenium and made silly games with PyGame.Long story short i know the datatypes and syntax
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