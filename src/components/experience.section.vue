<script setup>
const workHistory = [
    {
        role: 'Senior Full Stack Developer',
        org: 'Nimbus Softworks',
        period: '2023 — Present',
        icon: 'bi-code-slash',
        desc: 'Leading a team of 6 building scalable SaaS products with React, Node.js and MySQL.'
    },
    {
        role: 'Frontend Developer',
        org: 'Pixel Forge Studio',
        period: '2020 — 2023',
        icon: 'bi-window-stack',
        desc: 'Built performant, accessible interfaces and design systems used across 12+ products.'
    }
]
const educationHistory = [
    {
        role: 'B.Sc. Computer Science',
        org: 'Institute of Technology',
        period: '2016 — 2020',
        icon: 'bi-mortarboard',
        desc: 'Graduated with honors, focused on distributed systems and human-computer interaction.'
    },
    {
        role: 'Full Stack Certification',
        org: 'CodeCraft Academy',
        period: '2019',
        icon: 'bi-patch-check',
        desc: 'Intensive program covering the MERN stack, testing, and deployment pipelines.'
    }
]
</script>

<template>
    <section id="experience" class="section">
        <div class="container">
            <p class="eyebrow text-center">My Journey</p>
            <h2 class="section-title text-center mb-5">My <span class="grad-text">Experience</span></h2>

            <div class="row align-items-center gy-4">
                <div class="col-lg-4 d-flex flex-column gap-4">
                    <div class="glass-card exp-card" v-for="item in workHistory" :key="item.role">
                        <div class="exp-icon"><i class="bi" :class="item.icon"></i></div>
                        <div>
                            <h5 class="mb-1">{{ item.role }}</h5>
                            <p class="exp-org mb-1">{{ item.org }} · {{ item.period }}</p>
                            <p class="exp-desc mb-0">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 text-center">
                    <svg viewBox="0 0 260 260" class="illustration-svg" role="img"
                        aria-label="Developer at desk illustration">
                        <defs>
                            <linearGradient id="illGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="var(--accent-cyan)" />
                                <stop offset="100%" stop-color="var(--accent-purple)" />
                            </linearGradient>
                        </defs>
                        <circle cx="130" cy="130" r="120" fill="url(#illGrad)" opacity="0.12" />
                        <rect x="55" y="140" width="150" height="14" rx="7" fill="url(#illGrad)" opacity="0.85" />
                        <rect x="75" y="80" width="110" height="70" rx="10" fill="none" stroke="url(#illGrad)"
                            stroke-width="5" />
                        <rect x="90" y="95" width="80" height="8" rx="4" fill="url(#illGrad)" opacity="0.7" />
                        <rect x="90" y="110" width="55" height="8" rx="4" fill="url(#illGrad)" opacity="0.5" />
                        <rect x="90" y="125" width="65" height="8" rx="4" fill="url(#illGrad)" opacity="0.6" />
                        <circle cx="130" cy="200" r="22" fill="url(#illGrad)" />
                        <path d="M92 250c6-24 22-36 38-36s32 12 38 36" fill="url(#illGrad)" opacity="0.9" />
                    </svg>
                </div>

                <div class="col-lg-4 d-flex flex-column gap-4">
                    <div class="glass-card exp-card" v-for="item in educationHistory" :key="item.role">
                        <div class="exp-icon"><i class="bi" :class="item.icon"></i></div>
                        <div>
                            <h5 class="mb-1">{{ item.role }}</h5>
                            <p class="exp-org mb-1">{{ item.org }} · {{ item.period }}</p>
                            <p class="exp-desc mb-0">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>