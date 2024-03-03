import * as yup from 'yup'
import { l10n } from '@app/l10n'

// TODO: Add locale for form validation
yup.setLocale({
  mixed: {
    required: l10n('app-form-validation-required'),
  },
})

export const validation = yup
