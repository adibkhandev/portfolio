import './sass/main.scss';
import FirstPage from './pages/FirstPage'
import Skills from './pages/Skills'
import Arsenal from './pages/Arsenal'
import Skillset from './pages/Skillset'
import About from './pages/About'
import Work from './pages/Work'
import Demo from './pages/Demo'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from 'react-device-detect';
function App() {
  return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
           
          {
            !isMobile?(
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
                  clickables={[
                      '.time',
                      '.anchor',
                      '.project-nav',
                      'a',
                      'input[type="text"]',
                      'input[type="email"]',
                      'input[type="number"]',
                      'input[type="submit"]',
                      'input[type="image"]',
                      'label[for]',
                      'select',
                      'textarea',
                      'button',
                    ]}
              />

            ):''
          }
            <Routes>
              <Route path="/" element={<FirstPage />} ></Route>
              <Route path="/skills" element={<Skills />} ></Route>
              <Route path="/arsenal" element={<Arsenal />}> </Route>
              <Route path="/skillset" element={<Skillset />}> </Route>
               <Route path="/about" element={<About />}> </Route>
               <Route path="/projects" element={<Work />}> </Route>
               <Route path="/demo" element={<Demo/>}></Route>
             
            </Routes>
             
 
          </BrowserRouter>
  );
}

export default App;
