import type { RemixIcon } from '../content/Icon'

import { Icon } from '../content/Icon'

export interface IconButtonProps {
  icon: RemixIcon
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
