<template>
  <div>
    <div class="flex items-center mt-4">
      <div><p class="mb-0 text-gray-500 font-medium text-base">Repost</p></div>
      <div class="ml-4 flex items-center">
        <div>
          <i class="fas fa-circle text-gray-400 text-xs"></i>
        </div>
        <div class="ml-2">
          <p class="text-gray-500 font-medium text-base mb-0">Share</p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-start mt-5 -mx-5">
      <div
        class="h-8 w-8 bg-black text-white rounded-full flex items-center justify-center mx-5"
      >
        F
      </div>
      <div class="w-full">
        <input
          type="text"
          placeholder="Add a comment "
          class="w-full rounded-full py-1 px-3 bg-gray-300 text-base focus:outline-none text-base"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
