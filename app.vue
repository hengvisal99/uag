<template>
  <!-- class="overflow-x-clip" -->
  <div class="overflow-x-clip">
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

const nuxtElement = ref(null);

onMounted(() => {
  nuxtElement.value = document.querySelector("#__nuxt");

  const mediaQuery = window.matchMedia('(min-width: 1025px)');
  mediaQuery.addEventListener('change', handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);
});

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    nuxtElement.value.removeAttribute('inert');
  }
}
</script>