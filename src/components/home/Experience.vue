<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'
const workHistory = [
    {
        role: 'Full-Stack Developer (Pralong)',
        org: 'ANT Technology Training Center',
        period: 'Mar 2026 — Jul 2026',
        icon: 'bi-code-slash',
        desc: 'Built RESTful APIs with Node.js/Express & MySQL. Implemented JWT auth, auto-save, exam security features, and deployed to cloud.'
    },
    {
        role: 'Frontend Developer (Reab-List)',
        org: 'ANT Technology Training Center',
        period: 'Dec 2025 — Feb 2026',
        icon: 'bi-window-stack',
        desc: 'Developed UI components using Vue.js & Bootstrap 5. Integrated frontend authentication, authorization, and admin tools.'
    },
    {
        role: 'Frontend Developer (Online Exam System)',
        org: 'ANT Technology Training Center',
        period: 'Jun 2025 — Sep 2025',
        icon: 'bi-diagram-3',
        desc: 'Led project scope and team tasks. Designed responsive interfaces and integrated dashboards for students, teachers, and admins.'
    }
]

const educationHistory = [
    {
        role: 'B.Sc. Computer Science and Engineering',
        org: 'Royal University of Phnom Penh (RUPP)',
        period: '2021 — 2025',
        icon: 'bi-mortarboard',
        desc: 'Graduated with GPA 3.42. Focused on Software Engineering, Web Development, and Database Management Systems.'
    },
    {
        role: 'Web Development Trainee (Scholarship)',
        org: 'ANT Technology Training Center',
        period: 'Jun 2025 — Jul 2026',
        icon: 'bi-patch-check',
        desc: '700-hour intensive program sponsored by MPTC & CBRD Fund covering Vue.js, Node.js, Express, MySQL, and Security.'
    },
    {
        role: 'Intensive English for Academic Purposes',
        org: 'Pannasastra University of Cambodia (PUC)',
        period: 'Completed May 2025',
        icon: 'bi-translate',
        desc: 'Comprehensive English proficiency program covering Academic Writing, Public Speaking, and Business Communication.'
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
                    <BaseCard v-for="item in workHistory" :key="item.role" class="exp-card">
                        <div class="d-flex gap-3 align-items-start">
                            <div class="exp-icon"><i class="bi" :class="item.icon"></i></div>
                            <div>
                                <h5 class="mb-1">{{ item.role }}</h5>
                                <p class="exp-org mb-1">{{ item.org }} · {{ item.period }}</p>
                                <p class="exp-desc mb-0">{{ item.desc }}</p>
                            </div>
                        </div>
                    </BaseCard>
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
                        <rect x="55" y="150" width="150" height="14" rx="7" fill="url(#illGrad)" opacity="0.85" />
                        <rect x="75" y="80" width="110" height="70" rx="10" fill="none" stroke="url(#illGrad)"
                            stroke-width="5" />
                        <rect x="90" y="95" width="80" height="8" rx="4" fill="url(#illGrad)" opacity="0.7" />
                        <rect x="90" y="110" width="55" height="8" rx="4" fill="url(#illGrad)" opacity="0.5" />
                        <rect x="90" y="125" width="65" height="8" rx="4" fill="url(#illGrad)" opacity="0.6" />
                    </svg>
                </div>

                <div class="col-lg-4 d-flex flex-column gap-4">
                    <BaseCard v-for="item in educationHistory" :key="item.role" class="exp-card">
                        <div class="d-flex gap-3 align-items-start">
                            <div class="exp-icon"><i class="bi" :class="item.icon"></i></div>
                            <div>
                                <h5 class="mb-1">{{ item.role }}</h5>
                                <p class="exp-org mb-1">{{ item.org }} · {{ item.period }}</p>
                                <p class="exp-desc mb-0">{{ item.desc }}</p>
                            </div>
                        </div>
                    </BaseCard>
                </div>
            </div>
        </div>
    </section>
</template>