<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        title: 'Movie Management System',
        desc: 'A full-stack platform for browsing, rating and managing a movie catalog with an admin dashboard.',
        img: '/assets/images/projects/movie.png',
        tags: ['VUE', 'HTML', 'CSS', 'BOOTSTRAP'],
        demo: 'https://limchhenrevotey.github.io/MovieManagement/', code: 'https://github.com/LimchhenRevotey/MovieManagement'
    },
    {
        title: 'Hotel Booking System',
        desc: 'A storefront with cart, checkout flow, and inventory management built for scale.',
        img: '/assets/images/projects/hotelBooking.png',
        tags: ['JAVASCRIPT', 'BOOTSTRAP', 'HTML', 'CSS'],
        demo: 'https://github.com/LimchhenRevotey/HotelBooking/', code: 'https://limchhenrevotey.github.io/HotelBooking/'
    },
    {
        title: 'Analytics Dashboard',
        desc: 'Real-time metrics dashboard with configurable widgets and role-based access control.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&auto=format&q=80',
        tags: ['VUE', 'NODE.JS'],
        demo: '#', code: '#'
    },
    {
        title: 'Movie Management System',
        desc: 'A full-stack platform for browsing, rating and managing a movie catalog with an admin dashboard.',
        img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=450&fit=crop&auto=format&q=80',
        tags: ['VUE', 'NODE.JS', 'MYSQL'],
        demo: '#', code: '#'
    },
    {
        title: 'E-commerce Platform',
        desc: 'A storefront with cart, checkout flow, and inventory management built for scale.',
        img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=450&fit=crop&auto=format&q=80',
        tags: ['VUE', 'BOOTSTRAP', 'EXPRESS'],
        demo: '#', code: '#'
    },
    {
        title: 'Analytics Dashboard',
        desc: 'Real-time metrics dashboard with configurable widgets and role-based access control.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&auto=format&q=80',
        tags: ['VUE', 'NODE.JS'],
        demo: '#', code: '#'
    },
]);
</script>

<template>
    <section id="projects" class="section">
        <div class="container">
            <p class="eyebrow text-center">Recent work</p>
            <h2 class="section-title text-center mb-5">My <span class="grad-text">Projects</span></h2>

            <div class="row align-items-center gy-4">
                <div class="col-md-4" v-for="project in projects" :key="project.title">
                    <div class="project-card">
                        <div class="project-thumb">
                            <img :src="project.img" :alt="project.title">
                            <div class="project-overlay">
                                <a :href="project.demo" class="overlay-btn" title="Live Demo"><i
                                        class="bi bi-box-arrow-up-right"></i></a>
                                <a :href="project.code" class="overlay-btn" title="GitHub"><i
                                        class="bi bi-github"></i></a>
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