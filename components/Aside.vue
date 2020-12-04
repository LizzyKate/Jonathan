<template>
  <div>
    <section class="bg-white rounded-lg p-8">
      <div class="flex items-center mt-2 mb-6">
        <div class="rounded-full p-2">
          <i class="fas fa-leaf text-green-500 text-3xl"></i>
        </div>
        <div class="ml-4 text-gray-500 text-2xl font-medium">Khan Academy</div>
      </div>
      <div class="">
        <h3 class="font-semibold text-3xl mb-0">Late night ideas</h3>
        <div class="mt-2">
          <p class="text-2xl text-gray-800 font-light">
            The other possibility is that tilt doesn't give a shit about me,
            since i'm a man ove the age of 37. It's those darn millennials,
            raised on shrieking commercials and brain-rotting soda pop, that
            they wish to woo.
          </p>
        </div>
      </div>
      <comment />
    </section>
    <section class="bg-white rounded-lg p-8 mt-4">YouTube</section>
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
}
</script>
