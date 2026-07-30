<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logoDark from '@/assets/images/logo.dark.png'
import logoLight from '@/assets/images/logo.light.png'

const theme = ref('light')
const activeSection = ref('home')
const navOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

// Ligth & Dark Mode
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
}

function scrollToSection(id) {
  navOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function handleScrollSpy() {
  const offsets = navLinks.map((link) => {
    const el = document.getElementById(link.id)
    if (!el) return { id: link.id, top: Infinity }
    return { id: link.id, top: Math.abs(el.getBoundingClientRect().top - 120) }
  })
  offsets.sort((a, b) => a.top - b.top)
  activeSection.value = offsets[0].id
}

onMounted(() => {
  // Default Theme 
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  window.addEventListener('scroll', handleScrollSpy, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollSpy)
})
</script>

<template>
  <header class="pill-nav-wrapper">
    <nav class="pill-nav container-fluid">
      <a class="brand d-flex align-items-center" href="#home" @click.prevent="scrollToSection('home')">
        <img :src="theme === 'dark' ? logoLight : logoDark" alt="Logo" class="img-logo" />
      </a>

      <ul class="nav-links d-none d-lg-flex">
        <li v-for="link in navLinks" :key="link.id">
          <a href="#" class="nav-link-item" :class="{ active: activeSection === link.id }"
            @click.prevent="scrollToSection(link.id)">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="d-flex align-items-center gap-2">
        <button class="theme-toggle" type="button" @click="toggleTheme" aria-label="Toggle theme">
          <i class="bi" :class="theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'"></i>
        </button>
        <button class="theme-toggle d-lg-none" type="button" @click="navOpen = !navOpen" aria-label="Toggle menu">
          <i class="bi" :class="navOpen ? 'bi-x-lg' : 'bi-list'"></i>
        </button>
      </div>
    </nav>

    <transition name="fade-slide">
      <ul v-if="navOpen" class="mobile-nav d-lg-none">
        <li v-for="link in navLinks" :key="link.id">
          <a href="#" @click.prevent="scrollToSection(link.id)">{{ link.label }}</a>
        </li>
      </ul>
    </transition>
  </header>
</template>
<style scoped>
.brand {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.img-logo {
  height: 52px;
  width: auto;
  object-fit: contain;
  transform: scale(2.5);
  margin-left: 36px;
  transition: all 0.3s ease;
}

[data-bs-theme='light'] .img-logo {
  filter: contrast(200%) brightness(100%);
}
[data-bs-theme='dark'] .img-logo {
  filter: brightness(150%) contrast(120%);
}
</style>
