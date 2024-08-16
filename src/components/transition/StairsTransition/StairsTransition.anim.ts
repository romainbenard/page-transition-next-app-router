import { Variants } from 'framer-motion'

export const anim = (variants: Variants, custom?: number) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    custom,
  }
}

export const overlay: Variants = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
}

export const expand: Variants = {
  initial: {
    top: 0,
  },
  enter: (i) => ({
    top: '100%',
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: 'easeOut',
    },
    transitionEnd: {
      height: 0,
      top: 0,
    },
  }),
  exit: (i) => ({
    height: '100%',
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: 'easeIn',
    },
  }),
}
