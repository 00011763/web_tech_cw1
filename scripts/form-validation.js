const form = document.querySelector('form')
const fields = {
  'name': form.querySelector('[name="name"]'),
  'email': form.querySelector('[name="email"]'),
  'subject': form.querySelector('[name="subject"]'),
  'message': form.querySelector('[name="message"]')
}

form.addEventListener('submit', (event) => {
  let isOk = true;
  
  for (const [key, field] of Object.entries(fields)) {
    const span = form.querySelector(`[name="${field.name}"] + span`)
    span.classList.remove('not-valid')

    if (field.value.trim() == '') {
      isOk = false
      event.preventDefault()
      span.classList.add('not-valid')
    }
  }
})