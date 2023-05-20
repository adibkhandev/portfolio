import './sass/main.scss';
import FirstPage from './pages/FirstPage'
import Skills from './pages/Skills'
import Arsenal from './pages/Arsenal'
import Skillset from './pages/Skillset'
import About from './pages/About'
import Work from './pages/Work'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
           
          
              <AnimatedCursor
           
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
              />
            <Routes>
              <Route path="/" element={<FirstPage />} ></Route>
              <Route path="/skills" element={<Skills />} ></Route>
              <Route path="/arsenal" element={<Arsenal />}> </Route>
              <Route path="/skillset" element={<Skillset />}> </Route>
               <Route path="/about" element={<About />}> </Route>
               <Route path="/projects" element={<Work />}> </Route>
             
            </Routes>
             
 
          </BrowserRouter>
  );
}

export default App;
