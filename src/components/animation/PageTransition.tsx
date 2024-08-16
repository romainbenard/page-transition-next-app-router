'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const PageTransition = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
