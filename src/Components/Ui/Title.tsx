'use client';
import {motion} from 'framer-motion'
const Title = () => {
  return (
    <motion.h3 
       className="text-5xl font-extrabold uppercase text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Todo app
      </motion.h3>
  )
}

export default Title