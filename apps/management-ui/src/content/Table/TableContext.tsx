import { createContext } from 'react'
import { RowAction } from './types'

export type TableContextType = {
  headerClassName?: string
  actions?: RowAction[]
  hasActions: boolean
  hasColumnHeader: boolean
}

export const TableContext = createContext<TableContextType>({
  hasActions: false,
  hasColumnHeader: false,
})
