function assertTrue(value: boolean, message: string): void {
  if (!value) {
    throw Error(message)
  }
}

function assertSameRowLength(
  length: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any[][],
  message: string,
): void {
  value.forEach(row => assertTrue(row.length === length, message))
}

export {assertTrue, assertSameRowLength}
