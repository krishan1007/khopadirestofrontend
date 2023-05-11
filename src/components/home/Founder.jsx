import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/xz.webp"
export const Founder = () => {
  return <section className='founder'>
  <motion.div>
  <img src={me} alt='me' height={200} width={200}></img>
  <h3>Krishan Kumar</h3>
  <p>
    Hey, I am Krishan Kumar, the founder of Khopadi Resto.
    <br />
    Our aim is to provide you best experience in taste of Burger ,Pizza .
  </p>
  </motion.div>
    
  </section>
}
