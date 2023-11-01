import React,{useEffect,useState,useRef} from 'react'
import spinner from '../images/spinner.png'
const Orbit=()=> {
    let imageRef = useRef(null)
    let [manualSpin,setManualSpin]=useState(0)
    console.log(window.pageYOffset,'page Y')
    let manualSpinner = () => {
        
        console.log(window.pageYOffset,'page YY')
        console.log(imageRef.current.style,'reff')
        // setManualSpin(window.pageYOffset)
        imageRef.current.style.transform = `rotate(${window.pageYOffset/5}deg)`
        
    }
    useEffect(()=>{
        window.addEventListener('scroll',manualSpinner);
        return () => {
            window.addEventListener('scroll',manualSpinner);
        }
    })
    return (
        <>
        <div className="spin-cont">
          <img ref={imageRef}   className='spinner' src={spinner} alt="" />
        </div>
        </>
    )
}

export default Orbit