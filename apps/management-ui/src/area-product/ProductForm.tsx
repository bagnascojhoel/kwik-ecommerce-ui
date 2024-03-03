import { Form, TextInput, validation, DecimalInput, Button } from '@app/forms'
import { l10n } from '@app/l10n'
import { PRODUCT_CATEGORIES } from '@app/state'

export function ProductForm() {
  const initialValues = {
    name: '',
    price: 0,
    category: '',
  }

  const validationSchema = validation.object({
    name: validation
      .string()
      .required()
      .test(
        'name-not-blank',
        '${path} cannot be blank',
        value => value.trim() !== '',
      ),
    price: validation.number().required().positive(),
    category: validation.string().required().oneOf(PRODUCT_CATEGORIES),
  })

  return (
    <Form
      initialValues={initialValues}
      onSubmit={values =>
        window.alert(
          Object.entries(values).reduce(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (acc: string, v: [string, any]) => acc + v[0] + v[1],
            '',
          ),
        )
      }
      validationSchema={validationSchema}
    >
      <div className="w-full ml-12">
        <TextInput
          name="name"
          label={l10n('app-form-label-product-name')}
          type="text"
          autocomplete="off"
        />
        <TextInput
          name="category"
          label={l10n('app-form-label-product-category')}
          type="text"
          autocomplete="off"
        />
        <DecimalInput
          decimalPlaces={2}
          name="price"
          label={l10n('app-form-label-product-price')}
        />
        <Button
          action="submit"
          label={l10n('app-form-action-product-create')}
        />
      </div>
    </Form>
  )
}
