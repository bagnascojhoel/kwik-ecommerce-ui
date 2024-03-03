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
            placeholder={placeholder}
            autoComplete={autocomplete}
            min={min}
            className={`border rounded p-2 ${errors[name] && 'border-red-600'}`}
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
