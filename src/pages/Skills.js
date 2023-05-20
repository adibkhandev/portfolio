import React from 'react'
import {useState,useEffect,useRef} from 'react'
import Nav from './Nav'
import {Link} from "react-router-dom"
import AnimatedCursor from "react-animated-cursor"
import Footer from './Footer'
import Amazon from '../images/amazon.svg'
import Django from '../images/django.svg'
import Css from '../images/css.png'
import Sass from '../images/sass.png'
import Docker from '../images/docker.png'
import db from '../images/db.svg'
import Python from '../images/python.png'
import react from '../images/react.png'
import Redux from '../images/redux.png'
import Tailwind from '../images/tailwind.png'
import Js from '../images/js.png'
import Rest from '../images/rest.png'
const Skills = () => {
	let list = {
		frontend:[
           {
           	name:'React',
           	img:react,
           	desc:[
             "- expertise in website routing with react-router-dom ",
             "- integrating third party APIs with fetch and axios",
             "- using react hooks like useState useEffect useRef useReducer useLayoutEffect",
             "- hand in experience with state management tools like redux and the Context API",
             "- synchronus and asynchronus javascript fucntions",
             "- can sort,reduce,filter and map arrays", 
             "- mantaining virtual dom",
             "- formData to backend end point",
           	]
           },
           {
           	name:'Redux',
           	img:Redux,
           	desc:[
              "- centralised state management", 
              "- state creates a copy before restting",
              "- animation libraries like react-framer-motion",
           	]
           },
           {
           	name:'CSS',
           	img:Css,
           	desc:[
              "- responsive layouts using flexbox css grid clamp() minmax()",
              "- responsive fonts with ems and rems",
              "- desired css animations with keyframes and transition",
              "- styling and animating svg "
           	]
           },
           {
           	name:'Sass',
           	img:Sass,
           	desc:[
              "- sass mixins and variables",
              "- nested code structure"
           	]
           },
           {
           	name:'Tailwind',
           	img:Tailwind,
           	desc:[
              "- class-based styling through pre written css ",
              "- can be used to build production level layouts and transitions",
              "- shorter development time "
           	]
           },
           {
           	name:'Javascript',
           	img:Js,
           	desc:[
              "- DOM manipulation",
              "- eventlisteners to capture event and provide a function",
              "- alter css of document",
              "- IntersectionObserver",
              "- formData to backend endpoint",
              "- http requeests with fetch and axios",
              "- integration with third party APIS",
              "- redux state management"
           	]
           },

		],



		backend:[
            {
           	name:'Django',
           	img:Django,
           	desc:[
              "-  creating REST and JSON APIs with CRUD funtionality",
              "-  integrating databases like POSTGRESQL and MYSQL",
              "-  creating manyTomany OneToOne and ManyToOne relationship tables in the db",
              "-  serving static and media content upto production level",
              "-  expertise in Class based and funtion based views",
              "-  autheticated with csrf token",
              "-  dedicated admin panel from django"                          	]
           },
           {
           	name:'Python',
           	img:Python,
           	desc:[
              "- expertise in OOP in python",
              "- use third-party modules like pyTorch and pyGame",
              "- manipulating datatypes like dictionaries,boolean,list,tuples,arrays",
              "- experience in bash scripting and linux terminal commands"

           	]
           },
           {
           	name:'DRF',
           	img:Rest,
           	desc:[
             "- creating REST apis ",
             "- serializing db data to json and integrating with frontEnd technologies"
           	]
           },
           {
           	name:'Docker',
           	img:Docker,
           	desc:[
              "- containerizng applications to be hosted somewhere around the internet",
              "- providing depending software which can be updated throught time"
           	]
           },
           {
           	name:'DBMS',
           	img:db,
           	desc:[
              "- creatng relational databases",
              "- updating relational databases manually",
              "- configure authentication stuff"
           	]
           },
           {
           	name:'Cloud',
           	img:Amazon,
           	desc:[
             "- working with Paas and Laas",
             "- integrating private domain"
           	]
           },
		]
	}
	return (
		<div className="skill-page-cont"> 
		    {/*<AnimatedCursor
		       
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
		    <div className="skills-page">
             <Nav></Nav>
		     <div className="runner-cont">
		        <Link to="/arsenal" state={{data:list.backend}} >
		     	<div id="runner" className="runner-1">
		     	   <h1 className="main" >
		     		  BACK END DEVELOPMENT

		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  BACK END DEVELOPMENT
		     	   </h1>
		     	   	
		     	</div>
		        </Link>
		        	
		     	<div id="runner" className="runner-2">
		     		<h1 className="main" >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	   <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	   <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	   <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	   <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	   <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	    <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	    <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	    <h1 >
		     		  UI || UX DESIGNING
		     	   </h1>
		     	</div>
		        <Link to="/arsenal" state={{data:list.frontend}} >
		        <div id="runner" className="runner-3">
		     	<h1 className="main" >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	   <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     	    <h1 >
		     		  FRONT END DEVELOPMENT
		     	   </h1>
		     </div>
		    </Link>
		     </div>	
		    </div>
            <Footer></Footer>
		</div>
	)
}



export default Skills