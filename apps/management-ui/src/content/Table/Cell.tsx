export type CellProps = {
  value: string
}

export function Cell({ value }: CellProps) {
  return <td className="block-inline p-2 border text-nowrap">{value}</td>
}
