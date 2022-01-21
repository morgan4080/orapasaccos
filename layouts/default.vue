<template>
  <div class="relative font-body bg-amber-50 min-h-screen w-full">
    <Nuxt />
  </div>
</template>
<script>
export default {

}
</script>
<style>
html {
  scroll-behavior: smooth;
}

/* width */
::-webkit-scrollbar {
  width: 14px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #52596d;
  border: 2px #fcf9ed solid;
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, rgba(31,136,203,0.63), #ed64a6, #ea7500);
}

.scrollbar-w-2::-webkit-scrollbar {
  width: .5rem!important;
  height: .5rem!important;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate(0, 6px);
}
</style>
