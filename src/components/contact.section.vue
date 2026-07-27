<script setup>
import { reactive, ref } from 'vue'

const contactForm = reactive({ name: '', email: '', message: '' })
const formSubmitted = ref(false)

function submitContact() {
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
    contactForm.name = ''
    contactForm.email = ''
    contactForm.message = ''
  }, 3000)
}
</script>

<template>
  <section id="contact" class="section py-5">
    <div class="container">
      <p class="eyebrow text-center text-uppercase fw-semibold mb-1">Let's Talk</p>
      <h2 class="section-title text-center mb-5 fw-bold">
        Get In <span class="grad-text">Touch</span>
      </h2>

      <div class="row g-4 justify-content-center align-items-stretch">
        <!-- Left Side: Contact Info -->
        <div class="col-lg-5 d-flex flex-column justify-content-between">
          <div>
            <p class="section-kicker mb-1">Let's build something</p>
            <h3 class="fw-bold mb-3 contact-heading">Contact Information</h3>
            <p class="contact-desc mb-4">
              Have a project in mind, or just want to talk shop? Drop a message and I'll get back to you shortly.
            </p>

            <!-- Email Card -->
            <div class="info-card d-flex align-items-center gap-3 mb-4 p-3 rounded-4">
              <span class="social-icon-glow flex-shrink-0">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <div class="text-truncate">
                <span class="d-block small text-muted">Direct Email</span>
                <a href="https://revotey.limchhen@gmail.com" class="info-link fw-semibold text-truncate d-block">
                  revotey.limchhen@gmail.com
                </a>
              </div>
            </div>

            <!-- Social Links -->
            <p class="section-kicker mb-2">Follow along</p>
            <div class="d-flex gap-2">
              <a href="https://www.linkedin.com/in/limchhen-revotey-591619359/" class="social-icon-glow" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/LimchhenRevotey" class="social-icon-glow" aria-label="GitHub"><i class="bi bi-github"></i></a>
              <a href="https://t.me/teyvtey" class="social-icon-glow" aria-label="Telegram"><i class="bi bi-telegram"></i></a>
              <a href="https://www.facebook.com/revotey7" class="social-icon-glow" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="col-lg-7">
          <div class="contact-glass h-100">
            <form @submit.prevent="submitContact">
              <div class="mb-3">
                <label class="form-label-cyber" for="name">Name</label>
                <input
                  id="name"
                  v-model="contactForm.name"
                  type="text"
                  class="form-control-cyber"
                  placeholder="Your name"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label-cyber" for="email">Email</label>
                <input
                  id="email"
                  v-model="contactForm.email"
                  type="email"
                  class="form-control-cyber"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="form-label-cyber" for="message">Message</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  class="form-control-cyber"
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-glow-primary rounded-pill w-100 py-3 fw-semibold">
                <i class="bi" :class="formSubmitted ? 'bi-check-circle-fill' : 'bi-send-fill'"></i>
                <span class="ms-2">{{ formSubmitted ? 'Message Sent!' : 'Send Message' }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.contact-glass {
  border-radius: 24px;
  padding: 2.5rem;
  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.6));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border, rgba(0, 0, 0, 0.08));
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

[data-bs-theme='dark'] .contact-glass {
  background: rgba(15, 23, 42, 0.65);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

[data-bs-theme='dark'] .contact-heading,
[data-bs-theme='dark'] .info-link,
[data-bs-theme='dark'] .form-label-cyber {
  color: #f8fafc !important; 
}

[data-bs-theme='dark'] .contact-desc {
  color: #94a3b8 !important; 
}

[data-bs-theme='dark'] .info-card {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
}

[data-bs-theme='dark'] .info-card .text-muted {
  color: #cbd5e1 !important;
}

[data-bs-theme='dark'] .form-control-cyber {
  background: rgba(15, 23, 42, 0.8) !important;
  border-color: rgba(255, 255, 255, 0.18) !important;
  color: #ffffff !important;
}

[data-bs-theme='dark'] .form-control-cyber::placeholder {
  color: #64748b !important;
}

[data-bs-theme='dark'] .social-icon-glow {
  background: rgba(255, 255, 255, 0.08) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  color: #ffffff !important;
}

[data-bs-theme='dark'] .contact-glass {
  background: rgba(15, 23, 42, 0.75) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5) !important;
}

.contact-heading {
  color: var(--text-heading, #0f172a);
}

.contact-desc {
  max-width: 400px;
  line-height: 1.7;
  color: var(--text-muted, #475569);
}

.form-label-cyber {
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--text-heading, #334155);
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.info-card {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--glass-border, rgba(0, 0, 0, 0.06));
}

[data-bs-theme='dark'] .info-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.08);
}

.info-link {
  color: var(--text-heading, #0f172a);
  text-decoration: none;
  transition: color 0.2s ease;
}

.info-link:hover {
  color: var(--cyan, #06b6d4);
}

.social-icon-glow {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: var(--text-heading, #0f172a);
  font-size: 1.15rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

[data-bs-theme='dark'] .social-icon-glow {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: #f1f5f9;
}

.social-icon-glow:hover {
  color: #06b6d4;
  border-color: #06b6d4;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.35);
  transform: translateY(-3px);
}

.form-control-cyber {
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: #0f172a;
  border-radius: 14px;
  padding: 0.85rem 1.1rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

[data-bs-theme='dark'] .form-control-cyber {
  background: rgba(15, 23, 42, 0.7);
  border-color: rgba(255, 255, 255, 0.12);
  color: #f8fafc;
}

.form-control-cyber:focus {
  outline: none;
  border-color: #06b6d4;
  box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.15), 0 0 20px rgba(6, 182, 212, 0.2);
}

.form-control-cyber::placeholder {
  color: #94a3b8;
}

.btn-glow-primary {
  background: linear-gradient(135deg, #06b6d4, #7c3aed);
  border: none;
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.25);
}

.btn-glow-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(6, 182, 212, 0.4);
  color: #ffffff;
}

@media (max-width: 767px) {
  .contact-glass {
    padding: 1.8rem 1.2rem;
  }
}
</style>