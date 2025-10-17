<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>


<script setup>
const part = { title: 'Part Title', description: 'Part Description' };
</script>
