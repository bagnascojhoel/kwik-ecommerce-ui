import { Link } from 'react-router-dom'
import { l10n } from '@app/l10n'
import { PageLayout } from '@app/layout'
import { ROUTES, Route } from '@app/routing'

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
    <PageLayout title={l10n('app-area-home-intro-title', '<username>')}>
      <div className="p-3 flex gap-3 justify-start">
        <HomeLink
          to={ROUTES.PRODUCTS.ROOT}
          label={l10n('app-route-label-products')}
        />

        <HomeLink
          to={ROUTES.PRODUCTS.ROOT}
          label={l10n('app-route-label-products')}
        />
      </div>
    </PageLayout>
  )
}
