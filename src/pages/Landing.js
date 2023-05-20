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
	 			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti possimus odio soluta est et amet suscipit impedit, hic earum, officia molestiae omnis quisquam facere provident corporis odit libero inventore vitae.
	 			Reiciendis, quae laudantium quibusdam tenetur dolor iusto incidunt est quos nesciunt consequuntur. Dolorem amet reiciendis deserunt ipsum incidunt ullam temporibus hic, corrupti officia aliquam. Saepe, sunt expedita fugit qui ab.
	 		</h1>
	 	</div>
        </div>
        <div className="side" id="right-text">
	 	<div className={textRight?"text-cont hidden-right":"text-cont"} id="cont-right" >
	 		<h1 className="heading">
	 			A front end developer with designing skills
	 		</h1>
	 		<h1 className="details">
	 			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis odit impedit eius, praesentium architecto, consequatur error quasi nemo maiores reprehenderit optio soluta dolore, quis pariatur. Beatae debitis quaerat, amet nobis.
	 			Voluptatibus inventore praesentium accusantium, iusto sed quibusdam aut esse, magni, dicta, commodi cupiditate at sapiente quidem doloribus! Qui maxime beatae esse non similique, perspiciatis vel eos incidunt temporibus eligendi laudantium!
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