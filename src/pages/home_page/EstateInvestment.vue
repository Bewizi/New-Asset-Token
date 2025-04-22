<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import GenButton from '@/components/GenButton.vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <AppContainer class="mt-40">
    <section class="flex justify-between flex-col lg:flex-row mt-10">
      <h1 class="font-euclid-a-medium text-4xl mb-5 lg:mb-0 sm:text-4xl lg:text-6xl text-[#082552]">
        Start Your Token Estate Journey Today!
      </h1>
      <div>
        <p class="text-[#010813CC] mb-8 text-xl font-euclid-a-regular lg:w-[400px]">
          Explore our series of catalogue of real estate investment opportunities and go in search
          of your real estate dream with us
        </p>
        <GenButton class="px-8 text-lg">View All</GenButton>
      </div>
    </section>

    <!--    -->
    <section class="relative mt-20">
      <figure class="mb-5 lg:mb-0">
        <img alt="" class="" src="/public/images/general/Modern-Townhouse-Complex.png" />
      </figure>
      <!--  residential details  -->
      <aside class="lg:absolute lg:top-10 lg:-right-10 lg:w-5/12">
        <Card class="border-2 border-[#6C82A3] py-8 px-6 bg-white rounded-none">
          <h4 class="text-2xl text-[#082552] font-euclid-a-medium mb-5">
            Residential Luxurious Duplex House
          </h4>
          <p class="text-[#010813CC] font-euclid-a-regular text-lg">
            A perfect blend of modern luxury and cozy comfort. This two-unit property presents an
            exceptional opportunity for investors or extended families seeking a harmonious living
            arrangement
          </p>

          <div class="mt-8">
            <p class="text-[#6C82A3] font-euclid-a-regular mb-5">
              Plot 32 Lekki epe expressway Lagos Nigeria
            </p>
            <p class="text-[#6C82A3] font-euclid-a-regular mb-5">
              Construction Area <span class="text-[#082552]">(112m <sup>2</sup>)</span>
            </p>
            <p class="text-[#6C82A3] font-euclid-a-regular">
              Living Area <span class="text-[#082552]">1600 square feet (148m <sup>2</sup>)</span>
            </p>
          </div>

          <!--      features-->
          <div class="mt-8">
            <h4 class="text-[#082552] font-euclid-a-medium mb-5 text-2xl">Key Features</h4>
            <ul
              class="list-disc list-inside text-[#6C82A3] font-euclid-a-regular marker:text-[#FFCB35] leading-loose"
            >
              <li>Ideal for a family of 5 or 6</li>
              <li>Top-notch construction quality, modern design, and upscale finishes</li>
              <li>
                Easy access to major amenities such as shopping malls, restaurants, parks, schools,
                and public transportation.
              </li>
              <li>
                24/7 security surveillance, controlled access points, and a professional property
                management team.
              </li>
              <li>Guaranteed durability for one years</li>
            </ul>
          </div>
          <!--      features-->

          <!--      button-->
          <div class="mt-14">
            <Button
              class="hover:bg-transparent bg-transparent text-[#010813A6] font-euclid-a-regular text-lg"
              >Learn More
            </Button>
          </div>
          <!--      button-->
        </Card>
      </aside>
    </section>
    <!--    -->

    <!--  residential details  -->
  </AppContainer>
</template>

<style scoped></style>
