import React,{useState,useRef,useLayoutEffect,useEffect} from 'react'
import Footer from './Footer'
import weebzone_logo from '../images/weebzone_logo.png'
import weebzone_categories from '../images/weebzone_categories.jpg'
import eye from '../images/icons8-eye-100.png'
import globe from '../images/icons8-globe-96.png'
import github from '../images/icons8-github-64.png'

const Projects = ({setImageNav,contRef}) => {
	let projects = [
			{
                "name":"rhino.io",
                "live_url":"adibkhandev/rhinoapp.github.io",
                "clip_url":"",
                "repo_url":"",
                "image_url":weebzone_logo,
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
    	let move = e.deltaY/6
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
    useEffect(() => {
    	if(scrollEvent){
    	window.addEventListener('wheel',marginHandler)
    	return () => {
    		window.removeEventListener('wheel',marginHandler)
    	};

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

	return (
	   <div  style={{backgroundColor:`rgba(255,244,232,${opacity?opacity:0})`}}  ref={contRef}   className="projects-cont">
			<div className="hero-header" >
			 <h1>My Work</h1>
			</div>
	   	    <div style={{marginLeft:` ${margin}px`}} ref={itemContRef} className="items-cont">
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
	  
		<div  className="projects-page">
	



				
					<div ref={startRef} className="start">
						
					</div>
				 
                 <div ref={midRef} className="mid">
				
                   	
                 </div>
				 <div  className="end">
				
					

				 </div>
				
			
		</div>

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
         		<button style={{backgroundColor:`rgba(255,245,235,${opacity>0.6?opacity:1})`}} >
         			<img src={globe}alt=""/>
         			<h1>Web</h1>
         		</button>
         		<button style={{backgroundColor:`rgba(255,245,235,${opacity>0.6?opacity:1})`}} >
         			<img src={github} alt=""/>
         			<h1>Github</h1>
         		</button>
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