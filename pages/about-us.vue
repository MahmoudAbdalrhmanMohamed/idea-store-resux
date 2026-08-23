<template>
  <section>
    <div class="h-[300px] md:h-[448px] relative w-full bg-two3">
      <div
        class="test w-full h-full object-cover absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
      ></div>
      <div class="containerClass relative z-10 w-full h-full">
        <div
          class="flex gap-4 flex-col items-start justify-end md:pb-16 pb-8 w-full h-full"
        >
          <p class="font-[400] text-white text-xl md:text-2xl tracking-[-1%]">
            {{ $t("pp3") }}
          </p>
          <h1 class="font-[500] text-white text-3xl md:text-5xl tracking-[-1%]">
            {{ $t("footer.aboutUs") }}
          </h1>
        </div>
      </div>
    </div>

    <HomeSquares />

    <GarySetion class="mt-8">
      <div class="relative">
        <img
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          :src="one"
          loading="lazy"
          alt="img"
          class="rounded-[12px] w-full object-cover md:h-[350px] lg:h-[514px]"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          :src="two"
          loading="lazy"
          alt="img"
          class="rounded-r-[12px] absolute border-l-[10px] border-l-white -bottom-0 -right-0 border-t-[10px] border-t-white w-[200px] z-10 md:w-[302px] aspect-square"
        />
      </div>
      <h2
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="100"
        class="text-two9 font-medium text-xl pb-2 md:pb-4 pt-6 md:pt-8 md:text-3xl"
      >
        {{ $t("Healthcare Innovation Leader") }}
      </h2>
      <div class="space-y-4">
        <p
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="text-two9 font-[300] text-lg md:text-2xl"
        >
          {{ $t("desthre") }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="text-two9 font-[300] text-lg md:text-2xl"
        >
          {{ $t("desthre2") }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="text-two9 font-[300] text-lg md:text-2xl"
        >
          {{ $t("desthre3") }}
        </p>
      </div>
    </GarySetion>
    <WhiteSetion>
      <div
        class="flex justify-center lg:flex-row flex-col lg:justify-between items-center gap-8"
      >
        <div class="max-w-[800px] order-2 lg:order-1">
          <h2
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            class="text-zero3 capitalize font-semibold text-xl md:text-3xl"
          >
            Dr. Maher Saleh
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            class="text-two9 font-medium capitalize mt-2 mb-4 text-lg md:text-xl"
          >
            {{ $t("Founder & CEO") }}
          </p>

          <div class="space-y-2">
            <p
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="100"
              class="text-two9 font-[300] text-base pt-4 md:text-xl"
            >
              {{ $t("desthre4") }}
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="100"
              class="text-two9 font-[300] text-base pt-4 md:text-xl"
            >
              {{ $t("desthre5") }}
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="100"
              class="text-two9 font-[300] text-base pt-4 md:text-xl"
            >
              {{ $t("desthre6") }}
            </p>
          </div>
        </div>
        <img
          :src="seo"
          loading="lazy"
          alt="CEO Image"
          class="object-cover order-1 lg:order-2 rounded-lg mx-auto h-[400px] md:h-[600px]"
        />
      </div>
    </WhiteSetion>
    <GarySetion>
      <h2
        data-aos="fade-left"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="100"
        class="text-center font-semibold text-2xl text-zero3 capitalize"
      >
        {{ $t("Our Team") }}
      </h2>
      <p
        data-aos="fade-down"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="100"
        class="text-center capitalize text-two9 text-xl font-semibold pt-4 pb-8 md:text-3xl"
      >
        {{ $t("Meet the team behind ISP") }}
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="100"
        class="text-center capitalize text-six6 max-w-[768px] mx-auto text-base font-[400] pb-8 md:text-lg"
      >
        {{ $t("desdes54") }}
      </p>

      <div
        class="flex flex-wrap lg:pt-24 flex-col lg:flex-row justify-center gap-4 md:gap-6"
      >
        <div
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="space-y-2 order-1 lg:order-2 relative lg:-top-24 text-center lg:basis-[calc(100%/3-12px)] transition-all duration-300 hover:shadow-lg rounded-lg p-4"
        >
          <img
            :src="two2"
            loading="lazy"
            alt="img"
            class="rounded-full object-cover w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px]"
          />
          <div class="space-y-1 text-center">
            <p class="text-one0 font-semibold text-xl md:text-2xl">
              Dr. Kamel Deraz
            </p>
            <p class="text-three3 font-medium text-lg md:text-xl">
              {{ $t("Director General") }}
            </p>
          </div>
          <div class="flex items-center py-4 gap-2 justify-center">
            <a
              href="https://www.linkedin.com/in/kamel-deraz-9335b928/"
              target="_blank"
              aria-label="link"
            >
              <Icon
                name="lineicons:linkedin"
                class="rounded text-white bg-nine8 hover:bg-zero3 transition-all duration-300"
                size="2rem"
              />
            </a>
            <a
              href="mailto:Kderaz@idealstores.com.sa"
              target="_blank"
              aria-label="link"
            >
              <Icon
                name="line-md:email-filled"
                class="rounded text-white bg-nine8 hover:bg-zero3 transition-all duration-300"
                size="2rem"
              />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="space-y-2 text-center order-2 lg:order-1 lg:basis-[calc(100%/3-1.5rem)] transition-all duration-300 hover:shadow-lg rounded-lg p-4"
        >
          <img
            :src="john"
            loading="lazy"
            alt="img"
            class="rounded-full object-cover w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px]"
          />
          <div class="space-y-1 text-center">
            <p class="text-one0 font-semibold text-xl md:text-2xl">
              John W Harrington
            </p>
            <p class="text-three3 font-medium text-lg md:text-xl">
              {{ $t("Development Director") }}
            </p>
          </div>
          <div class="flex items-center py-4 gap-2 justify-center">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="link"
            >
              <Icon
                name="lineicons:linkedin"
                class="rounded block text-white bg-nine8 hover:bg-zero3 transition-all duration-300"
                size="2rem"
              />
            </a>
            <a
              href="mailto:john@osichicago.com"
              target="_blank"
              aria-label="link"
            >
              <Icon
                name="line-md:email-filled"
                class="rounded block text-white bg-nine8 hover:bg-zero3 transition-all duration-300"
                size="2rem"
              />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="space-y-2 text-center order-3 lg:order-3 lg:basis-[calc(100%/3-1.5rem)] transition-all duration-300 hover:shadow-lg rounded-lg p-4"
        >
          <img
            :src="three3"
            loading="lazy"
            alt="img"
            class="rounded-full object-cover w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px]"
          />
          <div class="space-y-1 text-center">
            <p class="text-one0 font-semibold text-xl md:text-2xl">
              Dr. Ahmed Kamel
            </p>
            <p class="text-three3 font-medium text-lg md:text-xl">
              {{ $t("Dental Line Manager") }}
            </p>
          </div>
          <div class="flex items-center py-4 gap-2 justify-center">
            <a
              href="https://www.linkedin.com/in/ahmed-kamel-33917b233/"
              target="_blank"
              aria-label="link"
            >
              <Icon
                name="lineicons:linkedin"
                class="rounded text-white bg-nine8 hover:bg-zero3 transition-all duration-300"
                size="2rem"
              />
            </a>
            <a
              href="mailto:akamil@idealstores.com.sa"
              target="_blank"
              aria-label="link"
            >
              <Icon
                name="line-md:email-filled"
                class="rounded text-white bg-nine8 hover:bg-zero3 transition-all duration-300"
                size="2rem"
              />
            </a>
          </div>
        </div>
      </div>
    </GarySetion>
  </section>
</template>

<script setup>
const one = "/assets/1.webp";
const two = "/assets/2.webp";
const two2 = "/assets/about/2.webp";
const three3 = "/assets/about/3.webp";
const seo = "/assets/about/seo.webp";
const john = "/assets/about/john.webp";

const { locale, t } = useI18n();

useSeoMeta({
  title: t("seoMega.about.title"),
  description: t("seoMega.about.description"),
  ogTitle: t("seoMega.about.title"),
  ogDescription: t("seoMega.about.description"),
  ogUrl: `https://www.idealstores.com.sa/${locale.value}/about-us`,
  ogImage: "https://www.idealstores.com.sa/logo.webp",
  ogImageAlt: t("altText.logo"),
  ogSiteName: t("seoMega.about.title"),
  ogType: "website",
  ogImageType: "image/webp",
  ogImageUrl: "https://www.idealstores.com.sa/logo.webp",
  ogLocale: locale.value,
  ogLocaleAlternate: locale.value === "en" ? "ar" : "en",
  twitterTitle: t("seoMega.about.title"),
  twitterDescription: t("seoMega.about.description"),
  twitterImage: "https://www.idealstores.com.sa/logo.webp",
  twitterCard: "summary",
  fbAppId: "123456789",
});
</script>

<style scoped>
.test {
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
}
</style>
