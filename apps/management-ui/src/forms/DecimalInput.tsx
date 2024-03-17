import { ErrorMessage, FieldConfig, useField } from 'formik'
import { integer } from '@app/utilities'

export type DecimalInputProps = {
  label: string
  placeholder?: string
  autocomplete?: string
  decimalPlaces: integer
  min?: integer
} & Exclude<FieldConfig, 'type'>

// TODO: Improve user experience with decimals
export function DecimalInput({
  label,
  placeholder,
  name,
  autocomplete,
  min,
}: DecimalInputProps) {
  const [field, { error, touched }] = useField(name)
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={name} className="mb-1">
        {label}
      </label>

      <input
        type="number"
        inputMode="decimal"
        placeholder={placeholder}
        autoComplete={autocomplete}
        min={min}
        className={`max-w-40 border rounded p-2 mb-2 outline-orange-300 ${
          touched && error && 'border-red-600'
        }`}
        {...field}
      />

      <span className="text-red-600">
        <ErrorMessage name={name} />
      </span>
    </div>
  )
}
