import * as yup from 'yup'
import { l10n } from '@app/l10n'

// TODO: Add locale for form validation
yup.setLocale({
  mixed: {
    required: l10n('app-form-validation-required'),
    oneOf: l10n('app-form-validation-one-of'),
  },
  number: {
    negative: l10n('app-form-validation-number-negative'),
    positive: l10n('app-form-validation-number-positive'),
  },
})

export const validation = yup
