<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'glow-primary'
    },
    size: {
        type: String,
        default: 'md'
    },
    icon: {
        type: String,
        default: ''
    },
    href: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: 'button'
    },
    block: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const isLink = computed(() => !!props.href)
</script>

<template>
    <component :is="isLink ? 'a' : 'button'" :href="href" :type="isLink ? null : type" class="btn base-btn" 
    :class="[
        `btn-${variant}`,
        `btn-${size}`,
        { 'w-100': block, 'is-disabled': disabled }
    ]" :disabled="disabled && !isLink">
        <i v-if="icon" class="bi me-2" :class="icon"></i>
        <slot></slot>
    </component>
</template>

<style scoped>
.base-btn {
    border-radius: 50rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
}
.btn-sm {
    padding: 0.4rem 1rem;
    font-size: 0.875rem;
}

.btn-md {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
}

.btn-lg {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
}
</style>