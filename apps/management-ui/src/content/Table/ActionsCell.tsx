import { IconButton, Dropdown, Action } from '@app/actions'

export type TableRowActionsBuilder = (row: string[]) => Action[]

export type ActionCellProps = {
  row: string[]
  actionsBuilder: TableRowActionsBuilder
}

export function ActionsCell({ row, actionsBuilder }: ActionCellProps) {
  return (
    <td className="block-inline p-2 border text-nowrap text-center">
      <Dropdown actions={actionsBuilder(row)}>
        <IconButton icon="ri-more-2-fill" action={() => {}} />
      </Dropdown>
    </td>
  )
}
