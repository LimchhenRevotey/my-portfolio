<script setup>
import { ref } from 'vue';
const getImgUrl = (name) => {
  return new URL(`../assets/images/projects/${name}`, import.meta.url).href;
};

const projects = ref([
    {
    title: 'Pralong',
    desc: 'Real-time metrics dashboard with configurable widgets and role-based access control.',
    img: getImgUrl('pralong.png'),
    tags: ['VUE', 'NODE.JS', 'MYSQL', 'BOOTSTRAP', 'HTML', 'CSS'],
    demo: 'https://qmlsystem.tdomain.work.gd/', 
    code: 'https://github.com/kemvanny/quiz_frontend'
  },
  {
    title: 'Movie Management System',
    desc: 'A full-stack platform for browsing, rating and managing a movie catalog with an admin dashboard.',
    img: getImgUrl('movie.png'),
    tags: ['VUE', 'HTML', 'CSS', 'BOOTSTRAP'],
    demo: 'https://limchhenrevotey.github.io/MovieManagement/', 
    code: 'https://github.com/LimchhenRevotey/MovieManagement'
  },
  
  {
    title: 'Online Exam',
    desc: 'A full-stack platform for browsing, rating and managing a movie catalog with an admin dashboard.',
    img: getImgUrl('onlineExam.png'),
    tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
    demo: 'https://oem-user.vercel.app/', 
    code: 'https://github.com/toemsamat/ant-online-exam-management'
  },
  {
    title: 'Hotel Booking System',
    desc: 'A storefront with cart, checkout flow, and inventory management built for scale.',
    img: getImgUrl('hotelBooking.png'),
    tags: ['JAVASCRIPT', 'BOOTSTRAP', 'HTML', 'CSS'],
    demo: 'https://limchhenrevotey.github.io/HotelBooking/', 
    code: 'https://github.com/LimchhenRevotey/HotelBooking'
  },
  {
    title: 'E-commerce Platform',
    desc: 'A storefront with cart, checkout flow, and inventory management built for scale.',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=450&fit=crop&auto=format&q=80',
    tags: ['VUE', 'BOOTSTRAP', 'EXPRESS'],
    demo: '#', 
    code: '#'
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time metrics dashboard with configurable widgets and role-based access control.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&auto=format&q=80',
    tags: ['VUE', 'NODE.JS'],
    demo: '#', 
    code: '#'
  },
]);
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="eyebrow text-center">Recent work</p>
      <h2 class="section-title text-center mb-5">My <span class="grad-text">Projects</span></h2>

      <div class="row align-items-center gy-4">
        <div class="col-md-4" v-for="(project, index) in projects" :key="index">
          <div class="project-card">
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
            <div class="project-body">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.desc }}</p>
              <div>
                <span class="pill-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>