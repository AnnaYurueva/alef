<template>
    <div class="input">
        <label for="input">{{ label }}</label>
        <input type="text" v-model="inputData" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    }
})
const inputData = defineModel('inputData')
</script>

<style scoped lang="scss">
@import '/src/assets/variables.scss';

.input {
    display: grid;
    padding: 7px 16px;
    border-radius: 4px;
    border: 1px solid $gray-l;

    & label {
        font-size: 13px;
        color: $gray;
    }

    & input {
        border: none;

        &:focus {
            outline: none;

        }
    }
}
</style>
