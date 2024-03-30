<template>
  <div>
    <UHeader :links="links">
      <template #logo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 18" width="25%" height="100%" fill="none"
          stroke="#000000" stroke-width="1px">
          <title>UAG Logo</title>
          <path
            d="M17.758 0v18H0V0h4.2v13.743h9.358V0h4.2zM24.823 13.743V11.13h9.354v2.614h-9.354zm9.354-9.486v2.615H20.62V18h17.758V0H20.619v4.257h13.558zM41.242 18V0H59v4.257H45.442v9.486H54.8V11.13h-6.779V6.872H59V18H41.242z"
            fill="#000000"></path>
        </svg>
      </template>

      <template #right>
        <UColorModeButton />
        <UButton @click="isOpen = true" icon="i-heroicons-magnifying-glass" color="gray" variant="ghost" />
        <USlideover v-model="isOpen" prevent-close>
          <UCard class="flex flex-col flex-1"
            :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  Slideover
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                  @click="isOpen = false" />
              </div>
            </template>
            asdasd
            <Placeholder class="h-full" />
          </UCard>
        </USlideover>
        <UButton icon="i-heroicons-shopping-cart" color="gray" variant="ghost" />
      </template>

      <template #panel>
        <UNavigationTree :links="links" />
      </template>

    </UHeader>
    <slot />
    <baseFooter :footer="footer">
      
    </baseFooter>
  </div>
</template>
<script setup lang="ts">
import {type Footer} from '~/interfaces/footer'
const isOpen = ref(false)
const links = [
  {
    label: 'PHONE',
    // icon: 'i-heroicons-square-3-stack-3d',
    to: '/phone',
    children: [
      {
        label: 'Pricing',
        to: '/pro/pricing',
        icon: 'i-heroicons-paper-airplane-solid',
        description: 'A simple pricing, for solo developers or teams.'
      },
      {
        label: 'Templates',
        to: '/pro/templates',
        icon: 'i-heroicons-computer-desktop',
        description: 'Get started with one of our official templates.'
      }
    ]
  },
  {
    label: 'TABLET',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/tablet',
    children: [
      {
        label: 'Pricing',
        to: '/pro/pricing',
        icon: 'i-heroicons-credit-card',
        description: 'A simple pricing, for solo developers or teams.'
      },
      {
        label: 'Templates',
        to: '/pro/templates',
        icon: 'i-heroicons-computer-desktop',
        description: 'Get started with one of our official templates.'
      }
    ]
  },
  {
    label: 'LAPTOP',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/laptop',
    children: [
      {
        label: 'Pricing',
        to: '/pro/pricing',
        icon: 'i-heroicons-credit-card',
        description: 'A simple pricing, for solo developers or teams.'
      },
      {
        label: 'Templates',
        to: '/pro/templates',
        icon: 'i-heroicons-computer-desktop',
        description: 'Get started with one of our official templates.'
      }
    ]
  },
  {
    label: 'HEADPHONES',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/headphones',
    children: [
      {
        label: 'Pricing',
        to: '/pro/pricing',
        icon: 'i-heroicons-credit-card',
        description: 'A simple pricing, for solo developers or teams.'
      },
      {
        label: 'Templates',
        to: '/pro/templates',
        icon: 'i-heroicons-computer-desktop',
        description: 'Get started with one of our official templates.'
      }
    ]
  },
  {
    label: 'WATCH',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/watch',
    children: [
      {
        label: 'Pricing',
        to: '/pro/pricing',
        icon: 'i-heroicons-credit-card',
        description: 'A simple pricing, for solo developers or teams.'
      },
      {
        label: 'Templates',
        to: '/pro/templates',
        icon: 'i-heroicons-computer-desktop',
        description: 'Get started with one of our official templates.'
      }
    ]
  },
  {
    label: 'POWER',
    icon: 'i-heroicons-rocket-launch',
    to: '/power'
  },
  {
    label: 'BAGS & SLEEVES',
    icon: 'i-heroicons-rocket-launch',
    to: '/bags-sleeves'
  },
  {
    label: 'GEAR',
    icon: 'i-heroicons-rocket-launch',
    to: '/gear'
  }
]
const footer = ref<Footer>({
  menu : [
    {
      name : 'SHOP',
      subMenu : [
        {
          name : 'Cases // Protectors',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'iPhone 15 Cases',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Galaxy S23 Cases',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Watch Straps',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Sleeves',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Gear',
          icon : 'i-heroicons-minus-small-20-solid',
        }
      ]
    },
    {
      name : 'EXPLORE',
      subMenu : [
        {
          name : 'About Us',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'UAG Life',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Refer a Friend',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Loyalty Rewards',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Service Discounts',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Field Log',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Ambassadors',
          icon : 'i-heroicons-minus-small-20-solid',
        }
      ]
    },
    {
      name : 'BUSINESS',
      subMenu : [
        {
          name : 'Business Inquiries',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Enterprise by UAG',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Deal Registration',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Built for Healthcare',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Affiliate Program',
          icon : 'i-heroicons-minus-small-20-solid',
        },
      ]
    },
    {
      name : 'ABOUT',
      subMenu : [
        {
          name : 'About Us',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Support',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Warranty Information',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Returns',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Web Accessibility',
          icon : 'i-heroicons-minus-small-20-solid',
        },
        {
          name : 'Intellectual Property',
          icon : 'i-heroicons-minus-small-20-solid',
        },
      ]
    }
  ],
  social : [
    {
      name : 'Log In',
      icon : 'i-heroicons-user'
    },
    {
      name : 'Privacy Policy',
    },
    {
      name : 'Terms and Conditions',
    },
  ],
  logo : ['i-uil-instagram','i-uil-twitter','i-uil-facebook','i-uil-youtube' ]

})
</script>