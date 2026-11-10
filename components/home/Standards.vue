<template>
  <WhiteSetion>
    <h2
      v-anime="'fade-up'"
      class="text-center font-semibold text-2xl text-[#0f766e] font-semibold capitalize"
    >
      {{ $t("Our Standards") }}
    </h2>
    <p
      v-anime="'fade-up'"
      class="text-center capitalize text-two9 text-xl font-semibold pt-4 pb-8 md:text-3xl"
    >
      {{ $t("Our Commitment to Excellence") }}
    </p>
    <p
      v-anime="'fade-up'"
      class="text-center capitalize text-six6 max-w-[768px] mx-auto text-base font-[400] pb-8 md:text-lg"
    >
      {{ $t("desdes") }}
    </p>

    <div class="flex md:flex-row flex-col flex-wrap justify-center gap-8">
      <div
        v-anime="'fade-up'"
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
        <h3 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Regulatory Compliance") }}
        </h3>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes5") }}
        </h3>
      </div>

      <div
        v-anime="'fade-up'"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon size="2rem" class="text-three3" name="iconoir:flash" />
        </div>
        <h3 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Operational Excellence") }}
        </h3>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes6") }}
        </h3>
      </div>
      <div
        v-anime="'fade-up'"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon size="2rem" class="text-three3" name="ic:sharp-tag-faces" />
        </div>
        <h3 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Customer-Centric Processes") }}
        </h3>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes7") }}
        </h3>
      </div>
      <div
        v-anime="'fade-up'"
        class="md:basis-[calc(100%/3-2rem)]"
      >
        <div
          class="grid w-fit h-fit mx-auto place-items-center place-content-center p-2 border-8 border-f0f bg-e6 rounded-full"
        >
          <Icon size="2rem" class="text-three3" name="gg:mouse" />
        </div>
        <h3 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Technological Integrations") }}
        </h3>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes8") }}
        </h3>
      </div>
      <div
        v-anime="'fade-up'"
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
        <h3 class="text-one0 text-lg font-medium text-center capitalize py-4">
          {{ $t("Sustainability Commitment") }}
        </h3>
        <h3 class="text-six6 text-center font-[400] text-base -tracking-[-2%]">
          {{ $t("offerdes9") }}
        </h3>
      </div>
    </div>
  </WhiteSetion>
</template>
