import { PageLayout } from '@app/layout'
import { l10n } from '@app/l10n'
import { ProductForm } from './ProductForm'
import { ProductTable } from './ProductTable'

// TODO: Add redux to trigger this actions and load
export function ProductScreen() {
  return (
    <PageLayout
      title={l10n('app-area-product-intro-title')}
      className="flex flex-col justify-center lg:flex-row lg:justify-around"
    >
      <ProductTable />
      <ProductForm className="mt-8" />
    </PageLayout>
  )
}
