import { Field, ErrorMessage, FieldConfig, FieldProps } from 'formik'

export type TextInputProps = {
  label: string
  placeholder?: string
  type: 'text' | 'date' | 'email' | 'submit' | 'quantity'
  autocomplete?: 'off' | string
} & FieldConfig

export function TextInput({ name, label, autocomplete, type }: TextInputProps) {
  const formType = autocomplete === 'off' ? 'other' : autocomplete

  return (
    <Field
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={({ field, form: { errors } }: FieldProps<any, any>) => (
        <div className="flex flex-col mb-5">
          <label htmlFor={name} className="mb-1">
            {label}
          </label>
          <input
            type={type}
            inputMode="text"
            className={`max-w-72 border rounded p-2 mb-2 outline-orange-300 ${
              errors[name] && 'border-red-600'
            }`}
            data-form-type={formType}
            autoComplete={autocomplete}
            {...field}
          />
          <span className="text-red-600">
            <ErrorMessage name={name} />
          </span>
        </div>
      )}
    />
  )
}
