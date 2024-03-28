<template>
    <div>
        <slide></slide>
        <category></category>
        <cardList :title="'TRENDING GEAR'" :cardList="tredingList"></cardList>
        <cardList :title="'EXPLORE UAG'" :cardList="exploreList" :buttonShop="'SHOP NOW'"></cardList>
    </div>
</template>
<script setup lang="ts">
import { type Card } from '~/interfaces/card'
const tredingList = ref<Card[]>([
    {
        id: 1,
        img: 'https://images.ctfassets.net/9hslf09drsil/3f1oDi76ZmjUWHh4mitu6v/4651e9e27b3232b50b127c72e4bc7a15/UAG_HS_SAMSUNG_S23_ULTRA_PATHFINDER_CUSTOM_TEXTURED-HEX.png?w=1024&q=70&fm=webp',
        name: 'PATHFINDER CASE FOR SAMSUNG GALAXY - TEXTURED HEX PATTERN',
        price: '$79.95'
    },
    {
        id: 2,
        img: 'https://images.ctfassets.net/9hslf09drsil/7gGarKt5SANb339lk9G5sE/4211e7af598f9538e619666986ce0052/UAG_HS_SAMSUNG_S23_ULTRA_PATHFINDER_CUSTOM_METAL-SPLATTER.png?w=1024&q=70&fm=webp',
        name: 'PATHFINDER CASE FOR SAMSUNG GALAXY - METAL SPLATTER',
        price: '$79.95'
    },
    {
        id: 3,
        img: 'https://images.ctfassets.net/9hslf09drsil/4aLrdNjdfEeTQuJBIDnQF/49750c0a7e885069fcf63eafb708913a/UAG_HS_SAMSUNG_S23_ULTRA_PATHFINDER_CUSTOM_GOLDEN-HEX.png?w=1024&q=70&fm=webp',
        name: 'PATHFINDER CASE FOR SAMSUNG GALAXY - GOLDEN HEX',
        price: '$79.95'
    },
    {
        id: 4,
        img: 'https://images.ctfassets.net/9hslf09drsil/6vmOUozx4l5eyH5Lel4Jrn/be934082d588e5e8a8fa3be562fc4c19/UAG_HS_SAMSUNG_S23_ULTRA_PATHFINDER_CUSTOM_ODG-TOPO.png?w=1024&q=70&fm=webp',
        name: 'Metropolis LT Pro Magnetic Series Galaxy S24 Ultra Case',
        price: '$79.95'
    },
    {
        id: 5,
        img: 'https://images.ctfassets.net/9hslf09drsil/0LXfDBQOCwRd5K3vLOhEi/c253d23db2312b40fe5d8c97d60ffa15/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-SHAQ_PATHFINDER-CLEAR-MAG_ICE_STD_01.png?w=1024&q=70&fm=webp',
        name: 'Pathfinder Clear Pro Magnetic Series Galaxy S24 Ultra Case',
        price: '$79.95'
    },
    {
        id: 6,
        img: 'https://images.ctfassets.net/9hslf09drsil/6F06gXtYr6VIHWXC40RuQ7/899fee5966cc245952e617f441d7a9a9/UAG_HS_SAMSUNG_GALAXY-SHAQ_MONARCH_KEVLAR-MALLARD_STD_01.png?w=1024&q=70&fm=webp',
        name: 'Monarch Kevlar® Series Galaxy S24 Ultra Case',
        price: '$79.95'
    },
    {
        id: 7,
        img: 'https://images.ctfassets.net/9hslf09drsil/G9g77bKMxf8OAe4IJZEIM/928351c4b784cdfd5155b9339f67092d/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-SHAQ_MONARCH-PRO_KEVLAR-BLACK_STD_01.png?w=1024&q=70&fm=webp',
        name: 'Monarch Pro Magnetic Kevlar® Series Galaxy S24 Ultra Case',
        price: '$79.95'
    },
    {
        id: 8,
        img: 'https://images.ctfassets.net/9hslf09drsil/6VDQVeOeRaPrBud2YrZLgg/e55018fbed503c20746ca419e85b8a27/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-SHAQ_MONARCH-PRO_CRIMSON_STD_01.png?w=1024&q=70&fm=webp',
        name: 'Monarch Pro Magnetic Series Galaxy S24 Ultra Case',
        price: '$79.95'
    },

]);
const exploreList = ref<Card[]>([
    {
        id: 1,
        img: 'https://images.ctfassets.net/9hslf09drsil/6VJTJctlN3YNdphxSoIeh1/221d5901c7b20cfb679930c0efdf5eeb/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-SHAQ_PLASMA-XTE-MAG_ASH-ORANGE_STD_01.png?w=1920&q=70&fm=webp',
        name: 'Plasma XTE Pro Magnetic Series Galaxy S24 Ultra Case',
        price: '69.95',
    },
    {
        id: 2,
        img: 'https://images.ctfassets.net/9hslf09drsil/1GE4UNdzNueUD9Qwl9Y0Tg/321e582937ddc9b4477edbecb486a1ae/UAG_HS_APPLE_IPHONE-2023-SUPERMAN_MONARCH-PRO-MAGSAFE_RUST_STD_01_MAGSAFE_ICON.png?w=1920&q=70&fm=webp',
        name: 'Monarch Pro For MagSafe iPhone 15 Pro Max Case',
        price: '$79.95'
    },
    {
        id: 3,
        img: 'https://images.ctfassets.net/9hslf09drsil/2WUmx4d2oDH516UKXFHmag/441fec4e438c5cad6785abd98ef2396f/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-SHAQ_PATHFINDER-SE-MAG_DIGI-CAMO-DARK-EARTH_STD_01.png?w=1920&q=70&fm=webp',
        name: 'Pathfinder SE Pro Magnetic Series Galaxy S24 Ultra Case',
        price: '$59.95'
    },
    {
        id: 4,
        img: 'https://images.ctfassets.net/9hslf09drsil/1h6hOWEmy99VZyVWpkan5Y/3a316b693f1ddc561ac414049a6328a7/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-MAGIC_MONARCH-PRO_CARBON-FIBER_STD_01.png?w=1920&q=70&fm=webp',
        name: 'Monarch Pro Magnetic Series Galaxy S24 Plus Case',
        price: '$79.95'
    },
    {
        id: 5,
        img: 'https://images.ctfassets.net/9hslf09drsil/6lWtbPWdamBFxxRj0Ijf9F/b0db93cd016dfa6574a8bacac0bde7d0/UAG_LT_APPLE_MACBOOK-PRO-16_PLYO_STD_01.png?w=1920&q=70&fm=webp',
        name: 'Plyo Series MacBook Pro 16" (M1/M2/M3 Max & Pro) (2021-2023) Case',
        price: '$79.95'
    },
    {
        id: 6,
        img: 'https://images.ctfassets.net/9hslf09drsil/5vK9wLB5tpDQD7y3okK933/7d35758368f8f647c3663293167c606f/MAG-ICON_UAG_HS_SAMSUNG_GALAXY-MAGIC_PATHFINDER-MAG_BLACK_STD_01.png?w=1920&q=70&fm=webp',
        name: 'Pathfinder Pro Magnetic Series Galaxy S24 Plus Case',
        price: '$54.95'
    },
    {
        id: 7,
        img: 'https://images.ctfassets.net/9hslf09drsil/5sCZbUGBmc7qJn3SCNEOeG/8941a93d27ac7b096fedaa590966ba13/UAG_HS_APPLE_IPHONE-15-PRO-2023-KRYPTO_PLYO-MAGSAFE-V2_ICE-ROSEGOLD_STD_01__1_.png?w=1920&q=70&fm=webp',
        name: 'Plyo For MagSafe iPhone 15 Pro Case',
        price: '$49.95'
    },
    {
        id: 8,
        img: 'https://images.ctfassets.net/9hslf09drsil/4gbGhM089oLIPlFUdDOLpD/71a3a09394a0bf1832460357902ed37a/UAG_WATCHSTRAPS_2022_ULTRA_49MM_SCOUT_FOLIAGEGREEN_VIEW_5.png?w=1920&q=70&fm=webp',
        name: 'Scout Silicone Watch Strap for Apple Watch',
        price: '$39.95'
    },
    {
        id: 9,
        img: 'https://images.ctfassets.net/9hslf09drsil/4J9WKTQMQz46AlqfLrwUQZ/a4b67f01be80d592095eb145e0ef70c5/UAG_HS_SAMSUNG_GALAXY-KOBE_MONARCH_KEVLAR-BLACK_STD_01.png?w=1920&q=70&fm=webp',
        name: 'Monarch Kevlar® Series Galaxy S24 Case',
        price: '$79.95'
    },
    {
        id: 10,
        img: 'https://images.ctfassets.net/9hslf09drsil/Ugjto8WzUlrwiV8jGKI70/5b5188f76af53eaf4dceade6d03d5e84/UAG_HS_SAMSUNG_GALAXY-2023-FOX_CIVILIAN_OLIVE_STD_01__1_.png?w=1440&q=70&fm=webp',
        name: 'Civilian Series Galaxy Z Fold5 (2023) Case',
        price: '$59.95'
    },
    {
        id: 11,
        img: 'https://images.ctfassets.net/9hslf09drsil/5lMftnquFJOncwSuThjJpC/c8eb4f796fd80e506bccf55743fa74f7/UAG_CB_USB-C-TO-C-CABLE_ORANGE_PRM_01.png?w=1440&q=70&fm=webp',
        name: 'Kevlar® Core USB-C to USB-C Power Cable',
        price: '$29.95'
    },
    {
        id: 12,
        img: 'https://images.ctfassets.net/9hslf09drsil/47b9LiRqNOtwjAET08ZjUc/1b7ea49dabf1ea60c71ba14afacd9d61/UAG_HS_GOOGLE_PIXEL-8-PRO-2023_PINNACLES_SCOUT_OLIVE_STD_01.png?w=1440&q=70&fm=webp',
        name: 'Scout Series Google Pixel 8 Pro Case',
        price: '$29.95'
    },
    {
        id: 13,
        img: 'https://images.ctfassets.net/9hslf09drsil/1WzBvU3To2xGC7VqTCjsME/ccec7a403789f6223ef5746a139ea186/UAG_TB_APPLE_IPAD-PRO-2022-11_METROPOLIS_BLACK_STD_01.png?w=1440&q=70&fm=webp',
        name: 'Metropolis Series iPad Pro 11" (4th Gen, 2022) Folio Case',
        price: '$69.95'
    },
    {
        id: 14,
        img: 'https://images.ctfassets.net/9hslf09drsil/7zRg5yGUPTlxqDAarLxvJq/fc753105d782bf72ef05b9dae7de0491/UAG_HP_APPLE_AIRPODS-PRO-GEN2-2020_METROPOLIS_BLACK_STD_07.png?w=1440&q=70&fm=webp',
        name: 'Metropolis Ballistic ARMR Case for AirPods Pro (2nd Gen, 2022)',
        price: '$27.95'
    },
    {
        id: 15,
        img: 'https://images.ctfassets.net/9hslf09drsil/35FGHqpPLYdpZIjJ8Rytae/41c28e439972742be02f0ca833c59f90/UAG_TB_APPLE_IPAD_AIR_2022_METROPOLIS-SE_OLIVE_STD_06.png?w=1440&q=70&fm=webp',
        name: 'Metropolis SE Series iPad Air 10.9" (5th Gen, 2022) Folio Case',
        price: '$69.95'
    },
    {
        id: 16,
        img: 'https://images.ctfassets.net/9hslf09drsil/6JEikmKDMWvVhEGmMw4NXn/ae9c39831288a7b668a3036988af1e99/UAG_TB_APPLE_IPAD-PRO-11_PLYO_BLACK_STD_01.png?w=1440&q=70&fm=webp',
        name: 'Plyo Series iPad Pro 11" (4th Gen, 2022) Folio Case',
        price: '$59.95'
    },
    {
        id: 17,
        img: 'https://images.ctfassets.net/9hslf09drsil/7mgH1h8f9XwaNM1WvbT5fT/04cd9d896ab4d6c8f70a1af3ac4b790d/U_TB_APPLE_IPAD-PRO-2021-12-9-LUCENT_SOFTBLUE_STD_01.png?w=1440&q=70&fm=webp',
        name: '[U] Lucent Series iPad Pro 12.9" (6th Gen, 2022) Folio Case',
        price: '$79.95'
    },
    {
        id: 18,
        img: 'https://images.ctfassets.net/9hslf09drsil/7rGfl4Ol41NOxPDaOJEwIX/029929e51063c16fa97fe7f7a5812cff/UAG_TB_SAMSUNG_GALAXY-TAB-S9-ULTRA-2023_METROPOLIS-SE_BLACK_STD_01__1_.png?w=1440&q=70&fm=webp',
        name: 'Metropolis SE Series Galaxy Tab S9 Ultra 14.6" Folio Case',
        price: '$89.95'
    },
]);
</script>