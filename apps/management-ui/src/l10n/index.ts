import ENGLISH from './en.json'
import PORTUGUES from './pt_br.json'

import { getLocale } from '@app/state'
import { isDev } from '@app/utilities'

type Dictionary = { [key: string]: string }

const PARAM_PLACEHOLDER = '{}'

export function l10n(textKey: string, ...params: string[]): string {
  if (getDict()[textKey] === undefined) {
    if (isDev) {
      return textKey
    } else {
      throw `text not found for key ${textKey}`
    }
  }

  let message = getDict()[textKey]

  for (const param of params) {
    message = message.replace(PARAM_PLACEHOLDER, param)
  }

  return message
}

function getDict(): Dictionary {
  switch (getLocale()) {
    case 'pt':
      return PORTUGUES
    case 'en':
      return ENGLISH
  }
}
