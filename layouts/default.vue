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
    <baseFooter>
      
    </baseFooter>
  </div>
</template>
<script setup lang="ts">
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
</script>