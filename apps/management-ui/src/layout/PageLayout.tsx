import { HTMLAttributes } from 'react'
import { PageTitle } from './PageTitle'

export type PageProps = {
  title?: string
} & HTMLAttributes<HTMLDivElement>

export function PageLayout({
  title,
  children,
  className,
  ...props
}: PageProps) {
  // TODO: Disable go back button no PageTitle if on root route.
  return (
    <div className="container mx-auto p-2" {...props}>
      {title && <PageTitle title={title} />}
      <div className={className}>{children}</div>
    </div>
  )
}
