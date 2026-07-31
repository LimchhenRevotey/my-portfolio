import { reactive, ref } from 'vue'

export function useContactForm() {
  const contactForm = reactive({ name: '', email: '', message: '' })
  const errors = reactive({ name: '', email: '', message: '' })
  const formSubmitted = ref(false)
  const emailTarget = 'revotey.limchhenn@gmail.com'

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateName = () => {
    if (!contactForm.name.trim()) {
      errors.name = 'Please enter your name.'
    } else if (contactForm.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.'
    } else {
      errors.name = ''
    }
  }

  const validateEmail = () => {
    if (!contactForm.email.trim()) {
      errors.email = 'Please enter your email address.'
    } else if (!isValidEmail(contactForm.email.trim())) {
      errors.email = 'Please enter a valid email address.'
    } else {
      errors.email = ''
    }
  }

  const validateMessage = () => {
    if (!contactForm.message.trim()) {
      errors.message = 'Please enter your message.'
    } else if (contactForm.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.'
    } else {
      errors.message = ''
    }
  }

  const validateAll = () => {
    validateName()
    validateEmail()
    validateMessage()
    return !errors.name && !errors.email && !errors.message
  }

  const submitContact = () => {
    if (!validateAll()) return

    formSubmitted.value = true
    setTimeout(() => {
      formSubmitted.value = false
      contactForm.name = ''
      contactForm.email = ''
      contactForm.message = ''
    }, 3000)
  }

  const openEmail = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      window.location.href = `mailto:${emailTarget}`
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailTarget}`, '_blank')
    }
  }
  return {
    contactForm,
    errors,
    formSubmitted,
    validateName,
    validateEmail,
    validateMessage,
    submitContact,
    openEmail
  }
}