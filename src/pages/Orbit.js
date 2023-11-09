import React,{useEffect,useState,useRef} from 'react'
import spinner from '../images/spinner.png'
import {motion,useScroll,useTransform} from 'framer-motion'
const Orbit=({shrinkTime})=> {
    let imageRef = useRef(null);
    let contRef = useRef(null);
    console.log(window.pageYOffset,'page Y')
    let manualSpinner = () => {
        console.log(window.innerWidth,'spin') 
        let number = 8000
        if(contRef.current && imageRef.current){
            imageRef.current.style.transform = `rotate(${window.pageYOffset/5}deg)`
            if(window.pageYOffset>number){
                imageRef.current.style.transform = `rotate(${window.pageYOffset/5}deg)`
                contRef.current.style.transform = `translateX(${-(number/2)+(window.pageYOffset/2)}px)`
            }
           
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',manualSpinner);
        return () => {
            window.addEventListener('scroll',manualSpinner);
        }
    })
    const {scrollYProgress}=useScroll()
    const scaling = useTransform(scrollYProgress,[0,1],[0,1])
    return (
        <>
        <motion.div 
          style={shrinkTime?{zIndex:-2}:{zIndex:1}}
          className="spin-cont"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          ref={contRef}
          transition={{ ease: "easeOut", duration: 2 }}
          >
            <div className="sub-cont">
                <img 
                    ref={imageRef}   
                    className='spinner' 
                    src={spinner} 
                    alt="" 
                />

            </div>
        </motion.div>
        </>
    )
}

export default Orbit