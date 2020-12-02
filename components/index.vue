<template>
  <div>
    <div class="relative">
      <Nav />
    </div>

    <div class="flex relative">
      <div class="w-1/5 __side h-screen px-4 fixed">
        <Sidenav />
      </div>
      <div class="w-4/5 min-h-screen flex-grow">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from './nav'
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
<style scoped>
.__side {
  background: #dde3e8;
  top: 82px;
}
</style>
