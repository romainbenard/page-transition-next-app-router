// https://nextjs.org/docs/app/api-reference/file-conventions/template

import PageTransition from '@/components/animation/PageTransition'

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
