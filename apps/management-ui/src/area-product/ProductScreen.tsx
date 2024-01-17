import { PageTitle } from '@/layout'
import { l10n } from '@/l10n'
import { Table } from '@/common'

export function ProductScreen() {
  return (
    <>
      <PageTitle title={l10n('app-area-product-intro-title')} />
      <Table
        hasRowHeader
        hasColumnHeader
        data={PRODUCTS}
        actions={[
          { action: () => {}, icon: 'ri-activity-line', label: 'label' },
        ]}
      />
    </>
  )
}

const PRODUCTS = [
  ['Title', 'Category', 'Price', 'Status'],
  ['Product 1', 'Electronics', '$499.99', 'In Stock'],
  ['Product 2', 'Clothing', '$39.99', 'Out of Stock'],
  ['Product 3', 'Home Decor', '$79.99', 'In Stock'],
  ['Product 4', 'Sports Equipment', '$129.99', 'In Stock'],
  ['Product 5', 'Books', '$19.99', 'Out of Stock'],
  ['Product 6', 'Beauty', '$29.99', 'In Stock'],
  ['Product 7', 'Kitchen Appliances', '$89.99', 'Out of Stock'],
  ['Product 8', 'Toys', '$49.99', 'In Stock'],
  ['Product 9', 'Furniture', '$199.99', 'Out of Stock'],
  ['Product 10', 'Jewelry', '$59.99', 'In Stock'],
  ['Product 11', 'Outdoor Gear', '$79.99', 'In Stock'],
  ['Product 12', 'Health & Wellness', '$34.99', 'Out of Stock'],
  ['Product 13', 'Automotive', '$99.99', 'In Stock'],
  ['Product 14', 'Gaming', '$169.99', 'Out of Stock'],
  ['Product 15', 'Pet Supplies', '$29.99', 'In Stock'],
  ['Product 16', 'Fitness Equipment', '$149.99', 'In Stock'],
  ['Product 17', 'Fashion Accessories', '$49.99', 'Out of Stock'],
  ['Product 18', 'Office Supplies', '$19.99', 'In Stock'],
  ['Product 19', 'Travel Essentials', '$69.99', 'Out of Stock'],
  ['Product 20', 'Audio Devices', '$89.99', 'In Stock'],
]