<script setup>
import BaseCard from './ui/base.card.vue';

const skills = [
    { name: 'HTML', icon: 'bi-filetype-html', glow: '#e34c26' },
    { name: 'CSS', icon: 'bi-filetype-css', glow: '#264de4' },
    { name: 'JavaScript', icon: 'bi-filetype-js', glow: '#f0db4f' },
    { name: 'Vue.js', icon: 'bi-box-seam', glow: '#42b883' },
    { name: 'Bootstrap', icon: 'bi-bootstrap', glow: '#563d7c' },
    { name: 'Node.js', icon: 'bi-node-plus-fill', glow: '#68a063' },
    { name: 'Express.js', icon: 'bi-file-earmark-code-fill', glow: '#61dafb' },
    { name: 'MySQL', icon: 'bi-database-fill', glow: '#00758f' }
];
</script>

<template>
    <section id="skills" class="section overflow-hidden py-5">
        <div class="container">
            <p class="eyebrow text-center">Tools & Technologies</p>
            <h2 class="section-title text-center mb-5">My <span class="grad-text">Skills</span></h2>

            <div class="marquee-wrapper">
                <div class="marquee-track">
                    <BaseCard v-for="(skill, index) in skills" :key="'a-' + index" variant="skill"
                        :style="{ '--glow': skill.glow }">
                        <div class="skill-icon-wrap">
                            <i class="bi" :class="skill.icon"></i>
                        </div>
                        <div class="skill-name">{{ skill.name }}</div>
                    </BaseCard>
                    <BaseCard v-for="(skill, index) in skills" :key="'b-' + index" variant="skill"
                        :style="{ '--glow': skill.glow }">
                        <div class="skill-icon-wrap">
                            <i class="bi" :class="skill.icon"></i>
                        </div>
                        <div class="skill-name">{{ skill.name }}</div>
                    </BaseCard>
                </div>
            </div>
        </div>
    </section>
</template>
