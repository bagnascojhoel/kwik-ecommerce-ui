export type ButtonProps = {
  label: string
  action: 'submit' | (() => void)
  type?: 'primary'
  disabled?: boolean
}

export function Button({
  label,
  action,
  type = 'primary',
  disabled,
}: ButtonProps) {
  const isSubmitButton = action === 'submit'

  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      disabled={disabled}
      className={`
      py-3
      px-5
      focus:outline
      ${
        type === 'primary' &&
        'bg-orange-600 rounded text-white outline-orange-300'
      }
      ${disabled && 'cursor-not-allowed bg-gray-200'}
    `}
    >
      {label}
    </button>
  )
}
