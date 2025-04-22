<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import GenButton from '@/components/GenButton.vue'
</script>

<template>
  <AppContainer class="mt-32">
    <div class="flex flex-col items-center justify-center">
      <h1
        class="font-euclid-a-medium text-[#082552] text-xl md:text-4xl lg:text-6xl text-center leading-loose"
      >
        Tokenize
        <span>
          <img
            alt="A hand placing a gold coin into a digital house-shaped object"
            class="w-[50px] lg:w-[100px] inline bg-[#D7ECFC] rounded-full"
            src="/images/general/digital_house_investment.png"
          />
        </span>
        Your Future
        <br />
        <span>
          <img
            alt="Modern three-story duplex house with a blue roof and white walls"
            class="w-[50px] lg:w-[100px] inline bg-[#D7ECFC] rounded-full"
            src="/public/images/general/duplex_house.png"
          />
        </span>
        Invest Smarter
      </h1>
      <p
        class="text-center font-euclid-a-regular text-[#010813CC] whitespace-pre-wrap lg:whitespace-break-spaces text-base md:text-lg lg:text-xl mt-8"
      >
        Take advantage of fractional ownership and join the growing <br />
        community of digital real estate investors.
      </p>
      <div class="mt-8">
        <GenButton class="font-euclid-a-medium">Start Investing</GenButton>
      </div>
    </div>

    <div class="mt-5 flex items-center justify-center">
      <img
        alt="A hand holding a smartphone with a digital house-shaped object on the screen"
        class="w-full lg:w-full"
        src="/images/general/house_image.png"
      />
    </div>
  </AppContainer>
</template>

<style scoped></style>
