<template>
  <WhiteSetion>
    <h2
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center font-semibold text-2xl text-zero3 capitalize"
    >
      {{ $t("Our Standards") }}
    </h2>
    <p
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center capitalize text-two9 text-xl font-semibold pt-4 pb-8 md:text-3xl"
    >
      {{ $t("Our Commitment to Excellence") }}
    </p>
    <p
      data-aos="zoom-out"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center capitalize text-six6 max-w-[768px] mx-auto text-base font-[400] pb-8 md:text-lg"
    >
      {{ $t("desdes") }}
    </p>

    <div class="flex md:flex-row flex-col flex-wrap justify-center gap-8">
      <div
        data-aos="fade-left"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon
            size="2rem"
            class="text-three3"
            name="solar:info-circle-outline"
          />
        </div>
        <h2 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Regulatory Compliance") }}
        </h2>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes5") }}
        </h3>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon size="2rem" class="text-three3" name="iconoir:flash" />
        </div>
        <h2 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Operational Excellence") }}
        </h2>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes6") }}
        </h3>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon size="2rem" class="text-three3" name="ic:sharp-tag-faces" />
        </div>
        <h2 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Customer-Centric Processes") }}
        </h2>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes7") }}
        </h3>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon size="2rem" class="text-three3" name="gg:mouse" />
        </div>
        <h2 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Technological Integrations") }}
        </h2>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes8") }}
        </h3>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon
            size="2rem"
            class="text-three3"
            name="solar:leaf-outline"
          />
        </div>
        <h2 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Sustainability Commitment") }}
        </h2>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes9") }}
        </h3>
      </div>
    </div>
  </WhiteSetion>
</template>
