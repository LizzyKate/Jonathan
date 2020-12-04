<template>
  <div class="mx-auto bg-gray-300">
    <Nav />

    <div class="flex relative">
      <div class="w-1/4">
        <Sidenav />
      </div>
      <div class="min-h-screen w-3/4">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from './Nav'
import Sidenav from './Sidenav'
import Content from './Content'
export default {
  components: {
    Nav,
    Sidenav,
    Content,
  },
}
</script>
<style scoped></style>
