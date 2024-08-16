// https://nextjs.org/docs/app/api-reference/file-conventions/template

import InnerTransition from '@/components/transition/InnerTransition'

export default function Template({ children }: { children: React.ReactNode }) {
  return <InnerTransition>{children}</InnerTransition>
}
