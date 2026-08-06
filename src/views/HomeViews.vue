<script setup>
import AboutSection from '@/components/home/About.vue';
import ContactSection from '@/components/home/Contact.vue';
import ExperienceSection from '@/components/home/Experience.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ProjectsSection from '@/components/home/Projects.vue';
import SkillsSection from '@/components/home/Skills.vue';
import MainLayouts from '@/layouts/default.vue';
import { useHead } from '@vueuse/head' 

useHead({
  title: 'Revotey\'s Portfolio',
  meta: [
    { 
      name: 'description', 
      content: 'Welcome to my official portfolio showcasing Vue 3 projects.' 
    },
    { property: 'og:title', content: 'Revotey\'s Portfolio' },
    { property: 'og:description', content: 'Welcome to my official portfolio showcasing Vue 3 projects.' },
    { property: 'og:image', content: '../../assets/images/revotey.png' } 
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