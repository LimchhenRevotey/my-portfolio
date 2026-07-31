import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const theme = ref(localStorage.getItem('theme') || 'light')

  const toggleTheme =() => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme()
  }

  const applyTheme =() => {
    document.documentElement.setAttribute('data-bs-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  }
  const scrollToSection = (id)=> {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return {
    theme,
    toggleTheme,
    applyTheme,
    scrollToSection
  }
})