window.$docsify = {
  name: '@microlink/google',
  repo: 'microlinkhq/google',
  logo: '/static/banner.png',
  externalLinkRel: 'noopener noreferrer'
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.app-name-link').onclick = event => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
