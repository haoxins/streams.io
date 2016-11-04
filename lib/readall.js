
function readall(readableStream) {
  const reader = readableStream.getReader()
  const chunks = []

  return pump()

  function pump() {
    return reader.read().then(({ value, done })=> {
      if (done) {
        return chunks
      }

      chunks.push(value)
      return pump()
    })
  }
}

export default readall
