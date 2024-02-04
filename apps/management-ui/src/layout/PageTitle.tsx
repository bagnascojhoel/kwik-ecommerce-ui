import { useNavigate } from 'react-router-dom'
import { IconButton } from '@app/actions'

export type PageTitleProps = {
  title: string
  disableGoBack?: boolean
}

export function PageTitle({ title, disableGoBack = false }: PageTitleProps) {
  const navigate = useNavigate()

  return (
    <div className={`flex items-start ${disableGoBack ? 'p-3' : 'p-2'}`}>
      <IconButton
        icon="ri-arrow-go-back-line"
        action={() => navigate(-1)}
        className={`${disableGoBack && 'hidden'} mr-1`}
      />
      <h1 className="text-xl text-wrap self-center">{title}</h1>
    </div>
  )
}
