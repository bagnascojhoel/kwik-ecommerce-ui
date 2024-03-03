import { Formik, FormikConfig, FormikValues, Form as FormikForm } from 'formik'

export type FormProps = FormikConfig<FormikValues>

export function Form({ children, ...otherProps }: FormProps) {
  return (
    <Formik {...otherProps}>
      {formikState => {
        return (
          <FormikForm>
            {typeof children === 'function' ? children(formikState) : children}
          </FormikForm>
        )
      }}
    </Formik>
  )
}
