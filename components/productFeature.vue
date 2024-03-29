<script setup lang="ts">
import { type ProductFeature } from '~/interfaces/productFeature'
const props = defineProps<{
    productFeature : ProductFeature
}>()
</script>

<template>
    <div class="w-full px-[120px] py-[104px]">
        <div class="h-[1200px]">
            <h2 class="text-[64px] mb-20 font-bold">{{ productFeature.title }}</h2>
            <div class="flex w-full h-full">
                <div class="flex w-[60%] gap-14">
                    <div class="flex flex-col w-1/2">
                        <img class="h-[960px] object-cover"
                            :src="productFeature.leftImg">

                        <div class="flex flex-row items-center gap-2 mt-8 text-[#A7ABAA]">
                            <Icon name="heroicons:minus" class="text-2xl" />
                            <p class="text-sm">
                                {{ productFeature.leftTitle }}
                            </p>
                        </div>

                    </div>
                    <div class="flex flex-col w-1/2">
                        <img class="h-[750px] object-cover"
                            :src="productFeature.rightImg">

                        <div class="flex flex-row items-center gap-2 mt-8 text-[#A7ABAA]">
                            <Icon name="heroicons:minus" class="text-2xl" />
                            <p class="text-sm">
                                {{ productFeature.rightTitle }}
                            </p>
                        </div>

                    </div>
                </div>
                <div class="w-1/2 h-full pl-12">
                    <div class="flex flex-col ">
                        <div class="my-8">
                            <p class="text-3xl font-normal leading-[42px]">
                                {{ productFeature.label }}
                            </p>
                        </div>
                        <div class="flex">
                            <div v-for="(item, index) in productFeature.productFeatureDetail" :key="index"
                                class="gap-2 flex flex-col flex-wrap mr-3 mb-10 pr-4">
                                <div>
                                    <div class="w-[144px] h-10">
                                        <img class="size-12" :src="item.img">
                                    </div>
                                    <p class="mt-8 text-sm w-[144px] h-auto">{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            class="group flex justify-between px-5 items-center  bg-black text-white w-[305px] h-12 font-bold text-3xl mr-24">
                            <h1 class="text-sm">
                                {{ productFeature.buttonName }}
                            </h1>
                            <Icon name="heroicons:minus" color="white" class="group-hover:scale-125" />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>
