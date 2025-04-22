<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import { ref, type Ref } from 'vue'
import type { ListItems } from '@/types'

const lists: Ref<ListItems[]> = ref([
  {
    id: 1,
    order: '01',
    title: 'Diversification and Portfolio Management',
    description:
      'Diversify your real estate portfolio across different regions and markets, all while enjoying the familiarity of our user-friendly platform. From commercial hubs to serene residential spaces, explore properties that align with your investment goals.',
  },
  {
    id: 2,
    order: '02',
    title: 'Fractional Ownership',
    description:
      'Embrace a world where you can invest in high-value properties without breaking the bank. Our tokenization model divides properties into easily manageable fractions, allowing you to diversify your portfolio and maximize returns like never before.',
  },
  {
    id: 3,
    order: '03',
    title: 'Accessibility and Liquidity',
    description:
      'Unlike traditional real estate investments, our tokenized approach introduces liquidity to the market. Investors can buy and sell tokens  on our secure platform representing their ownership in real estate assets on our platform, providing an opportunity to quickly access funds when needed.',
  },
  {
    id: 4,
    order: '04',
    title: 'Transparency and Security',
    description:
      "Your peace of mind is our top priority. We prioritize transparency and security in all our operations. Through blockchain technology and smart contracts, we ensure that every transaction and ownership transfer is recorded on an immutable ledger, creating a transparent and tamper-proof system. Additionally, we implement robust security measures to protect our investors' personal and financial information against fraud.",
  },
  {
    id: 5,
    order: '05',
    title: 'Education and Support',
    description:
      'We believe in empowering our investors with knowledge and support. Our platform provides educational resources, market insights, and investment guides to help investors make informed decisions. Furthermore, our dedicated customer support team is available to address any questions or concerns you may have throughout your investment journey.',
  },
  {
    id: 6,
    order: '06',
    title: 'Professional Management',
    description:
      'We have a team of experienced real estate professionals and investment specialists who meticulously research and select the best investment opportunities for our platform. Our team actively manages the properties and continuously monitors market trends to optimize returns for our investors. You can rely on our expertise and industry knowledge to make informed investment decisions.',
  },
])
</script>

<template>
  <section class="mt-32 bg-[#010813] text-white py-10">
    <AppContainer>
      <section class="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <h6 class="text-lg lg:text-2xl mb-8">What Are Our Differentiators</h6>
          <p class="font-euclid-a-medium text-2xl lg:text-6xl">
            Take a Big Step Into The Future Of Investment
          </p>
        </div>

        <figure>
          <img
            alt="Person wearing VR headset, interacting with virtual elements."
            class="lg:w-[1000px]"
            src="/public/images/general/Immersed in Virtual Reality.png"
          />
        </figure>
      </section>

      <!--      lists-->
      <section class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="list in lists" :key="list.id" class="flex flex-col items-center">
          <strong class="font-euclid-a-medium text-2xl lg:text-4xl mb-3.5 self-start">
            {{ list.order }}
          </strong>
          <h6 class="font-euclid-a-medium text-lg lg:text-2xl mb-3.5 self-start">
            {{ list.title }}
          </h6>
          <p class="font-euclid-a-regular lg:text-lg leading-relaxed">
            {{ list.description }}
          </p>
        </div>
      </section>
      <!--      lists-->
    </AppContainer>
  </section>
</template>

<style scoped></style>
