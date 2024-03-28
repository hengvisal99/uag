<script setup lang="ts">
const items = [
  'https://images.ctfassets.net/9hslf09drsil/7yJj7CnVIUCRNaDHlmyGDM/7a913a10ede2fd76b01f6c6c41bdf3e1/GOOGLE_PIXEL_8_HOMEPAGE_5470x3282_BOTH.jpg?w=1440&q=70&fm=webp',
  'https://images.ctfassets.net/9hslf09drsil/3OFgwClGwvn87ebRn9dFVg/a978919db03547247786d66ad2c885ab/UAG24_STUDIO_HQ_FORGED_CARBON_FIBER_IPHONE_15_PRO_HERO_8.jpg?w=1440&q=70&fm=webp',
  'https://images.ctfassets.net/9hslf09drsil/78CiZNRhLYYW9OcbdQt7x6/c33b7d96b4127dabaefedc6cf6f9336a/TRY12.jpg?w=1440&q=50&fm=webp',
'https://images.ctfassets.net/9hslf09drsil/vkQg5eEl17zIWlzsqxqzD/33e0bbb61254411b33a30f8671ecbd29/JTEDITUAG_MB_IPHONE15_CLIMBING_18__1_.jpg?w=1920&q=50&fm=webp'
]
const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <UCarousel  ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden h-[740px]" arrows>
    <img :src="item" class="w-full object-cover h-[740px]" draggable="false">
  </UCarousel>
</template>

