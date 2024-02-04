import type { RouteObject } from 'react-router-dom'

import { createBrowserRouter } from 'react-router-dom'
import { ProductScreen } from '@app/area-product'
import { HomeScreen } from '@app/area-home'
import { ROUTES } from './routes'
import { ErrorScreen } from './ErrorScreen'

const DEFAULT_ROUTE: RouteObject = {
  errorElement: <ErrorScreen />,
}

export const router = createBrowserRouter([
  {
    ...DEFAULT_ROUTE,
    path: ROUTES.HOME,
    element: <HomeScreen />,
  },
  {
    ...DEFAULT_ROUTE,
    path: ROUTES.PRODUCTS.ROOT,
    element: <ProductScreen />,
  },
])
