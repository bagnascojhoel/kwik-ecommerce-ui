import { l10n } from '@app/l10n'
import { HeaderCell } from './HeaderCell'

export function TableHeader({
  hasActions,
  firstRow,
}: {
  hasActions: boolean
  firstRow: string[]
}) {
  const actualHeaderRow = hasActions
    ? [...firstRow, l10n('app-component-table-actions-header')]
    : firstRow

  return (
    <tr className="">
      {actualHeaderRow.map((value, i) => (
        <HeaderCell key={value} value={value} sticky={i === 0} scope="row" />
      ))}
    </tr>
  )
}
