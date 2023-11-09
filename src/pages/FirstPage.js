import React,{useState,useRef,useEffect} from 'react'
import Landing,{Connect} from './Landing'
import Projects from './Projects'
import Footer from './Footer'
import Orbit from './Orbit'
import AnimatedCursor from "react-animated-cursor"
import {motion,AnimatePresence, useMotionValue,useScroll, useTransform,LayoutGroup} from 'framer-motion'

const FirstPage = () => {
	let contRef = useRef(null)
	let projectRef = useRef(null)
	let [shrinkTime,setShrinkTime] = useState(false)
	let [imageNav,setImageNav]=useState(false)
		return (
			<>
				<div className="first-page-frame">
					<Orbit shrinkTime={shrinkTime}></Orbit>

					<div className='first-page'>
						<Landing contRef={contRef} imageNav={imageNav} setImageNav={setImageNav} ></Landing>
						<Projects setShrinkTime={setShrinkTime} ref={projectRef} contRef={contRef} setImageNav={setImageNav} ></Projects>
					</div>
					<Footer></Footer>

				</div>	
			</>
	)
}

export default FirstPage