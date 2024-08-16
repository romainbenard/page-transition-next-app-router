'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { anim, expand, overlay } from './StairsTransition.anim'

const StairsTransition = ({ children }: PropsWithChildren) => {
  const columns = 5

  return (
    <div className="bg-white p-8 h-screen w-full">
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none bg-black"
        {...anim(overlay)}
      />
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none flex z-10">
        {[...Array(columns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              className="relative w-full h-full bg-black"
              {...anim(expand, columns - i)}
            />
          )
        })}
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {children}
    </div>
  )
}

export default StairsTransition
