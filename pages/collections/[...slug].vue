<template>
    <div>
        {{ lastRouteSegment }}
        {{ $route.name }}
    </div>
</template>

<script setup>
const route = useRoute()
const lastRouteSegment = route.path.split('/').pop();
console.log(route)
</script>

<style lang="scss" scoped>

</style>
https://api.iconify.design/heroicons:face-frown.svg