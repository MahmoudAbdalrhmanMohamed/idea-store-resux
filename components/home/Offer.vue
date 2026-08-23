<template>
  <GarySetion>
    <h2
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="100"
      class="text-center alx font-[400] text-2xl text-zero3 capitalize"
    >
      {{ $t("What We Offer") }}
    </h2>
    <p
      data-aos="fade-left"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="100"
      class="text-center capitalize text-two9 text-xl font-medium pt-4 pb-8 md:text-3xl"
    >
      {{ $t("We are committed to revolutionizing healthcare in MENA") }}
    </p>

    <div class="flex md:flex-row flex-col flex-wrap justify-center gap-8">
      <div
        data-aos="fade-down"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="100"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon
            size="1.5rem"
            class="text-three3"
            name="ph:check-circle-thin"
          />
        </div>
        <p
          class="text-one0 alx text-center font-semibold text-base -tracking-[-2%]"
        >
          {{ $t("offerdes1") }}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon
            size="1.5rem"
            class="text-three3"
            name="ph:check-circle-thin"
          />
        </div>
        <p
          class="text-one0 alx text-center font-semibold text-base -tracking-[-2%]"
        >
          {{ $t("offerdes2") }}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon
            size="1.5rem"
            class="text-three3"
            name="ph:check-circle-thin"
          />
        </div>
        <p
          class="text-one0 alx text-center font-semibold text-base -tracking-[-2%]"
        >
          {{ $t("offerdes3") }}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="400"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon
            size="1.5rem"
            class="text-three3"
            name="ph:check-circle-thin"
          />
        </div>
        <p
          class="text-one0 alx text-center font-semibold text-base -tracking-[-2%]"
        >
          {{ $t("offerdes4") }}
        </p>
      </div>
    </div>
    <HomeImage />
    <HomePartners />
  </GarySetion>
</template>
<style>
.alx {
  font-family: Alexandria;
}
</style>
