<template>
  <div class="bg-white rounded-lg p-3">
    <section>
      <div>Khan Academy</div>
      <div>
        <h3 class="title font-bold">Late night ideas</h3>
        <div>
          The other possibility is that tilt doesn't give a shit about me, since
          i'm a man ove the age of 37. It's those darn millennials, raised on
          shrieking commercials and brain-rotting soda pop, that they wish to
          woo.
        </div>
      </div>
      <comment />
    </section>
    <section>YouTube</section>
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
}
</script>
