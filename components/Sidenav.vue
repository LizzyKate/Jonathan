<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <div
        class="bg-gray-400 p-2 mt-8 rounded-lg w-full flex justify-between items-center"
      >
        <div>
          <p class="text-base font-semibold __all">All</p>
        </div>
        <div>
          <p class="text-sm __all font-light">34 Results</p>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-gray-600 text-base">Images</p>
      </div>
      <div class="mt-3">
        <p class="text-gray-600 text-base">Videos</p>
      </div>
    </div>
    <div class="mt-12 flex flex-col">
      <div>
        <p class="text-base font-semibold __all">Sources</p>
      </div>
      <div class="mt-2 flex flex-col">
        <div class="flex mt-2" v-for="(link, i) in sources" :key="i">
          <div>
            <i :class="link.font"></i>
          </div>
          <div class="ml-4">
            <p class="text-gray-600 text-base">{{ link.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sources: [
        {
          font: 'fas fa-link text-sm text-gray-600',
          text: 'Edittwist',
        },
        {
          font: 'fab fa-google text-sm text-gray-600',
          text: 'Google',
        },
        {
          font: 'fab fa-youtube text-sm text-gray-600',
          text: 'Youtube',
        },
        {
          font: 'fab fa-wikipedia-w text-sm text-gray-600',
          text: 'Wikipedia',
        },
        {
          font: 'fas fa-school text-sm text-gray-600',
          text: 'Khan Academy',
        },
        {
          font: 'fas fa-book-reader text-sm text-gray-600',
          text: 'NewYork Public Library',
        },
      ],
    }
  },
}
</script>
<style scoped>
.all {
  color: #37352f;
}
</style>
