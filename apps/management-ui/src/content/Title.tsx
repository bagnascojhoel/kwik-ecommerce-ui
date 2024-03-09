import { BaseHTMLAttributes } from 'react'
import { Icon, IconCode } from './Icon'

export type TitleProps = {
  icon?: IconCode
  size: 'lg'
} & BaseHTMLAttributes<HTMLTitleElement>

const SIZES: {
  [prop: string]: { icon: string; text: string }
} = {
  lg: {
    icon: 'text-xl',
    text: 'text-2xl',
  },
}

export function Title({ size, icon, className, children }: TitleProps) {
  return (
    <div className={`flex flex-row items-center mb-4 mt-6 ${className}`}>
      {icon && <Icon className={`mr-2 ${SIZES[size].icon}`} icon={icon} />}
      <h1 className={SIZES[size].text}>{children}</h1>
    </div>
  )
}
