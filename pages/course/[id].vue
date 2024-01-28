<template>
    <div>
        <h1>課程id為:{{route.params.id}}</h1>
    </div>
</template>
<script lang="ts" setup>
const route = useRoute()
console.log(route.params.id)
</script>