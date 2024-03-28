<script setup lang="ts">
import { ref } from 'vue';
const bar = ref<number>(70);
const isNext = ref<boolean>(false);
const categories = ref([
    {
        id : 1,
        img : 'https://images.ctfassets.net/9hslf09drsil/3HZkc5BqGBMLJsJsCVFILH/0d380e3a85141693ac3b21355fb17e86/UAG_HS_APPLE_IPHONE14-PRO-MAX-2022-6-7-TINKY_MONARCH_KEVLAR-BLACK_STD_01.png?w=1920&q=70&fm=webp',
        name : 'iPhone Cases'
    },
    {
        id : 2,
        img : 'https://images.ctfassets.net/9hslf09drsil/2dfqaWsJ1SHTzjY607d1Tq/75fea826db3fdf7a8e592873d7836264/UAG_HS_SAMSUNG_GALAXY-S23-2023-JUPITER_PLYO_ASH_STD_01.png?w=1920&q=70&fm=webp',
        name : 'Samsung Cases'
    },
    {
        id : 3,
        img : 'https://images.ctfassets.net/9hslf09drsil/1b12q1Pnw02sQ06v8fkkM3/6ad7cdc428740f9bae5c9d7ae802e790/Apple_iPad_Pro_2020_11_Metropolis_MMA-00-STD-PT01.303.png?w=1920&q=70&fm=webp',
        name : 'iPad Cases'
    },
    {
        id : 4,
        img : 'https://images.ctfassets.net/9hslf09drsil/4xEFxUlQK49bfcP1cuoJZ3/5913f5913e0c3a877f62d3b0d9528f5e/UAG_WATCHSTRAPS_2022_CIVILIAN_MALLARD_VIEW_2.png?w=1920&q=70&fm=webp',
        name : 'Apple Watch Straps'
    },
    {
        id : 5,
        img : 'https://images.ctfassets.net/9hslf09drsil/5Yor31JRCo34O6W5r9y2ev/f142be6348fac84a9f71c63a4071cc4d/UAG_HP_APPLE_AIRPODS_2021_WATERPROOF-PATHFINDER_SLV_STD_02.png?w=1920&q=70&fm=webp',
        name : 'Airpods Cases'
    },
    {
        id : 6,
        img : 'https://images.ctfassets.net/9hslf09drsil/1d292jNB2g3JkgBNA8WA37/5a80770b249910a627f77ad3fa484af1/122.png?w=1920&q=70&fm=webp',
        name : 'AirTag Cases'
    },
    {
        id : 7,
        img : 'https://images.ctfassets.net/9hslf09drsil/1e5a6Yl01kPpJJTE2EuwPt/c4a4cb1f08462140646594c38daaa471/UAG_BG_HIP-PACK-2021_OLV_03.png?w=1920&q=70&fm=webp',
        name : 'Gear Cases'
    }
])
</script>

<template>
    <div class="h-[540px]  w-full">
        <div class="gap-10 pl-28 h-full  flex flex-col  justify-center items-start">
            <h1 class="font-bold text-3xl">CATEGORIES</h1>
            <div :class="{ '-translate-x-2/4': isNext   }" class="ease-in-out duration-100 flex gap-10  w-max">
                <div  v-for="item in categories" :key="item.id" class="hover:-translate-y-1 flex flex-row gap-5 border rounded px-4 cursor-pointer items-center">
                    <img class="h-20 w-20"
                        :src=item.img>
                    <p class="h-5 font-700">{{ item.name }}</p>
                </div>
            </div>
            <div class="w-full flex gap-10  items-center">
                <UProgress size="sm" :value="bar" class="w-3/4" :color="'black'" />
                <UButton @click="bar = 70;isNext = false" color="gray" variant="ghost" icon="i-heroicons-arrow-left-16-solid" class="hover:bg-inherit" />
                <UButton @click="bar = 100; isNext = true" color="gray" variant="ghost" icon="i-heroicons-arrow-right-16-solid" class="hover:bg-inherit" />
            </div>

        </div>
    </div>
</template>
