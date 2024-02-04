export type DestructionCallback = () => void

export function onGlobalClick(
  callback: (event: MouseEvent) => void,
): DestructionCallback {
  document.addEventListener('click', callback)
  return () => document.removeEventListener('click', callback)
}
