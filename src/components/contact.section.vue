<script setup>
import BaseCard from './ui/base.card.vue'
import BaseButton from './ui/base.button.vue'
import { useContactForm } from '@/composables/use.form.validation.js'
const {
  contactForm,
  errors,
  formSubmitted,
  validateName,
  validateEmail,
  validateMessage,
  submitContact,
  openEmail
} = useContactForm()
</script>

<template>
  <section id="contact" class="section py-5">
    <div class="container">
      <p class="eyebrow text-center text-uppercase fw-semibold mb-1">Let's Talk</p>
      <h2 class="section-title text-center mb-5 fw-bold">
        Get In <span class="grad-text">Touch</span>
      </h2>

      <div class="row g-4 justify-content-center align-items-stretch">
        <div class="col-lg-5 d-flex flex-column justify-content-between">
          <div>
            <p class="section-kicker mb-1">Let's build something</p>
            <h3 class="fw-bold mb-3 contact-heading">Contact Information</h3>
            <p class="contact-desc mb-4">
              Have a project in mind, or just want to talk shop? Drop a message and I'll get back to you shortly.
            </p>

            <div class="info-card d-flex align-items-center gap-3 mb-4 p-3 rounded-4">
              <span class="social-icon-glow flex-shrink-0">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <div class="text-truncate">
                <span class="d-block small text-muted">Direct Email</span>
                <a href="#" @click="openEmail()" target="_blank" rel="noopener noreferrer"
                  class="info-link fw-semibold text-truncate d-block">
                  revotey.limchhenn@gmail.com
                </a>
              </div>
            </div>

            <p class="section-kicker mb-2">Follow along</p>
            <div class="d-flex gap-2">
              <a href="https://www.linkedin.com/in/limchhen-revotey-591619359/" class="social-icon-glow"
                aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/LimchhenRevotey" class="social-icon-glow" aria-label="GitHub"><i
                  class="bi bi-github"></i></a>
              <a href="https://t.me/teyvtey" class="social-icon-glow" aria-label="Telegram"><i
                  class="bi bi-telegram"></i></a>
              <a href="https://www.facebook.com/revotey7" class="social-icon-glow" aria-label="Facebook"><i
                  class="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <BaseCard :hoverable="false" :full-height="true">
            <form @submit.prevent="submitContact" novalidate>
              <div class="mb-3">
                <label class="form-label-cyber" for="name">Name</label>
                <input id="name" v-model="contactForm.name" type="text" class="form-control-cyber"
                  :class="{ 'is-invalid': errors.name }" placeholder="Your name" @input="validateName"
                  @blur="validateName" />
                <div v-if="errors.name" class="invalid-feedback d-block text-danger small mt-1">
                  {{ errors.name }}
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label-cyber" for="email">Email</label>
                <input id="email" v-model="contactForm.email" type="email" class="form-control-cyber"
                  :class="{ 'is-invalid': errors.email }" placeholder="you@example.com" @input="validateEmail"
                  @blur="validateEmail" />
                <div v-if="errors.email" class="invalid-feedback d-block text-danger small mt-1">
                  {{ errors.email }}
                </div>
              </div>

              <div class="mb-4">
                <label class="form-label-cyber" for="message">Message</label>
                <textarea id="message" v-model="contactForm.message" class="form-control-cyber"
                  :class="{ 'is-invalid': errors.message }" rows="4" placeholder="Tell me about your project..."
                  @input="validateMessage" @blur="validateMessage"></textarea>
                <div v-if="errors.message" class="invalid-feedback d-block text-danger small mt-1">
                  {{ errors.message }}
                </div>
              </div>

              <BaseButton type="submit" size="lg" :block="true"
                :icon="formSubmitted ? 'bi-check-circle-fill' : 'bi-send-fill'">
                {{ formSubmitted ? 'Message Sent!' : 'Send Message' }}
              </BaseButton>
            </form>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-control-cyber.is-invalid {
  border-color: #ff4d4d !important;
  box-shadow: 0 0 10px rgba(255, 77, 77, 0.3) !important;
}

.form-control-cyber.is-invalid:focus {
  border-color: #ff1a1a !important;
  box-shadow: 0 0 15px rgba(255, 26, 26, 0.5) !important;
}
</style>