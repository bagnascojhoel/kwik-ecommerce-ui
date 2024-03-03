import { useMemo, RefObject } from 'react'

export function useScreen(): { width: number; height: number } {
  return useMemo(
    () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    [],
  )
}

export function getWidth(element: RefObject<HTMLElement>): number | undefined {
  return element.current === null ? undefined : element.current.offsetWidth
}
