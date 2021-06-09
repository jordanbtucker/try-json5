document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input')
  const output = document.getElementById('output')
  const status = document.getElementById('status')
  hljs.highlightElement(output)

  input.addEventListener(
    'input',
    _.debounce(() => {
      try {
        const value = JSON5.parse(input.textContent)
        const json = JSON.stringify(value, null, 2)
        const text = document.createTextNode(json)
        output.innerHTML = ''
        output.appendChild(text)
        status.innerText = ''
        hljs.highlightElement(output)
      } catch (err) {
        status.innerText = err.message
      }
    }, 500),
  )
})
