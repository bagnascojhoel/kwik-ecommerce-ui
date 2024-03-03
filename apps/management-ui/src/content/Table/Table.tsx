import { useRef, useEffect, useState } from 'react'
import { assertTrue, getWidth } from '@app/utilities'
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

  const [tableContainerWidth, setTableContainerWidth] = useState<
    undefined | number
  >(undefined) // TODO: Should set maxWidth in regard to recommended cols-span
  const tableRef = useRef<HTMLDivElement>(null)
  const tableContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tableRef.current !== null && tableContainerRef.current !== null) {
      const tableWidth = getWidth(tableRef)
      const tableContainerWidth = getWidth(tableContainerRef)

      if (tableWidth && tableContainerWidth) {
        setTableContainerWidth(
          tableContainerWidth > tableWidth ? tableWidth : tableContainerWidth,
        )
      }
    }

    setTableContainerWidth(undefined)
  }, [tableRef, tableContainerRef])

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
    <div
      className={`max-w-[${tableContainerWidth}px] flex`}
      ref={tableContainerRef}
    >
      <div
        className={`relative overflow-x-auto shadow-inner max-h-80`}
        ref={tableRef}
      >
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
    </div>
  )
}
