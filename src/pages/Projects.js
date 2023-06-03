import React,{useState,useRef,useLayoutEffect,useEffect} from 'react'
import {isMobile} from 'react-device-detect'
import Footer from './Footer'
import weebzone_logo from '../images/weebzone_logo.png'
import adictionary_logo from '../images/aDictionary.svg'
import weebzone_categories from '../images/weebzone_categories.jpg'
import eye from '../images/icons8-eye-100.png'
import globe from '../images/icons8-globe-96.png'
import github from '../images/icons8-github-64.png'
import anchor from '../images/anchor.png'

const Projects = ({setImageNav,contRef}) => {
	let projects = [
			{
                "name":"rhino.io",
                "live_url":"https://adibkhandev.github.io/rhinoapp",
                "clip_url":"",
                "repo_url":"https://github.com/adibkhandev/rhinoapp",
                "image_url":weebzone_logo,
                "hover_image_url":weebzone_categories

			},
			{
                "name":"rhino.io",
                "live_url":"https://adictionary.vercel.app",
                "clip_url":"",
                "repo_url":"https://github.com/adibkhandev/adictionary",
                "image_url":adictionary_logo,
                "hover_image_url":weebzone_categories

			}
     ]  

    
	let [opacity,setOpacity]=useState(0)
console.log(opacity,'opa')
	let itemsRef = useRef(null)
    let midRef = useRef(null)
    let startRef = useRef(null)
    let itemContRef = useRef(null)
    let [itemsWidth,setItemsWidth] = useState('0')
    let [contWidth,setContWidth]= useState('0')
    let [margin,setMargin]= useState(()=>{
    	return window.innerWidth+300
    })
    let [scrollEvent,setScrollEvent] = useState(false)
    let marginHandler =e => {
    	console.log(e.deltaY)
    	let move = e.deltaY/3
    	let opacityAmount = e.deltaY/2000
    	console.log(opacityAmount,'amount')
    	console.log(itemContRef.current.style.marginLeft)
    	console.log(margin,'.arg')
    	console.log(itemsWidth,'itemsWidth')
    	    if(e.deltaY>0){
    	    	if(margin>=-itemsWidth-200){
        		setMargin(margin-move)

    	    	}
    	    	if(opacity<1){
    	    		setOpacity(opacity+opacityAmount)
    	    	}

    	    }
    	    if(e.deltaY<0){
             if(margin<=window.innerWidth+300){
            
        	 setMargin(margin-move)

             }
             if(opacity>0){
             	setOpacity(opacity+opacityAmount)
             }


    	    }

   
    	
    	
        
    }

    let [scrollStart,setScrollStart] = useState(false)
    let [previous,setPrevious] = useState(0)
       console.log(previous,'prevv')
    let scrollHandler = e => {
    	console.log(window.scrollY,'Y')
    	if(scrollStart){
	    	if(window.scrollY>previous){
	    		console.log('great')
	    		if(opacity<1){
	    		 setOpacity(opacity+0.1)
	    	    }
	    		setPrevious(window.scrollY)
	    	}
	    	if(window.scrollY<previous){
	    		console.log('decrement')
	    		if(opacity>0){
	    		 setOpacity(opacity-0.1)
	    		}

	    		setPrevious(window.scrollY)
	    	}
    		
    	}
    }
     useEffect(() => {
     	if(!isMobile){
    	 if(scrollEvent ){
    	 window.addEventListener('wheel',marginHandler)
    	 return () => {
    		window.removeEventListener('wheel',marginHandler)
    	 };
     	}


    	}
    	if(isMobile){
    		if(scrollStart){
    		 window.addEventListener('scroll',scrollHandler)
    		  return () =>{
    			window.removeEventListener('sroll',scrollHandler)
    		  }
    		}

    	}
    })


	useLayoutEffect(() => {
		setContWidth(contRef.current.offsetWidth)
		setItemsWidth(itemsRef.current.offsetWidth)
	},[])
    

    useEffect(() => {
      console.log(itemsWidth,'width')	
    })
    



    useEffect(() => {
    	
    	let landingObserver = new IntersectionObserver ((entries)=>{
    	       let entry = entries[0]
    	       console.log(entry)
    	       setImageNav(entry.isIntersecting)
    	       setScrollStart(entry.isIntersecting)
    	 },{threshold:0.0000000000001}
    	) 
    	if(contRef.current){
    		landingObserver.observe(contRef.current)
    	}
    	return () => {
    		if(contRef.current){
    		landingObserver.unobserve(contRef.current)
    	   }
    	};
    },[])

console.log(isMobile,'is mobile')
 useEffect(() => {
 	let midObserver = new IntersectionObserver((entries)=>{
          setScrollEvent(entries[0].isIntersecting)
 	})
 
 	if(midRef.current){

 	  midObserver.observe(midRef.current)
 	}

 	return () => {
 		if(midRef.current){
 		midObserver.unobserve(midRef.current)
      }
      
 	};
 }, [])
let scroller = (e)=>{
	console.log(e)
}
console.log(margin,'mar')
let mobileStyles = {
	flexDirection:"column",
	justifyContent:"center",
	position:"absolute",
	marginTop:"300vh"
}
let marginMover = margin + "px"
let contStyle = () => {
	if(isMobile){
         return mobileStyles  
	}
	else{
		if(margin){
	     return {marginLeft:`${marginMover}`}
		}
	}
}



	return (
	   <div onScroll={(e)=>scroller(e)}  style={{backgroundColor:`rgba(255,244,232,${opacity?opacity:0})`}}  ref={contRef}   className="projects-cont">
			<div className="hero-header" >
			 <h1>My Work</h1>
			</div>
			<button 
			 className="anchor"
             onClick={()=>{
             	console.log('confirm')
             	window.scrollTo({
             		top:0,
             		behavior:'smooth',
             	})
             }}
			 >
				<img src={anchor} alt=""/>
			</button>
	   	    <div style={contStyle()}
	   	         ref={itemContRef} className="items-cont">
				<div  ref={itemsRef} className="items">
				 {
				 	projects.map((project_data)=>{
				 		return(
					       <Item opacity={opacity} project_data={project_data}></Item>

				 		)
				 	})
				


				 }
					
				</div>

				

				</div>
	  {
	  	
		<div  className="projects-page">
	



				
					<div ref={startRef} className="start">
						
					</div>
				 
                 <div style={isMobile?{height:"400vh"}:null} ref={midRef} className="mid">
				
                   	
                 </div>
				 <div  className="end">
				
					

				 </div>
				
			
		</div>

	  	
	  }

		 </div>
	
		
	)
}

const Item = ({project_data,opacity}) => {
    
    return(
         <>
         <div style={{backgroundColor:`rgba(255,238,224,${opacity>0.8?opacity:1})`}} className="item-cont">
         	<div className="img-cont">
         		<img src={project_data.image_url} alt=""/>
         	</div>
         	<div className="button-cont">
         	<a target="_blank" href={project_data.live_url? project_data.live_url:''}>
         		<button style={{backgroundColor:`rgba(255,245,235,${opacity>0.6?opacity:1})`}} >
         			<img src={globe}alt=""/>
         			<h1>Web</h1>
         		</button>
         	</a>
         	<a target="_blank" href={project_data.repo_url? project_data.repo_url:''}>
         		<button style={{backgroundColor:`rgba(255,245,235,${opacity>0.6?opacity:1})`}} >
         			<img src={github} alt=""/>
         			<h1>Github</h1>
         		</button>
         	</a>
         		
         		<button style={{backgroundColor:`rgba(255,245,235,${opacity>0.6?opacity:1})`}} >
         			<img src={eye} alt=""/>
         			<h1>Clips</h1>
         		</button>
         	</div>
         </div>
         </>
    )
}

export default Projects