<script setup lang="ts">

import { type Footer } from '~/interfaces/footer'
const props = defineProps<{
    footer: Footer,
}>()

</script>
<template>
    <div class="border border-red-600 bg-black px-[115px] py-[93px] text-white">
        <div class="flex flex-col">
            <div class="grid grid-cols-5 grid-flow-col  justify-stretch">
                <div class="border border-green-500">
                    <div class="w-14 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 18" width="100%" height="100%"
                            fill="none" stroke="#FFFEFD" stroke-width="1px">
                            <title>UAG Logo</title>
                            <path
                                d="M17.758 0v18H0V0h4.2v13.743h9.358V0h4.2zM24.823 13.743V11.13h9.354v2.614h-9.354zm9.354-9.486v2.615H20.62V18h17.758V0H20.619v4.257h13.558zM41.242 18V0H59v4.257H45.442v9.486H54.8V11.13h-6.779V6.872H59V18H41.242z"
                                fill="#FFFEFD"></path>
                        </svg>
                    </div>

                </div>
                <template v-for="(item, index) in footer.menu" :key="index">
                    <div class="border border-green-500">
                        <h1 class="mb-4">{{ item.name }}</h1>
                        <div class="flex flex-col gap-6 py-3">
                            <template v-for="(itemSubMenu, indexSubMenu) in item.subMenu" :key="indexSubMenu">
                                <div class='flex'>
                                    <Icon :name="itemSubMenu.icon" color="white" class="hidden size-6 hover:scale-125" />
                                    <p class="text-[#DDDCDC]"> {{ itemSubMenu.name }}</p>
                                </div>

                            </template>

                        </div>
                    </div>
                </template>

            </div>
            <div class="grid grid-flow-col grid-cols-5">
                <template v-for="(itemSocial, indexSocial) in footer.social" :key="indexSocial">
                    <div class="border border-green-500 flex gap-4">
                        <Icon class="size-6 hover:scale-125" v-if="itemSocial.icon" :name="itemSocial.icon" color="white"/>
                        <p>{{ itemSocial.name }}</p>
                    </div>

                </template>

                <div class="border border-green-500 flex flex-row justify-around">
                    <div class="size-16" v-for="(logo, logoIndex) in footer.logo" :key="logoIndex">
                        <Icon :name="logo" color="white" class="size-6 hover:scale-125" />
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>
