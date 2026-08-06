<script setup>
import { ref } from 'vue';
import BaseCard from '@/components/ui/BaseCard.vue';
const getImgUrl = (name) => {
  return new URL(`../../../public/images/projects/${name}`, import.meta.url).href;
};

const projects = ref([
  {
    title: 'Pralong',
    desc: 'An interactive online examination platform featuring secure student exam engines, dynamic performance metrics, and anti-cheating mechanisms.',
    img: getImgUrl('pralong.png'),
    tags: ['VUE', 'NODE.JS', 'MYSQL', 'BOOTSTRAP', 'HTML', 'CSS'],
    demo: 'https://qmlsystem.tdomain.work.gd/',
    code: 'https://github.com/kemvanny/quiz_frontend'
  },
  {
    title: 'Reab-List',
    desc: 'A responsive web application with custom authorization mechanisms, administrative tools, and user management controls.',
    img: getImgUrl('reab.list.png'),
    tags: ['VUE', 'HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
    demo: 'https://reablist.vercel.app/',
    code: 'https://github.com/kemvanny/Vue_Project_ANT'
  }
  ,
  {
    title: 'Pralong Admin Dashboard',
    desc: 'A full-stack administrative portal built with Node.js and Express RESTful APIs for real-time statistical tracking and backend management.',
    img: getImgUrl('pralong.dashboard.png'),
    tags: ['VUE', 'NODE.JS', 'MYSQL', 'BOOTSTRAP', 'HTML', 'CSS'],
    demo: 'https://qmlsystem.tdomain.work.gd/admin/dashboard',
    code: 'https://github.com/kemvanny/quiz_frontend'
  },
  {
    title: 'Online Exam System',
    desc: 'An academic management platform providing multi-role access for coordinating student dashboards, teacher portals, and admin workflows.',
    img: getImgUrl('online.exam.png'),
    tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
    demo: 'https://oem-user.vercel.app/',
    code: 'https://github.com/toemsamat/ant-online-exam-management'
  },
  {
    title: 'Hotel Booking System',
    desc: 'A modern accommodation booking UI enabling users to search rooms, review details, and navigate seamless reservation flows.',
    img: getImgUrl('hotel.booking.png'),
    tags: ['JAVASCRIPT', 'BOOTSTRAP', 'HTML', 'CSS'],
    demo: 'https://limchhenrevotey.github.io/HotelBooking/',
    code: 'https://github.com/LimchhenRevotey/HotelBooking'
  },
  {
    title: 'Movie Management System',
    desc: 'A responsive web application built for browsing, filtering, dynamic category filtering, interactive movie details, and managing an active movie catalog.',
    img: getImgUrl('movie.png'),
    tags: ['VUE', 'HTML', 'CSS', 'BOOTSTRAP'],
    demo: 'https://limchhenrevotey.github.io/MovieManagement/',
    code: 'https://github.com/LimchhenRevotey/MovieManagement'
  }
]);
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="eyebrow text-center">Recent work</p>
      <h2 class="section-title text-center mb-5">My <span class="grad-text">Projects</span></h2>

      <div class="row align-items-center gy-4">
        <div class="col-md-4" v-for="(project, index) in projects" :key="index">
          <BaseCard variant="project">
            <template #header>
              <div class="project-thumb">
                <img :src="project.img" :alt="project.title">
                <div class="project-overlay">
                  <a :href="project.demo" class="overlay-btn" title="Live Demo" target="_blank">
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                  <a :href="project.code" class="overlay-btn" title="GitHub" target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </template>
            <div class="project-body p-3">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.desc }}</p>
              <div>
                <span class="pill-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>