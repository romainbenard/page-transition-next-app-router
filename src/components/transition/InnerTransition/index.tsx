'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { slide, opacity, perspective } from './InnerTransition.anim'
import { PropsWithChildren } from 'react'

const anim = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  }
}

export default function InnerTransition({ children }: PropsWithChildren) {
  return (
    <div className="bg-black">
      <motion.div
        className="fixed left-0 top-0 h-screen w-full bg-white z-10"
        {...anim(slide)}
      />
      <motion.div className="bg-white p-8 h-screen" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
