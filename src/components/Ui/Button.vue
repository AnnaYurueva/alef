<template>
    <button :class="styleClass">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
interface variants {
    default: string
    secondary: string
    outline: string
    text: string
}

enum enumVariants {
    default = 'default',
    secondary = 'secondary',
    outline = 'outline',
    text = 'text',
}

const props = defineProps({
    variant: {
        type: String as PropType<keyof typeof enumVariants>,
        default: 'default',
    },
})

const styleButton: variants = {
    default: 'default',
    outline: 'outline',
    secondary: 'secondary',
    text: 'text',
}

const styleClass = computed(() => styleButton[props.variant])
</script>

<style scoped lang="scss">
@import '/src/assets/variables.scss';

button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 10px 20px;
    border-radius: 100px;
    font-size: 14px;
    line-height: 24px;
    font-family: "Montserrat", serif;

    transition: all .3s linear;
    cursor: pointer;

    &.default {
        background-color: $primary;
        color: $white;
        border: none;

        &:hover {
            background-color: $primary-hover;
        }

        &:disabled {
            background-color: $primary-disabled;
        }
    }

    &.outline {
        border: 2px solid $primary;
        color: $primary;
        background-color: transparent;

        &:hover {
            background-color: $puprle;
        }

        &:disabled {
            opacity: .56
        }
    }

    &.text {
        color: $primary;
        background-color: transparent;
        border: none;
        border-radius: 4px;

        &:hover {
            background-color: $puprle;
        }

        &:disabled {
            opacity: .56
        }
    }
}
</style>