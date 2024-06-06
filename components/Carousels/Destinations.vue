<template>
  <div>
    <div v-if="isMobile" class="image-list">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-item"
        @mouseover="updateHoverDescription(image)"
        @mouseleave="clearHoverDescription">
        <NuxtLink :href="image.link">
          <img :src="image.src" :alt="image.alt" class="vertical-image" />
        </NuxtLink>
        <div class="image-info">
          <p class="image-title">{{ image.alt }}</p>
          <p class="image-subtitle">{{ image.subDescription }}</p>
        </div>
      </div>
    </div>
    <swiper
      v-else
      :modules="[Navigation, Mousewheel, FreeMode]"
      :slides-per-view="3.2"
      :space-between="10"
      :navigation="true"
      :mousewheel="{
        forceToAxis: false,
        sensitivity: 0.1,
        releaseOnEdges: true,
      }"
      :free-mode="true"
      :free-mode-momentum="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="swiper-slide-custom"
        @mouseover="updateHoverDescription(image)"
        @mouseleave="clearHoverDescription">
        <NuxtLink :href="image.link">
          <img :src="image.src" :alt="image.alt" class="slide-image" />
        </NuxtLink>
      </swiper-slide>
    </swiper>
    <!--<div class="custom-scrollbar">
      <div
        class="custom-scrollbar-progress"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>-->
    <div v-if="hoverDescription" class="image-description">
      <p>{{ hoverDescription }}</p>
      <p>{{ hoverSubDescription }}</p>
    </div>
    <div v-else-if="!isMobile" class="image-description">
      <p>Scroll to Explore</p>
      <p>4 Destinations</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const hoverDescription = ref("");
const hoverSubDescription = ref("");
const progress = ref(0);
const isMobile = ref(window.innerWidth < 768);

const onSwiper = (swiper) => {
  swiper.on("progress", (progressValue) => {
    progress.value = progressValue * 100;
  });
};

const onSlideChange = (swiper) => {
  progress.value = swiper.progress * 100;
};

const updateHoverDescription = (image) => {
  hoverDescription.value = image.alt;
  hoverSubDescription.value = image.subDescription;
};

const clearHoverDescription = () => {
  hoverDescription.value = "";
  hoverSubDescription.value = "";
};

const images = [
  {
    src: "/images/pakistan-cover.png",
    alt: "Pakistan",
    subDescription: "7 Nights | £950",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/montenegro-cover.png",
    alt: "Montenegro",
    subDescription: "5 Nights | £650",
    link: "/destinations/montenegro",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Pakistan",
    subDescription: "7 Nights | £950",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Pakistan",
    subDescription: "7 Nights | £950",
    link: "/destinations/pakistan",
  },
];
</script>

<style>
.swiper-slide-custom {
  display: flex;
  justify-content: center;
  margin-top: auto;
  align-items: flex-end;
}

.slide-image {
  width: 30vw;
  height: auto;
  max-width: 30vw;
  max-height: 30vw;
  object-fit: cover;
}

.swiper-scrollbar-drag {
  background-color: var(--color-white);
}

.swiper-slide a::after,
.image-item a::after {
  display: none;
}

.image-description {
  margin-top: 10px;
  font-size: 1.2em;
}

.image-description p:first-child {
  font-weight: bold;
  margin-bottom: 0;
}

.custom-scrollbar {
  position: relative;
  width: 20%;
  height: 1px;
  background-color: grey;
}

.custom-scrollbar-progress {
  height: 1px;
  background-color: var(--color-black);
  transition: width 0.1s ease;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 5%;
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1000;
  cursor: pointer;
  background-position: center; 
  background-repeat: no-repeat;
  background-size: contain;
}

.swiper-button-next {
  right: 0;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMmYzZjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0Ij48cGF0aCBkPSJtOSAxOCA2LTYtNi02Ii8+PC9zdmc+");
}

.swiper-button-prev {
  left: 0;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMmYzZjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWxlZnQiPjxwYXRoIGQ9Im0xNSAxOC02LTYgNi02Ii8+PC9zdmc+");
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

@media (max-width: 767px) {
  .image-item {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .image-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vertical-image {
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .image-info .image-subtitle {
    margin-bottom: var(--spacing-5);
  }

  .custom-scrollbar {
    display: none;
  }
}
</style>