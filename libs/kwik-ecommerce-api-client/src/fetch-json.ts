type JsonFetchParams = {
  url: string
  body: object
  timeout?: number
}

async function requestPost({
  url,
  body,
  timeout = 20000,
}: JsonFetchParams): Promise<Response> {
  const abortController = new AbortController()
  const timeoutAbortId = setTimeout(
    () => abortController.abort(new DOMException('request timed out')),
    timeout,
  )
  const response: Response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    signal: abortController.signal,
  })
  clearTimeout(timeoutAbortId)
  return response
}

async function requestPatch({
  url,
  body,
  timeout = 20000,
}: JsonFetchParams): Promise<Response> {
  const abortController = new AbortController()
  const timeoutAbortId = setTimeout(
    () => abortController.abort(new DOMException('request timed out')),
    timeout,
  )
  const response: Response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    signal: abortController.signal,
  })
  clearTimeout(timeoutAbortId)
  return response
}

async function requestGet({
  url,
  timeout = 20000,
}: JsonFetchParams): Promise<Response> {
  const abortController = new AbortController()
  const timeoutAbortId = setTimeout(
    () => abortController.abort(new DOMException('request timed out')),
    timeout,
  )
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    signal: abortController.signal,
  })
  clearTimeout(timeoutAbortId)
  return response
}

async function requestPut({
  url,
  body,
  timeout = 20000,
}: JsonFetchParams): Promise<Response> {
  const abortController = new AbortController()
  const timeoutAbortId = setTimeout(
    () => abortController.abort(new DOMException('request timed out')),
    timeout,
  )
  const response: Response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    signal: abortController.signal,
  })
  clearTimeout(timeoutAbortId)
  return response
}

async function requestDelete({
  url,
  timeout = 20000,
}: JsonFetchParams): Promise<Response> {
  const abortController = new AbortController()
  const timeoutAbortId = setTimeout(
    () => abortController.abort(new DOMException('request timed out')),
    timeout,
  )
  const response: Response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    signal: abortController.signal,
  })
  clearTimeout(timeoutAbortId)
  return response
}

export type { JsonFetchParams }
export { requestPost, requestGet, requestPut, requestPatch, requestDelete }
