import type { Route } from '@/routing'

import { Link } from 'react-router-dom'
import { l10n } from '@/l10n'
import { PageTitle } from '@/layout'
import { ROUTES } from '@/routing'

function HomeLink({ to, label }: { to: Route; label: string }) {
  return (
    <Link
      to={to}
      className="w-32 h-32 p-2 bg-orange-300 rounded-lg font-bold shadow border-slate-950 transition"
    >
      {label}
    </Link>
  )
}

export function HomeScreen() {
  return (
    <>
      <PageTitle
        title={l10n('app-area-home-intro-title', 'Bianca Gomes')}
        disableGoBack
      />

      <div className="p-3 flex gap-3 justify-center">
        <HomeLink
          to={ROUTES.PRODUCTS.ROOT}
          label={l10n('app-route-label-products')}
        />

        <HomeLink
          to={ROUTES.PRODUCTS.ROOT}
          label={l10n('app-route-label-products')}
        />
      </div>
    </>
  )
}
