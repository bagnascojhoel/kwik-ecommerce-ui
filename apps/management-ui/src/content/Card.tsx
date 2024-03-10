import { HTMLAttributes } from 'react'
import { Title, TitleProps } from './Title'

export type CardProps = {
  title?: string
  containerClassName?: string
} & HTMLAttributes<HTMLDivElement> &
  Omit<TitleProps, 'children' | 'size'>

export function Card({
  title,
  className,
  containerClassName,
  children,
  icon,
}: CardProps) {
  return (
    <div className={`p-4 bg-gray-50 rounded-lg w-min ${containerClassName}`}>
      {title && (
        <Title size="lg" icon={icon} className="mt-0">
          {title}
        </Title>
      )}
      <div className={className}>{children}</div>
    </div>
  )
}
