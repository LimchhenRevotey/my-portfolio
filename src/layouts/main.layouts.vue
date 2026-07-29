<script setup>
import Footer from '@/components/footer.vue';
import Navbar from '@/components/navbar.vue';
</script>

<template>
    <div class="container">
        <div class="bg-orbs" aria-hidden="true">
            <!-- <span class="orb orb-1"></span> -->
            <span class="orb orb-2"></span>
            <span class="orb orb-3"></span>
            <span class="orb orb-4"></span>
            <span class="orb orb-5"></span>
        </div>
        <Navbar></Navbar>
        <main class="content-body">
            <slot>

            </slot>
        </main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
/* .content-body {
    padding-top: 60px;
} */
</style>