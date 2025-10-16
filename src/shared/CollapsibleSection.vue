<template>
    <div>
        <div class="header">
            <button v-if="open" @click="open = !open">
                <slot name="collapse"> &#x25B2; Collapse</slot>
            </button>
            <button v-if="!open" @click="open = !open">
                <slot name="expand"> &#x25BC; Expand</slot>
            </button>
        </div>
        <slot v-if="open">
        </slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(true);
</script>

<style scoped>
.header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
    font-size: 22px;
}
</style>
