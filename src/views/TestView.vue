<script setup lang="ts">
import gsap from "gsap";
import { onMounted, ref } from "vue";
import IconArrowLeft from "../components/icons/IconArrowLeft.vue";

const timeline = gsap.timeline();
let actualDoc = ref(0);
// list stock every document
const document = ref(["presentation", "presentation2", "presentation3"]);

onMounted(() => {
  timeline.from(".presentation", {
    duration: 1,
    x: -100,
    opacity: 0,
  });
});

function previousDoc() {
  timeline.to("." + document.value[actualDoc.value], {
    duration: 1,
    opacity: 0,
    display: "none",
    onComplete: () => {
      // actualDoc take +1
      actualDoc.value = actualDoc.value === 0 ? 1 : actualDoc.value - 1;

      timeline.to("." + document.value[actualDoc.value], {
        duration: 1,
        opacity: 1,
        display:
          document.value[actualDoc.value] === "presentation" ? "block" : "grid",
      });
    },
  });
}

function nextDoc() {
  timeline.to("." + document.value[actualDoc.value], {
    duration: 1,
    opacity: 0,
    display: "none",
    onComplete: () => {
      // actualDoc take +1
      actualDoc.value = actualDoc.value === 1 ? 0 : actualDoc.value + 1;

      timeline.to("." + document.value[actualDoc.value], {
        duration: 1,
        opacity: 1,
        display:
          document.value[actualDoc.value] === "presentation" ? "block" : "grid",
      });
    },
  });
}
</script>

<template>
  <main>
    <img
      src="https://cdn.midjourney.com/5aea566d-284b-4ddb-857d-f918821c903f/grid_0.png"
      alt=""
      class="fixed inset-0 -z-10 h-screen w-screen object-cover"
    />

    <div class="relative z-10 flex min-h-screen w-full items-end p-5">
      <div
        class="relative h-[93vh] w-full overflow-hidden overflow-y-auto rounded-2xl border-8 border-secondary py-12"
        :class="{
          'lg:flex lg:flex-col lg:items-center': actualDoc === 1,
        }"
      >
        <div
          class="flex items-center justify-center space-x-2 pb-8 lg:absolute lg:bottom-10 lg:right-8"
        >
          <div
            class="h-1 w-8 lg:w-7"
            :class="actualDoc === 0 ? 'bg-white' : 'bg-gray-400'"
          ></div>
          <div
            class="h-1 w-8 lg:w-7"
            :class="actualDoc === 1 ? 'bg-white' : 'bg-gray-400'"
          ></div>
          <!-- <div
            class="h-1 w-8 lg:w-7"
            :class="actualDoc === 2 ? 'bg-white' : 'bg-gray-400'"
          ></div> -->
        </div>
        <p
          class="presentation text-center text-3xl font-semibold md:mt-10 md:mr-10 md:text-5xl lg:text-right lg:text-7xl"
        >
          Le Harfang des Neiges
        </p>
        <p
          class="presentation absolute bottom-0 rounded-b-lg bg-secondary p-5 pt-4 text-sm text-tertiary lg:bottom-10 lg:right-auto lg:left-10 lg:max-w-lg lg:rounded lg:text-base"
        >
          Le harfang des neiges est une espèce de hibou arctique connue pour son
          plumage blanc neigeux et sa capacité à chasser efficacement dans
          l'obscurité. Il est également capable de voler sans bruit grâce à ses
          plumes spéciales et peut tourner sa tête à presque 270 degrés pour
          repérer sa proie.
        </p>
        <div
          class="presentation2 my-auto grid w-full grid-cols-1 gap-10 px-5 lg:grid-cols-3 lg:px-20"
          :style="{ opacity: 0, display: 'none' }"
        >
          <div class="h-fit overflow-hidden rounded-xl bg-white">
            <img
              src="https://cdn.midjourney.com/5aea566d-284b-4ddb-857d-f918821c903f/grid_0.png"
              alt=""
              class="aspect-video object-cover"
            />
            <p class="p-5 text-sm text-tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quae, voluptas, quod, voluptate quibusdam voluptates quidem
              accusantium quos voluptatum quia. Quisquam, quae. Quisquam, quae.
            </p>
          </div>
          <div class="h-fit overflow-hidden rounded-xl bg-white">
            <img
              src="https://cdn.midjourney.com/5aea566d-284b-4ddb-857d-f918821c903f/grid_0.png"
              alt=""
              class="aspect-video object-cover"
            />
            <p class="p-5 text-sm text-tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quae, voluptas, quod, voluptate quibusdam voluptates quidem
              accusantium quos voluptatum quia. Quisquam, quae. Quisquam, quae.
            </p>
          </div>
          <div class="h-fit overflow-hidden rounded-xl bg-white">
            <img
              src="https://cdn.midjourney.com/5aea566d-284b-4ddb-857d-f918821c903f/grid_0.png"
              alt=""
              class="aspect-video object-cover"
            />
            <p class="p-5 text-sm text-tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quae, voluptas, quod, voluptate quibusdam voluptates quidem
              accusantium quos voluptatum quia. Quisquam, quae. Quisquam, quae.
            </p>
          </div>
        </div>
        <div class="presentation3" :style="{ opacity: 0, display: 'none' }">
          <p>Hello World</p>
        </div>
      </div>
      <div
        class="absolute flex space-x-0.5 rounded text-tertiary transition-all duration-300 ease-in-out lg:bottom-14 lg:right-14"
        :class="{
          'bottom-52 right-8 md:bottom-32': actualDoc === 0,
          'bottom-8 right-8': actualDoc === 1 || actualDoc === 2,
        }"
      >
        <button
          class="rounded bg-gray-100 px-5 py-2 focus:outline-none"
          @click="previousDoc"
        >
          <icon-arrow-left class="h-3 w-3 text-tertiary" />
        </button>
        <button
          class="rounded bg-gray-100 px-5 py-2 focus:outline-none"
          @click="nextDoc"
        >
          <icon-arrow-left class="h-3 w-3 rotate-180 text-tertiary" />
        </button>
      </div>
    </div>
    <div class="absolute inset-0 min-h-screen w-full bg-tertiary/30"></div>
  </main>
</template>
