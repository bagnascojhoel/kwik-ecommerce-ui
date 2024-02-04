import type { RemixIcon } from '@app/content'

export type RowAction = {
  action: (value: string[]) => void
  icon: RemixIcon
  label: string
}
