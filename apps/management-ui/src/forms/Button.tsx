export type ButtonProps = {
  label: string
  action: 'submit' | (() => void)
  type?: 'primary'
}

export function Button({ label, action, type = 'primary' }: ButtonProps) {
  const isSubmitButton = action === 'submit'

  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      className={`
      py-3
      px-5
      focus:outline
      ${
        type === 'primary' &&
        'bg-orange-600 rounded text-white outline-orange-300'
      }
    `}
    >
      {label}
    </button>
  )
}
