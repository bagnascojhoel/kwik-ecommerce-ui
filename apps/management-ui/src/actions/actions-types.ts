import { RemixIcon } from '@app/content'

export type Action = {
  callback: () => void
  label: string
  icon?: RemixIcon
}
