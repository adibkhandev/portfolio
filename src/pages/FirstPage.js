import React,{useState,useRef,useEffect} from 'react'
import Landing,{Connect} from './Landing'
import Projects from './Projects'
import Footer from './Footer'
import Orbit from './Orbit'
import AnimatedCursor from "react-animated-cursor"


const FirstPage = () => {
	let [imageNav,setImageNav]=useState(false)
	    let contRef = useRef(null)
	useEffect(() => {
		console.log(contRef,'reff')
	}, [contRef])
		return (
		<>
		    {/* <AnimatedCursor
		       
                 innerSize={18}
                 outerSize={84}
                 color={'0,0,0'}
                 outerAlpha={0.4}
                 innerScale={1.6}
                 outerScale={1.2}
                 trailingSpeed={8}
                  innerStyle={{
                    filter:'invert(1)',
                    mixBlendMode:'difference',
                  }}
             />*/}
		<div className="first-page-frame">
			<Orbit></Orbit>
			<div className='first-page'>
				<Landing contRef={contRef} imageNav={imageNav} setImageNav={setImageNav} ></Landing>
				{/*<Connect setImageNav={setImageNav} ></Connect>*/}
				<Projects contRef={contRef} setImageNav={setImageNav} ></Projects>
			</div>
				<Footer></Footer>
			
		</div>	
		</>
	)
}

export default FirstPage