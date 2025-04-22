<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import { Card } from '@/components/ui/card'
</script>

<template>
  <AppContainer class="mt-32 relative">
    <section
      class="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-10"
    >
      <figure>
        <img
          alt="Blue glass skyscraper with green lawn."
          src="/images/general/Modern Bank Building.png"
        />
      </figure>
      <!--text-->
      <section>
        <div
          class="lg:absolute lg:-top-[20px] w-full flex justify-center items-center mx-auto lg:left-0"
        >
          <h1
            class="text-2xl whitespace-nowrap md:text-4xl md:whitespace-nowrap lg:text-6xl font-euclid-a-medium text-[#082552] text-center leading-loose"
          >
            We Help You Achieve Your <br />
            Real Estate
            <br />
            Dreams
          </h1>
        </div>
        <Card class="w-full lg:w-[550px] bg-[#3A76F5] mt-10 lg:mt-60 px-6 py-10 text-white">
          <div class="mb-12">
            <p class="font-euclid-a-regular text-lg lg:text-xl text-center leading-relaxed">
              AssetToken combines the power of blockchain technology and the real estate market,
              offering you a seamless and transparent investment experience. we believe that
              everyone should have the opportunity to participate in real estate investments,
              regardless of their financial background or location. That's why we have created a
              platform that allows fractional ownership of premium properties, unlocking access to a
              wide range of investment opportunities.
            </p>
          </div>
          <section class="flex items-center justify-between gap-10">
            <div>
              <strong class="font-euclid-a-medium text-2xl lg:text-4xl mb-3.5 inline-block"
                >250+</strong
              >
              <p class="font-euclid-a-regular lg:text-lg">Investors</p>
            </div>

            <div>
              <strong class="font-euclid-a-medium text-2xl lg:text-4xl mb-3.5 inline-block"
                >25+</strong
              >
              <p class="font-euclid-a-regular lg:text-lg">
                Blockchain <br />
                Expert
              </p>
            </div>

            <div>
              <strong class="font-euclid-a-medium text-2xl lg:text-4xl mb-3.5 inline-block"
                >5+</strong
              >
              <p class="font-euclid-a-regular lg:text-lg">
                Years of <br />
                Experience
              </p>
            </div>
          </section>
        </Card>
      </section>
      <!--text-->
      <figure>
        <img
          alt="Plot of land with house icon, surrounded by greenery."
          src="/public/images/general/Aerial View of Land for Sale.png"
        />
      </figure>
    </section>
  </AppContainer>
</template>

<style scoped></style>
