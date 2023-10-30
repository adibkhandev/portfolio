import React from 'react'
import spinner from '../images/spinner.png'
const Orbit=()=> {
  function circlePath(cx, cy, r){
    return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,1 '+(r*2)+',0 a '+r+','+r+' 0 1,1 -'+(r*2)+',0';
}
    return (
        <>
        <img className='spinner' src={spinner} alt="" />
        </>
    )
}

export default Orbit