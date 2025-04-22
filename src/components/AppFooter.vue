<script lang="ts" setup>
import { Instagram, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-[#010813] text-white py-28 px-5 md:px-0">
    <div class="max-w-7xl mx-auto flex justify-between flex-wrap md:px-5 lg:px-10">
      <div class="w-full lg:w-1/4 px-4 mb-10 lg:mb-0">
        <div class="flex items-center gap-2 mb-4">
          <img alt="Logo" class="w-[45px]" src="/images/assset-token-logo.png" />
          <h1 class="text-2xl font-gold-west">AssetToken</h1>
        </div>
        <p class="text-sm">
          At AssetToken our primary aim is to help land owners and property managers to connect to
          the right audience of investors while also allowing interested investors to share their
          purchasing power and invest in their so desired properties without the fear of being
          unable to afford these properties. Through the use of blockchain technology.
        </p>
        <div class="flex space-x-2 mt-4 text-2xl mb-10">
          <Instagram />
          <Linkedin />
        </div>
        <p class="text-sm mt-4">&copy; 2025 AssetToken.com. All Right Reserved</p>
      </div>

      <div class="mb-10 md:mb-0">
        <h3 class="text-xl font-bold mb-4">Features</h3>
        <ul>
          <li><a class="text-sm" href="">About</a></li>
          <li><a class="text-sm" href="">Investment</a></li>
          <li><a class="text-sm" href="">Dashboard</a></li>
          <li><a class="text-sm" href="">Resources</a></li>
          <li><a class="text-sm" href="">How it Works</a></li>
          <li><a class="text-sm" href="">Why AssetToken</a></li>
          <li><a class="text-sm" href="">Property Listing</a></li>
          <li><a class="text-sm" href="">Property Mgt Service</a></li>
        </ul>
      </div>

      <div class="">
        <h3 class="text-xl font-bold mb-4">Other Informations</h3>
        <ul>
          <li><a class="text-sm" href="">Privacy Policy</a></li>
          <li><a class="text-sm" href="">FAQs</a></li>
          <li><a class="text-sm" href="">Term Of Service</a></li>
          <li><a class="text-sm" href="">Disclaimer</a></li>
        </ul>
      </div>

      <div class="">
        <h3 class="text-xl font-bold mb-4">Contact Us</h3>
        <div class="space-y-2 mb-10 md:mb-32">
          <a class="text-sm block" href="tel:+2349057171458">+2349057171458</a>
          <a class="text-sm block" href="tel:+2349093899228">+2349093899228</a>
        </div>
        <p class="bg-white text-black py-2 px-4 rounded mt-4">Hello How Can We Help You Today?</p>
        <div class="flex items-center mt-5 p-2 rounded bg-white">
          <input
            class="focus:outline-none outline-none w-full bg-none"
            placeholder="Write a message"
            type="text"
          />
          <button class="px-2 py-1 bg-black/10 rounded">
            <i class="pi pi-send text-RichBlack-primary"></i>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
