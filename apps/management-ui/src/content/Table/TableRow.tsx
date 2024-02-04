import { HeaderCell } from './HeaderCell'
import { Cell } from './Cell'
import { ActionsCell, TableRowActionsBuilder } from './ActionsCell'

export type TableRowProps = {
  row: string[]
  hasColumnHeader: boolean
  actionsBuilder?: TableRowActionsBuilder
}

export function TableRow({
  row,
  hasColumnHeader = false,
  actionsBuilder,
}: TableRowProps) {
  function renderCell(value: string, i: number) {
    if (hasColumnHeader && i === 0) {
      return <HeaderCell key={value} value={value} scope="col" sticky />
    } else {
      return <Cell key={value} value={value} />
    }
  }

  return (
    <tr>
      {row.map(renderCell)}
      {actionsBuilder !== undefined && (
        <ActionsCell row={row} actionsBuilder={actionsBuilder} />
      )}
    </tr>
  )
}
