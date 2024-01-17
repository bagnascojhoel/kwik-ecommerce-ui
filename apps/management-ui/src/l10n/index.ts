import ENGLISH from './en.json'

type Dictionary = { [key: string]: string }

const PARAM_PLACEHOLDER = '{}'

export function l10n(textKey: string, ...params: string[]): string {
  if ((ENGLISH as Dictionary)[textKey] === undefined) {
    throw `text not found for key ${textKey}`
  }

  let message = (ENGLISH as Dictionary)[textKey]

  for (const param of params) {
    message = message.replace(PARAM_PLACEHOLDER, param)
  }

  return message
}
