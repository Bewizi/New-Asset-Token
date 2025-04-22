<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue'
import AppContainer from '@/components/AppContainer.vue'
import { Button } from '@/components/ui/button'
import { AlignJustify, X } from 'lucide-vue-next'
import { reactive, ref } from 'vue'

const navLinks = reactive([
  { id: 1, name: 'About', path: '/' },
  { id: 2, name: 'Investment', path: '/investment' },
  { id: 3, name: 'Property', path: '/property' },
  { id: 4, name: 'Dashboard', path: '/dashboard' },
  { id: 5, name: 'Resources', path: '/resources' },
])

const isMobileNavOpen = ref<boolean>(false)
const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}
</script>

<template>
  <AppContainer className="py-8 px-5 ">
    <header class="relative">
      <section class="flex items-center justify-between">
        <!--  logo-->
        <div class="flex items-center gap-4">
          <img alt="Logo" class="w-[45px]" src="/images/assset-token-logo.png" />
          <h1 class="text-2xl lg:text-[50px] text-[#082552] font-gold-west">AssetToken</h1>
        </div>
        <!--  logo-->

        <!--  DESKTOP NAV-->
        <!--  Navlinks-->
        <nav class="items-center justify-between gap-8 hidden lg:flex">
          <ul class="flex items-center space-x-8">
            <li v-for="link in navLinks" :key="link.id" class="font-euclid-a-medium">
              <AppLink :to="link.path" class="text-[#010813CC] text-base md:text-lg"
                >{{ link.name }}
              </AppLink>
            </li>
          </ul>

          <!--  Navlinks-->

          <!--  authLayout.vue links-->
          <div class="flex items-center gap-2">
            <AppLink to="#">
              <Button
                class="font-euclid-a-medium hover:text-white hover:bg-[#3A76F5CC]/85 bg-transparent text-[#3A76F5] text-lg"
              >
                Login
              </Button>
            </AppLink>
            <AppLink to="#">
              <Button
                class="font-euclid-a-medium hover:text-white hover:bg-[#3A76F5CC]/85 bg-transparent text-[#3A76F5] text-lg"
              >
                Sign Up For Free
              </Button>
            </AppLink>
          </div>
        </nav>
        <!--  DESKTOP NAV-->
        <div class="lg:hidden">
          <button v-if="!isMobileNavOpen" @click="toggleMobileNav">
            <AlignJustify class="w-6 h-6" />
          </button>
          <button v-else @click="toggleMobileNav">
            <X class="w-6 h-6" />
          </button>
        </div>
      </section>

      <!--  MOBILE NAV-->
      <nav
        v-if="isMobileNavOpen"
        class="flex flex-col items-center justify-between lg:hidden fixed top-[100px] left-0 w-full bg-white shadow-lg py-4 z-[9999]"
      >
        <ul class="flex flex-col items-center space-y-8">
          <li v-for="link in navLinks" :key="link.id" class="font-euclid-a-medium">
            <AppLink :to="link.path" class="text-[#010813CC] text-base md:text-lg"
              >{{ link.name }}
            </AppLink>
          </li>
        </ul>

        <div class="flex flex-col items-center gap-2">
          <Button
            class="font-euclid-a-medium hover:text-white hover:bg-[#3A76F5CC]/85 bg-transparent text-[#3A76F5] text-lg"
          >
            Login
          </Button>
          <Button
            class="font-euclid-a-medium hover:text-white hover:bg-[#3A76F5CC]/85 bg-transparent text-[#3A76F5] text-lg"
          >
            Sign Up For Free
          </Button>
        </div>
      </nav>
    </header>
  </AppContainer>
</template>

<style scoped></style>
