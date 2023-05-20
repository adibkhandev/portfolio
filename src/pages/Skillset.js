import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
const Skillset = () => {
	let location = useLocation()
	let {data} = location.state
	console.log(data,'dataa')
	useEffect(() => {
		 window.scrollTo(0, 0)
	}, [])
	return (
		<div className="skillset-page-cont">
		<div className="skillset-page">
			<Nav></Nav>
			<div className="cont">
			<div className="image-cont">
				<img src={data.img} alt=""/>
			</div>
			<div className="text-holder">
			    
			    
			    	
				<div className="sub-headers">
				 <h1 className="header">
					{data.name}
				 </h1>
				{data.desc.map((item)=>{
					return(
                       <h1 className="sub-header">
                       	 {item}
                       </h1>
					)
				})}
				</div>
					
			</div>
			</div>
				
		</div>
		<Footer></Footer>
		</div>
	)
}

export default Skillset