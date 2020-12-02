<template>
  <div class="fixed w-full">
    <div class="flex justify-between items-center pt-8 px-8 pb-4">
      <div class="flex justify-between items-center">
        <div>
          <a href="#"
            >Logo
            <img src="" alt="" />
          </a>
        </div>
        <div class="ml-4 relative">
          <div>
            <input
              type="text"
              placeholder="Generation Y"
              class="__gen text-base w-full focus:outline-none py-1 pl-3 rounded-lg"
            />
          </div>
          <div class="absolute __search">
            <i class="fas fa-search text-sm"></i>
          </div>
        </div>
        <div class="ml-4">
          <a href="#" class="text-base __help">Help</a>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <i class="fas fa-plus text-base __help"></i>
        </div>
        <div class="ml-4 rounded-full bg-indigo-500 h-6 w-6 text-center">
          <i class="fas fa-plus text-base text-white"></i>
        </div>
        <div class="ml-4 rounded-full bg-black h-6 w-6 text-center">
          <p class="text-base text-white font-light">F</p>
        </div>
      </div>
    </div>
    <div class="w-full line"></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.__gen {
  background: #dde3e8;
  color: #37352f;
}
.__gen::placeholder {
  color: #37352f;
}
.__search {
  top: 3px;
  right: 12px;
  color: #37352f;
}
.__help {
  color: #dde3e8;
}
.line {
  border: 1px solid #dde3e8;
}
</style>
