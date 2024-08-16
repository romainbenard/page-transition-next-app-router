// https://nextjs.org/docs/app/api-reference/file-conventions/template

import StairsTransition from '@/components/transition/StairsTransition'

export default function Template({ children }: { children: React.ReactNode }) {
  return <StairsTransition>{children}</StairsTransition>
}
