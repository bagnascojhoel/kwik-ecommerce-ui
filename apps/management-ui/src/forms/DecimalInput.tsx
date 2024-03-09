import { Field, ErrorMessage, FieldConfig, FieldProps } from 'formik'
import { integer } from '@app/utilities'

export type DecimalInputProps = {
  label: string
  placeholder?: string
  autocomplete?: string
  decimalPlaces: integer
  min?: integer
} & Exclude<FieldConfig, 'type'>

export function DecimalInput({
  label,
  placeholder,
  name,
  autocomplete,
  min,
}: DecimalInputProps) {
  return (
    <Field
      name={name}
      type="number"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={({ field, form: { errors } }: FieldProps<any, any>) => (
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
              errors[name] && 'border-red-600'
            }`}
            {...field}
          />

          <span>
            <ErrorMessage name={name} />
          </span>
        </div>
      )}
    />
  )
}
