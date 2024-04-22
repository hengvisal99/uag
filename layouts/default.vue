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
    <template v-if="lastRouteSegment !== 'all'">
      <baseFooter :footer="footer">

      </baseFooter>
    </template>

  </div>
</template>
<script setup lang="ts">
import { type Footer } from '~/interfaces/footer'
const route = useRoute()
const lastRouteSegment = ref('');

const updateLastRouteSegment = () => {
  const segments = route.path.split('/'); // Split the path by slashes
  lastRouteSegment.value = segments[segments.length - 1]; // Get the last segment
  console.log('Route changed to:', lastRouteSegment.value);
};

watch(() => route.path, updateLastRouteSegment);

onMounted(updateLastRouteSegment);
const isOpen = ref(false)
const links = [
  {
    label: 'PHONE',
    children: [
      {
        label: 'ALl Phones',
        to: '/collections/all',
      },
      {
        label: 'iPhone 15 Pro Max',
        to: '/collections',
      },
      {
        label: 'Galaxy S24 Ultra',
        to: '/collections',
      },
      {
        label: 'Pixel 8 Pro',
        to: '/collections',
      },
      {
        label: 'OnePlus 9RT',
        to: '/collections',
      }
    ]
  },
  {
    label: 'TABLET',
    icon: 'i-heroicons-square-3-stack-3d',
    children: [
      {
        label: 'ALl Tablets',
        to: '/collections',
      },
      {
        label: 'iPad Pro 12.9',
        to: '/pro/pricing',
      },
      {
        label: 'Surface Pro 10/9',
        to: '/pro/templates',
      },
      {
        label: 'Tab A9+ 11',
        to: '/pro/templates',
      }
    ]
  },
  {
    label: 'LAPTOP',
    icon: 'i-heroicons-square-3-stack-3d',
    children: [
      {
        label: 'ALl Laptops',
        to: '/collections',
      },
      {
        label: 'MacBook Air 15',
        to: '/pro/pricing',
      },
      {
        label: 'Surface Laptop Go 3/2/1',
        to: '/pro/templates',
      }
    ]
  },
  {
    label: 'HEADPHONES',
    children: [
      {
        label: 'ALl Heaphones',
        to: '/collections',
      },
      {
        label: 'AirPods Pro (3rd Gen)',
        to: '/pro/pricing',
      },
      {
        label: 'Galaxy buds',
        to: '/pro/templates',
      }
    ]
  },
  {
    label: 'WATCH',
    children: [
      {
        label: 'ALl Watches',
        icon: 'i-heroicons-rocket-launch',
        to: '/collections',
      },
      {
        label: 'Apple Watch Ultra 2',
        to: '/pro/pricing',
      },
      {
        label: 'Apple Watch',
        to: '/pro/templates',
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
  menu: [
    {
      name: 'SHOP',
      subMenu: [
        {
          name: 'Cases // Protectors',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'iPhone 15 Cases',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Galaxy S23 Cases',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Watch Straps',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Sleeves',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Gear',
          icon: 'i-heroicons-minus-small-20-solid',
        }
      ]
    },
    {
      name: 'EXPLORE',
      subMenu: [
        {
          name: 'About Us',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'UAG Life',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Refer a Friend',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Loyalty Rewards',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Service Discounts',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Field Log',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Ambassadors',
          icon: 'i-heroicons-minus-small-20-solid',
        }
      ]
    },
    {
      name: 'BUSINESS',
      subMenu: [
        {
          name: 'Business Inquiries',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Enterprise by UAG',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Deal Registration',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Built for Healthcare',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Affiliate Program',
          icon: 'i-heroicons-minus-small-20-solid',
        },
      ]
    },
    {
      name: 'ABOUT',
      subMenu: [
        {
          name: 'About Us',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Support',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Warranty Information',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Returns',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Web Accessibility',
          icon: 'i-heroicons-minus-small-20-solid',
        },
        {
          name: 'Intellectual Property',
          icon: 'i-heroicons-minus-small-20-solid',
        },
      ]
    }
  ],
  social: [
    {
      name: 'Log In',
      icon: 'i-heroicons-user'
    },
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Terms and Conditions',
    },
  ],
  logo: ['i-uil-instagram', 'i-uil-twitter', 'i-uil-facebook', 'i-uil-youtube']

})
</script>