<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Open Source Lover']
const typedText = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false
let typingTimer = null

function tick() {
    const current = roles[roleIndex]
    if (!deleting) {
        charIndex++
        typedText.value = current.slice(0, charIndex)
        if (charIndex === current.length) {
            deleting = true
            typingTimer = setTimeout(tick, 1400)
            return
        }
    } else {
        charIndex--
        typedText.value = current.slice(0, charIndex)
        if (charIndex === 0) {
            deleting = false
            roleIndex = (roleIndex + 1) % roles.length
        }
    }
    typingTimer = setTimeout(tick, deleting ? 45 : 90)
}

const techStack = [
    { name: 'Nuxt.js', icon: 'bi-triangle' },
    { name: 'JavaScript', icon: 'bi-filetype-js' },
    { name: 'Bootstrap', icon: 'bi-bootstrap' },
    { name: 'Node.js', icon: 'bi-hexagon' },
    { name: 'Express', icon: 'bi-lightning-charge' },
    { name: 'VueJS', icon: 'bi-box-seam' },
    { name: 'MySQL', icon: 'bi-database' }
]
const marqueeStack = [...techStack, ...techStack]

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
    tick()
})

onBeforeUnmount(() => {
    clearTimeout(typingTimer)
})
</script>

<template>
    <section id="home" class="section hero-section">
        <div class="container">
            <div class="row align-items-center gy-5">
                <div class="col-lg-6 order-2 order-lg-1">
                    <p class="eyebrow"><i class="bi bi-stars me-2"></i>Welcome to my portfolio</p>
                    <h1 class="hero-title">
                        Hi, I'm <span class="grad-text">Limchhen Revotey</span><br />
                        <span class="typing-line">{{ typedText }}<span class="cursor">|</span></span>
                    </h1>
                    <p class="hero-copy">
                        Full-stack developer passionate about building clean, high-performing,
                        and responsive applications. I connect smooth user experiences with powerful backend
                        architecture.
                    </p>

                    <div class="d-flex flex-wrap gap-3 mt-4">
                        <a href="#" class="btn btn-glow-primary rounded-pill px-4 py-2">
                            <i class="bi bi-download me-2"></i>Resume
                        </a>
                        <a href="#" class="btn btn-outline-glow rounded-pill px-4 py-2"
                            @click.prevent="scrollToSection('contact')">
                            <i class="bi bi-send me-2"></i>Contact Me
                        </a>
                    </div>

                    <!-- Tech marquee -->
                    <div class="marquee-wrap mt-5">
                        <div class="marquee-track">
                            <span v-for="(tech, i) in marqueeStack" :key="i" class="tech-pill">
                                <i class="bi" :class="tech.icon"></i>{{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end pe-lg-4">
                    <div class="avatar-ring-wrap ms-lg-auto me-lg-0">
                        <div class="avatar-ring"></div>
                        <div class="avatar-glass">
                            <div class="avatar-frame">
                                <div class="avatar-inner">
                                    <img src="@/assets/images/revotey.png" alt="Portrait of the developer"
                                        class="avatar-img" />
                                </div>
                            </div>
                        </div>
                        <span class="float-badge badge-top"><i class="bi bi-braces"></i></span>
                        <span class="float-badge badge-bottom"><i class="bi bi-lightning-charge-fill"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (min-width: 992px) {
    .avatar-ring-wrap {
        margin-left: auto !important;
        margin-right: 0 !important;
        transform: translateX(10px);
    }
}

@media (max-width: 991.98px) {
    .avatar-ring-wrap {
        margin: 0 auto !important;
        transform: translateX(0);
    }
}
</style>