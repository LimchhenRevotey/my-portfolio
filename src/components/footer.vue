<script setup>
import { ref } from 'vue'
import logoDark from '@/assets/images/logo.dark.png'
import logoLight from '@/assets/images/logo.light.png'

const theme = ref('light')
const navOpen = ref(false);
const socials = [
  { icon: 'bi-github', label: 'GitHub', href: 'https://github.com/LimchhenRevotey' },
  { icon: 'bi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/limchhen-revotey-591619359/' },
  { icon: 'bi-twitter-x', label: 'Twitter', href: 'https://x.com/Revoteyl' }
]
function scrollToSection(id) {
  navOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
<template>

  <footer class="footer py-4">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <a href="#home" class="footer-brand d-flex align-items-center gap-2 text-decoration-none"
        @click.prevent="scrollToSection('home')">
        <img :src="theme === 'dark' ? logoLight : logoDark" alt="Logo" class="footer-logo" />
      </a>
      <span class="text-muted small">Designed &amp; Developed by <strong>Limchhen Revotey</strong> &copy; 2026</span>
      <div class="footer-socials d-flex gap-3 fs-5">
        <a :href="socials[0].href" aria-label="GitHub"><i class="bi bi-github"></i></a>
        <a :href="socials[1].href" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a :href="socials[2].href" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
      </div>

    </div>
  </footer>

</template>

<style scoped>
.footer-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  transform: scale(2.5);
  transition: transform 0.3s ease;
}

[data-bs-theme='light'] .footer-logo {
  filter: contrast(200%) brightness(100%);
}

[data-bs-theme='dark'] .footer-logo {
  filter: brightness(150%) contrast(120%);
}

.footer-brand:hover .footer-logo {
  transform: scale(2.6);
}

.brand-text {
  color: var(--text);
  transition: color 0.3s ease;
}

.footer-socials a {
  color: var(--text-muted);
  transition: color 0.3s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-socials a:hover {
  color: var(--accent-cyan);
  transform: translateY(-2px);
}
</style>
