import { HTMLAttributes } from 'react'
import { Title, Table } from '@app/content'
import { l10n } from '@app/l10n'
import { PRODUCTS } from './product-mock'

export type ProductTableProps = HTMLAttributes<HTMLDivElement>

export function ProductTable({ className }: ProductTableProps) {
  return (
    <div className={className}>
      <Title icon="ri-file-list-3-line" size="lg">
        {l10n('app-area-product-list-title')}
      </Title>
      <Table
        isFirstRowHeader
        hasColumnHeader
        rows={PRODUCTS}
        rowActionsBuilder={row => [
          // TODO: Move these labels to l10n
          {
            callback: () => {
              window.alert('edit: ' + row)
            },
            icon: 'ri-edit-2-line',
            label: 'Edit',
          },
          {
            callback: () => {
              window.alert('delete: ' + row)
            },
            icon: 'ri-delete-bin-6-line',
            label: 'Delete',
          },
        ]}
      />
    </div>
  )
}
