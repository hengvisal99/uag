
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { type Card } from '~/interfaces/card'

const props = defineProps<{
    title: String,
    cardList : Card[],
    buttonShop ?: string
}>()

const bar = ref<number>(0);

const cardWidthPercentage = 100 /props.cardList.length;
const nextCard = () => {
  bar.value += cardWidthPercentage * 3; // Adjust based on how many cards you want to move
};

const previousCard = () => {
  bar.value -= cardWidthPercentage * 3; // Adjust based on how many cards you want to move
};

</script>

<template>
    <div class="h-auto w-full mb-3">
        <div class="gap-10 pl-28 h-full flex flex-col justify-center items-start">
            <div class="flex justify-between w-full">
                <h1 class="font-bold text-3xl">{{title}}</h1>
                <button v-if="buttonShop" class="group flex justify-between px-5 items-center  bg-black text-white w-44 h-12 font-bold text-3xl mr-24">
                    <h1 class="text-sm">
                        {{ buttonShop }}                   
                    </h1>
                    <Icon name="heroicons:arrow-long-right" color="white" class="group-hover:scale-125" />
                </button>
                
            </div>
            <div :style="{ 'transform': `translateX(-${bar}% )` }" class="ease-in-out duration-200  flex gap-5 w-max">
                <div v-for="(item, index) in props.cardList" :key="index"
                    class="group hover:-translate-y-1 flex flex-col gap-2 cursor-pointer justify-center items-center">
                    <img class=" size-[540px] bg-[#f5f4f3] w-auto group-hover:bg-gray-200" :src="item.img">
                    <p class="h-5 font-700 mr-auto">{{ item.name }}</p>
                    <p class="h-5 font-700 mr-auto text-[#A7ABAA]">{{ item.price }}</p>
                </div>
            </div>

            <div class="w-full flex gap-10 items-center">
                <div class="w-3/4"></div>
                <UButton  :disabled="bar <= 0" @click="previousCard" color="gray" variant="ghost" icon="i-heroicons-arrow-left-16-solid"
                    class="hover:bg-inherit" />
                <UButton :disabled="bar >= 75" @click="nextCard" color="gray" variant="ghost" icon="i-heroicons-arrow-right-16-solid"
                    class="hover:bg-inherit" />
            </div>
        </div>
    </div>
    
</template>
