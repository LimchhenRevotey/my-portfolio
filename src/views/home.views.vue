<script setup>
import AboutSection from '@/components/home/about.section.vue';
import ContactSection from '@/components/home/contact.section.vue';
import ExperienceSection from '@/components/home/experience.section.vue';
import HeroSection from '@/components/home/hero.section.vue';
import ProjectsSection from '@/components/home/projects.section.vue';
import SkillsSection from '@/components/home/skills.section.vue';
import MainLayouts from '@/layouts/default.vue';
import { useHead } from '@vueuse/head' 

useHead({
  title: 'Revotey- Full Stack Developer',
  meta: [
    { 
      name: 'description', 
      content: 'Welcome to my official portfolio showcasing Vue 3 projects.' 
    },
    { property: 'og:title', content: 'Revotey - Full Stack Developer' },
    { property: 'og:image', content: '/og-image.jpg' } 
  ]
})
</script>

<template>
    <MainLayouts>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactSection/>
    </MainLayouts>
</template>