<template>
    <div class="not-found-wrapper d-flex align-items-center justify-content-center min-vh-100">
        <div class="container py-5">
            <div class="row align-items-center gy-5">
                <div class="col-lg-5 text-center text-lg-start">
                    <h1 class="error-code text-navy fw-bold mb-0">Oops!</h1>
                    <h2 class="error-subtitle text-cyan fw-bold mb-3">Where are we?</h2>
                    <p class="error-desc text-muted mb-4 fs-6">
                        The page you are looking for was moved, removed, renamed, or might never have existed.
                    </p>

                    <BaseButton variant="glow-primary" icon="bi-house-door-fill" @click="goHome">
                        Go Home
                    </BaseButton>
                </div>

                <div class="col-lg-7 text-center">
                    <div class="illustration-container">
                        <img src="../../../public/images/not.found.png" alt="404 Page Not Found Illustration" class="img-fluid bear-img" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue';


const router = useRouter()

const goHome = () => {
    router.push('/')
}
</script>

<style scoped>
.not-found-wrapper {
    background-color: #D2E9F7;
    color: #1E293B;
}

.text-navy {
    color: #1B2541;
    font-size: clamp(3.5rem, 8vw, 6rem);
    line-height: 1;
}

.text-cyan {
    color: #38BDF8;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}

.error-desc {
    max-width: 650px;
    color: #64748B;
    line-height: 1.6;
}

.bear-img {
    max-width: 650px;
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.08));
}

@media (max-width: 991px) {
    .bear-img {
        max-width: 400px;
    }
}
</style>