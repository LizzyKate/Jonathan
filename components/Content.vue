<template>
  <section class="flex">
    <div class="w-1/2 -mx-5">
      <Search class="mx-5 mb-5" />
      <SearchResult class="mx-5" />
    </div>
    <aside class="w-1/2 mx-5">
      <AsideComponent />
    </aside>
  </section>
</template>
<script>
import SearchResult from './SearchResult.vue'
import AsideComponent from './Aside.vue'
import Search from '~/components/Content.vue'

export default {
  components: {
    Search,
    SearchResult,
    AsideComponent,
  },
}
</script>
<style scoped></style>
