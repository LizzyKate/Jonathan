<template>
  <div class="bg-white rounded-lg p-8">
    <section>
      <div class="flex items-center mt-2 mb-6">
        <div>
          <i class="fas fa-leaf text-green-500 text-xl"></i>
        </div>
        <div class="ml-4 text-gray-500 font-medium text-base">Khan Academy</div>
      </div>
      <div class="">
        <h3 class="font-semibold text-lg mb-0">Late night ideas</h3>
        <div class="mt-2">
          <p class="text-base text-gray-500 font-medium">
            The other possibility is that tilt doesn't give a shit about me,
            since i'm a man ove the age of 37. It's those darn millennials,
            raised on shrieking commercials and brain-rotting soda pop, that
            they wish to woo.
          </p>
        </div>
      </div>
      <comment />
    </section>
    <!-- <section>YouTube</section> -->
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
}
</script>
