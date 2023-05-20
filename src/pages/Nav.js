import React from 'react'
import {Link} from 'react-router-dom'
import Clock from 'react-live-clock';
import {useNavigate,useLocation} from 'react-router-dom'
const Nav = ({imageNav,contRef}) => {
	let location = useLocation()
	let navigate = useNavigate()
	let scrollHandler = () => {
		 if(location.pathname!='/'){
		 	navigate('/')
		 	
		 }
		 else{
		   if(contRef && contRef.current){
           contRef.current.scrollIntoView()
         }   
		 }
	}

	return (
	<div className={!imageNav?"nav-cont":"nav-cont up"}>
		<div className="logo">
		   <Link to="/" >
		   <h1>
		   	adibkhan
		   </h1>	
		   </Link>
		   	
		</div>

		<div className="navigate">
        <Link to="/skills" >
           <h1>SKILLS</h1>
        </Link>
           <h1 onClick={scrollHandler}>

           PROJECTS
           </h1>
           <Link to="/about">
            <h1>ABOUT</h1>
           </Link>
           	
		</div>

        <div className="timezone">
        	<h1 className="time">
        		 <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/dacca'} />
        	</h1>
        	<h1 className="location">
        		dhaka,bangladesh
        	</h1>
        </div>

		
   </div>

	)
}

export default Nav