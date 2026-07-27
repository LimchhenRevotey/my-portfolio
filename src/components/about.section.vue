<script setup>
import { reactive } from 'vue'
const stats = [
    { value: 5, suffix: '1+', label: 'Years Experience', icon: 'bi-briefcase' },
    { value: 50, suffix: '4+', label: 'Projects Completed', icon: 'bi-kanban' },
    { value: 30, suffix: '20+', label: 'Happy Clients', icon: 'bi-emoji-smile' }
]
const displayedStats = reactive(stats.map(() => 0))
let statsAnimated = false

function animateStats() {
    if (statsAnimated) return
    statsAnimated = true
    stats.forEach((stat, i) => {
        const duration = 1200
        const start = performance.now()
        function frame(now) {
            const progress = Math.min((now - start) / duration, 1)
            displayedStats[i] = Math.floor(progress * stat.value)
            if (progress < 1) requestAnimationFrame(frame)
            else displayedStats[i] = stat.value
        }
        requestAnimationFrame(frame)
    })
}
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<template>
    <div>
        <section id="about" class="section">
            <div class="container">
                <p class="eyebrow text-center">Get To Know Me</p>
                <h2 class="section-title text-center mb-5">About <span class="grad-text">Me</span></h2>

                <div class="row align-items-center gy-5">
                    <div class="col-lg-5 text-center">
                        <div class="oval-frame-wrap mx-auto">
                            <span class="orb small-orb orb-a"></span>
                            <span class="orb small-orb orb-b"></span>
                            <div class="oval-frame">

                                <div class="avatar-inner-about">
                                    <img src="@/assets/images/about.revotey.JPG" alt="Portrait of the developer"
                                        class="avatar-img-about" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <h3 class="mb-3">A developer who cares about craft.</h3>
                        <p class="hero-copy">
                            I'm a full stack developer with a passion for building products that feel as good as
                            they look. Over the years I've partnered with startups and design teams to turn
                            rough ideas into polished, production-ready experiences — balancing clean code with
                            thoughtful UX at every step.
                        </p>
                        <p class="hero-copy">
                            When I'm not shipping features, I'm exploring new frameworks, mentoring junior
                            developers, or refining my design system library.
                        </p>

                        <div class="row g-3 mt-3">
                            <div class="col-4" v-for="(stat, i) in stats" :key="stat.label">
                                <div class="glass-card stat-card text-center">
                                    <i class="bi" :class="stat.icon"></i>
                                    <div class="stat-value">{{ displayedStats[i].stat }}{{ stat.suffix }}</div>
                                    <div class="stat-label">{{ stat.label }}</div>
                                </div>
                            </div>
                        </div>

                        <a href="#" class="btn btn-glow-primary rounded-pill px-4 py-2 mt-4"
                            @click.prevent="scrollToSection('contact')">
                            <i class="bi bi-chat-dots-fill me-2"></i>Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Avatar frame */
.avatar-inner-about {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.avatar-img-about {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>
