import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
const Arsenal = () => {
	let location = useLocation()
	let {data} = location.state
	console.log(data,'dataa')
	return (
		<div className="arsenal-page">

		<div className="arsenal-cont" >
			{data.map((item)=>{
               
               return(
                  <div className="outer">
                  	<div className="inner">
               	     <Link to='/skillset' state={{data:item}} >
                  		<div className="img-cont">
                  			<img src={item.img} alt=""/>
                  		</div>
                  		<div className="header-cont">
                  		<h1>
                  			{item.name}
                  		</h1>
                  		</div>
                  			
               	    </Link>
                  	</div>
                  </div>
               	 	
               )
			})}
		</div>
		{/*<Footer></Footer>*/}
		</div>
	)
}

export default Arsenal