import { Icon, IconCode } from '../content/Icon'

export interface IconButtonProps {
  icon: IconCode
  className?: string
  action: () => void
}

export function IconButton({ icon, className, action }: IconButtonProps) {
  return (
    <button className={`active:outline p-2 ${className}`} onClick={action}>
      <Icon icon={icon} />
    </button>
  )
}
