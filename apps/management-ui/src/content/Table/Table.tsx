import { assertTrue } from '@app/utilities'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import { TableRowActionsBuilder } from './ActionsCell'

export type TableProps = {
  rows: string[][]
  headerClassName?: string
  rowActionsBuilder?: TableRowActionsBuilder
  hasColumnHeader?: boolean
  isFirstRowHeader?: boolean
}

export function Table({
  rowActionsBuilder: actionsBuilder = undefined,
  hasColumnHeader = false,
  isFirstRowHeader = false,
  rows,
}: TableProps) {
  assertTrue(
    rows.every(row => row.length === rows[0].length),
    'all rows in the table must have the same number of cells',
  )

  const rowNodes = []
  for (let i = isFirstRowHeader ? 1 : 0; i < rows.length; i++) {
    rowNodes.push(
      <TableRow
        key={i}
        row={rows[i]}
        hasColumnHeader={hasColumnHeader}
        actionsBuilder={actionsBuilder}
      />,
    )
  }

  return (
    <div className="w-full overflow-x-auto relative">
      <table className="border-separate border-spacing-0 border-t border-black">
        {isFirstRowHeader && (
          <thead>
            <TableHeader
              hasActions={actionsBuilder !== undefined}
              firstRow={rows[0]}
            />
          </thead>
        )}

        <tbody>{rowNodes}</tbody>
      </table>
    </div>
  )
}
