import type { RemixIcon } from '.'

import { useContext, createContext } from 'react'

export type TableProps = {
  data: string[][]
  headerClassName?: string
  actions?: TableRowAction[]
  hasColumnHeader?: boolean
  hasRowHeader?: boolean
}

export type TableRowAction = {
  action: (value: string[]) => void
  icon: RemixIcon
  label: string
}

type TableContext = {
  headerClassName?: string
  actions?: TableRowAction[]
  hasActions: boolean
  hasColumnHeader: boolean
}

// TODO: Fetch this from l10n
const ACTIONS_COLUMN: string = 'Actions'

export function Table({
  headerClassName = 'bg-slate-200',
  actions = undefined,
  hasColumnHeader = false,
  hasRowHeader = false,
  data,
}: TableProps) {
  const hasActions = actions !== undefined && actions.length > 0

  let headerRow: string[] | undefined = undefined
  if (hasRowHeader) {
    if (hasActions) {
      headerRow = [...data[0], ACTIONS_COLUMN]
    }

    headerRow = data[0]
  }

  return (
    <TableStyleContext.Provider
      value={{ headerClassName, hasActions, actions, hasColumnHeader }}
    >
      <div className="w-full overflow-x-auto relative border-t border-black">
        <table className="border-separate border-spacing-0">
          {headerRow && (
            <thead>
              <HeaderRow values={headerRow} />
            </thead>
          )}

          <tbody>
            {data.map((row, rowPointer) => {
              if (hasRowHeader && rowPointer === 0) {
                return null
              }

              return <BodyRow values={row} />
            })}
          </tbody>
        </table>
      </div>
    </TableStyleContext.Provider>
  )
}

const TableStyleContext = createContext<TableContext>({
  hasActions: false,
  hasColumnHeader: false,
})

function HeaderRow({ values }: { values: string[] }) {
  return (
    <tr>
      {values.map((value, i) => (
        <HeaderCell key={value} value={value} sticky={i === 0} />
      ))}
    </tr>
  )
}

function BodyRow({ values }: { values: string[] }) {
  const { hasColumnHeader, hasActions } =
    useContext<TableContext>(TableStyleContext)

  function renderCell(value: string, i: number) {
    if (hasColumnHeader && i === 0) {
      return <HeaderCell key={value} value={value} sticky />
    } else {
      return <Cell key={value} value={value} />
    }
  }

  return (
    <tr>
      {values.map(renderCell)} {hasActions && ` : d`}
    </tr>
  )
}

function HeaderCell({
  sticky = false,
  value,
}: {
  value: string
  sticky: boolean
}) {
  const { headerClassName } = useContext<TableContext>(TableStyleContext)
  return (
    <th
      scope="row"
      className={`
        p-2
        text-nowrap
        border-b
        border-x
        border-black
        ${sticky && 'sticky left-0'}
        ${headerClassName}`}
    >
      {value}
    </th>
  )
}

function Cell({ value }: { value: string }) {
  return <td className="block-inline p-2 border text-nowrap">{value}</td>
}
