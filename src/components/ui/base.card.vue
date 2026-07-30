<script setup>
defineProps({
    variant: {
        type: String,
        default: 'glass'
    },
    hoverable: {
        type: Boolean,
        default: true
    },
    fullHeight: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="glass-card" :class="[
        variant ? `${variant}-card` : '',
        { 'is-hoverable': hoverable, 'h-100': fullHeight }
    ]">
        <div v-if="$slots.header" class="base-card-header">
            <slot name="header"></slot>
        </div>

        <div class="base-card-body">
            <slot></slot>
        </div>

        <div v-if="$slots.footer" class="base-card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.card-info {
    padding: 1rem 1.25rem;
    border-radius: 1rem;
}
</style>