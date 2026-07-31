import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(words, speed = 90, deleteSpeed = 45, delay = 1400) {
  const displayText = ref('')
  let wordIndex = 0
  let charIndex = 0
  let isDeleting = false
  let timeoutId = null

  const type = () => {
    const currentWord = words[wordIndex]

    if (isDeleting) {
      charIndex--
    } else {
      charIndex++
    }

    displayText.value = currentWord.substring(0, charIndex)

    let currentSpeed = isDeleting ? deleteSpeed : speed

    if (!isDeleting && charIndex === currentWord.length) {
      currentSpeed = delay
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % words.length
      currentSpeed = 500
    }

    timeoutId = setTimeout(type, currentSpeed)
  }

  onMounted(() => type())
  onUnmounted(() => clearTimeout(timeoutId))

  return { displayText }
}