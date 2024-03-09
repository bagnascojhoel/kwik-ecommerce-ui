import { PageLayout } from '@app/layout'
import { l10n } from '@app/l10n'
import { Table, Title } from '@app/content'
import { ProductForm } from './ProductForm'
import { PRODUCTS } from './product-mock'

// TODO: Add redux to trigger this actions and load
export function ProductScreen() {
  return (
    <PageLayout title={l10n('app-area-product-intro-title')}>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-around">
        <div>
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

        <ProductForm className="w-full mt-8" />
      </div>
    </PageLayout>
  )
}
