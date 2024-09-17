<template>
    <div class="input">
        <label for="input">{{ label }}</label>
        <span v-if="showError" class="input-error">{{ textError }}</span>
        <input :type="type" v-model="inputData" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'text',
    },
    showError: {
        type: Boolean,
        default: false,
    },
    textError: {
        type: String,
        default: false,
    },
})
const inputData = defineModel('inputData')
</script>

<style scoped lang="scss">
@import '/src/assets/variables.scss';

.input {
    position: relative;
    width: 100%;
    display: grid;
    padding: 7px 16px;
    border-radius: 4px;
    border: 1px solid $gray-l;

    & label {
        font-size: 13px;
        color: $gray;
    }

    & input {
        width: 100%;
        border: none;

        &:focus {
            outline: none;

        }
    }
    &-error{
        position: absolute;
        right: 16px;
        top: 7px;
        color: $error;
    }
}
</style>
