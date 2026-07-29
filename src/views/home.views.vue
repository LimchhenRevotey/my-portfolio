<script setup>
import AboutSection from '@/components/about.section.vue';
import ContactSection from '@/components/contact.section.vue';
import ExperienceSection from '@/components/experience.section.vue';
import HeroSection from '@/components/hero.section.vue';
import ProjectsSection from '@/components/projects.section.vue';
import SkillsSection from '@/components/skills.section.vue';
import MainLayouts from '@/layouts/main.layouts.vue';
</script>

<template>
    <MainLayouts>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ExperienceSection></ExperienceSection>
        <ProjectsSection></ProjectsSection>
        
        <ContactSection></ContactSection>

    </MainLayouts>
</template>