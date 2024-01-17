import type { RemixIcon } from './Icon'

import { Icon } from './Icon'

export type IconButtonProps = {
  icon: RemixIcon
  className?: string
  action: () => void
}

export function IconButton({ icon, className, action }: IconButtonProps) {
  return (
    <button className={`active:outline p-4 ${className}`} onClick={action}>
      <Icon icon={icon} />
    </button>
  )
}
