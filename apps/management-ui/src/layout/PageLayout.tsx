import { PageTitle } from './PageTitle'


export type PageProps = {
  title?: string
}

export function PageLayout({ title, children, ...props }: PageProps & React.PropsWithChildren) {
  // TODO: Disable go back button no PageTitle if on root route.
  return <div className="container mx-auto p-2" {...props}>
    {title && <PageTitle title={title} />}
    {children} 
  </div>
}