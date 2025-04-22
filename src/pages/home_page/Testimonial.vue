<script lang="ts" setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    header: 'Eye Opener',
    text: "I've been investing in traditional real estate for years, but this platform opened up a whole new world of opportunities. Tokenization allows for fractional ownership and increased liquidity. It's a revolution in the real estate industry",
    image: '/images/testimonial/olamide-bello.png',
    occupation: 'CEO TWears',
    name: 'Olamide Belo',
  },
  {
    id: 2,
    header: 'Straightfoward & Great Platform ',
    text: 'Tokenized real estate is a game-changer! I love how I can invest in properties worldwide without the hassle of managing them. The platform is user-friendly, and the returns have been fantastic',
    image: '/images/testimonial/adetayo.png',
    occupation: 'Banker',
    name: 'Adetayo. AA',
  },
  {
    id: 3,
    header: 'Highly Recommended',
    text: "I have always wanted to invest in real estate, but the high entry barriers and lack of liquidity deterred me. That's when I found this tokenized real estate investment website. It's been a game-changer! I can now easily diversify my portfolio with fractional ownership, and the ability to trade tokens provides great liquidity.",
    image: '/images/testimonial/micheal-tims.png',
    occupation: 'Forex Trader',
    name: 'Micheal Tims',
  },
  {
    id: 4,
    header: 'Easy and Secure',
    text: 'As a first-time investor, I was initially skeptical about tokenized real estate. However, this platform exceeded my expectations. The customer support team guided me through the process, and now I feel confident in my investment choices.',
    image: '/images/testimonial/teniola.png',
    occupation: 'Product Designer',
    name: 'Teniola. AG',
  },
])

const currentIndex = ref(0)
let sliderInterval = 0

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const startSlider = () => {
  sliderInterval = setInterval(nextSlide, 3000)
}

const stopSlider = () => {
  if (sliderInterval) {
    clearInterval(sliderInterval)
    sliderInterval = 0
  }
}
</script>

<template>
  <section class="bg-[#EBF1FE] mt-40 py-28">
    <section>
      <h1 class="text-center text-OxfordBlue text-2xl md:text-5xl font-bold mb-10 leading-loose">
        Join Tayo and Many Others <br />
        Who Have Found Success
      </h1>
    </section>

    <!-- slider image -->
    <section class="relative w-full overflow-hidden">
      <div
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        class="flex gap-10 md:gap-20 transition-transform duration-500"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-[#3A76F5] min-w-[95%] hover:bg-[#010813] text-white p-10 rounded-md"
          @mouseleave="startSlider"
          @mouseover="stopSlider"
        >
          <h1
            class="max-w-2xl mx-auto flex items-center gap-2 text-2xl md:text-4xl font-euclid-a-medium mb-5 w-full"
          >
            <!--            <svg-icon :path="path" class="w-12 h-12 text-Sunglow" type="mdi"></svg-icon>-->
            {{ testimonial.header }}
          </h1>

          <p class="max-w-xl mx-auto leading-normal mb-8 font-euclid-a-regular">
            {{ testimonial.text }}
          </p>
          <figure class="max-w-xl mx-auto flex items-center gap-5">
            <img
              :alt="testimonial.name"
              :src="testimonial.image"
              class="w-16 bg-white rounded-full pt-5"
            />
            <figcaption>
              <p class="font-euclid-a-medium">{{ testimonial.name }}</p>
              <span class="text-sm font-euclid-a-regular">{{ testimonial.occupation }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
