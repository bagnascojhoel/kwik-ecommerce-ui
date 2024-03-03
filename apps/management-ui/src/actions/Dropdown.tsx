import { useState, useEffect } from 'react'
import { Action } from '@app/actions'
import { Icon } from '@app/content'
import { assertTrue, onGlobalClick } from '@app/utilities'

export type DropdownProps = {
  actions: Action[]
  children: React.ReactNode
}

export function Dropdown({ actions, children }: DropdownProps) {
  assertTrue(actions.length > 0, 'dropdown needs one or more action')
  const [isShown, setIsShown] = useState<boolean>(false)

  useEffect(() => {
    if (isShown) {
      return onGlobalClick(() => setIsShown(false))
    }
  }, [isShown])

  return (
    <div className="relative">
      <div
        onClick={event => {
          event.stopPropagation()
          setIsShown(v => !v)
        }}
      >
        {children}
      </div>

      <ul
        className={`
      bg-white
        absolute
        right-0
        flex-col
        z-10
        border
        radius
        border-slate-100
        shadow
        ${isShown ? 'flex' : 'hidden'}
      `}
      >
        {actions.map(action => (
          <li key={action.label}>
            <button
              className="py-2 px-3 w-full flex flex-row gap-2 items-center radius hover:bg-slate-50"
              onClick={action.callback}
            >
              {action.icon && <Icon icon={action.icon} />}
              {action.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
