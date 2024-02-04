export function HeaderCell({
  sticky = false,
  value,
  scope,
}: {
  value: string
  sticky: boolean
  scope: 'row' | 'col'
}) {
  return (
    <th
      scope={scope}
      className={`
        p-5
        text-nowrap
        border-b
        border-l
        bg-slate-100
        border-black
        first-of-type:border-r
        last-of-type:border-r  
        ${sticky && 'sticky left-0'}
      `}
    >
      {value}
    </th>
  )
}
