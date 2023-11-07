import React,{useRef,useEffect} from 'react'
import { useScroll,motion, useSpring, useTransform } from 'framer-motion'
const Demo=()=> {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })
  const spring  = useSpring(scrollYProgress)
  const transform = useTransform(scrollYProgress,[0,1],[0,1080])
    return (
      <>
        <div className="container">
          <motion.div
           style={{ rotate: transform  }}
           ref={targetRef}
           className="circle"
           >

          </motion.div>
        </div>
      </>
    )
}

export default Demo
