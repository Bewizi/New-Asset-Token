<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import AppLink from '@/components/AppLink.vue'

const selectedCase = ref('Registration and KYC')

const updateCase = (casename: string) => {
  selectedCase.value = casename
}
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 min-h-[35rem]">
    <aside class="text-center">
      <ul class="cursor-pointer pt-5 space-y-8 text-OxfordBlue text-xl mb-10 md:mb-0">
        <li @click="updateCase('Registration and KYC')">Registration and KYC</li>
        <hr />
        <li @click="updateCase('Explore Investment')">Explore Investment</li>
        <hr />
        <li @click="updateCase('Dig into Details')">Dig into Details</li>
        <hr />
        <li @click="updateCase('Purchase Token')">Purchase Token</li>
        <hr />
        <li @click="updateCase('Review Legal Information')">Review Legal Information</li>
        <hr />
        <li @click="updateCase('Manage Your Portfolio')">Manage Your Portfolio</li>
      </ul>
    </aside>

    <!--  -->
    <section class="bg-[#010813]">
      <aside class="text-white p-20 grid items-center justify-center">
        <h1 class="text-4xl font-semibold mb-5">{{ selectedCase }}</h1>

        <!-- Registration and KYC -->
        <p
          v-if="selectedCase === 'Registration and KYC'"
          class="leading-normal mb-20 text-white/90"
        >
          To get started, Click on the "Sign Up" button to create your account. Provide essential
          information, including your name, email address, and a secure password. Rest assured that
          your data is kept confidential with top-notch security measures. Additionally, you will
          undergo a Know Your Customer (KYC) process to ensure compliance with regulatory
          requirements. KYC helps verify the identity of investors and prevents potential fraudulent
          activities.
        </p>

        <!-- Explore Investment -->
        <p
          v-else-if="selectedCase === 'Explore Investment'"
          class="leading-normal mb-20 text-white/90"
        >
          Browse through a curated selection of tokenized real estate properties. Each property
          listing includes relevant details such as location, property type, investment cost,
          expected returns, and so on Our platform offers a diverse range of properties, from
          residential to commercial, ensuring there's something that aligns with your investment
          goals.
        </p>

        <!-- Dig into Details -->
        <p
          v-else-if="selectedCase === 'Dig into Details'"
          class="leading-normal mb-20 text-white/90"
        >
          Click on properties of interest to access comprehensive details. Learn about the
          property's location, market value, potential returns, and more. Our detailed information
          empowers you to make informed investment decisions. Delve into our educational resources
          to understand how tokenization works. Grasp the concept of turning real estate assets into
          digital tokens, making fractional ownership and trading possible
        </p>

        <!-- Purchase Token -->
        <p v-else-if="selectedCase === 'Purchase Token'" class="leading-normal mb-20 text-white/90">
          Once you've found the perfect property, it's time to invest. Choose the number of tokens
          you wish to purchase based on your budget and the property's tokenization structure. With
          a few clicks, confirm your investment. Our secure payment gateway accepts various payment
          methods including cryptocurrencies and traditional fiat currencies, providing you with
          convenience and peace of mind.
        </p>

        <!-- Review Legal Information -->
        <p
          v-else-if="selectedCase === 'Review Legal Information'"
          class="leading-normal mb-20 text-white/90"
        >
          Before finalizing your investment, review the legal documentation associated with the
          property. This step ensures transparency and clarifies your rights and responsibilities as
          a token holder.
        </p>

        <!-- Manage Your Portfolio -->
        <p
          v-else-if="selectedCase === 'Manage Your Portfolio'"
          class="leading-normal mb-20 text-white/90"
        >
          Access your personalized dashboard to monitor your investment portfolio. Track property
          performance, token value, and potential returns, all in one place.
        </p>

        <AppLink to="">
          <Button class="border border-white bg-transparent hover:bg-transparent py-1 px-12"
            >Sign Up Now
          </Button>
        </AppLink>
      </aside>
    </section>
  </section>
</template>

<style scoped></style>
