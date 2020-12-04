<template>
  <div class="bg-white rounded p-8">
    <div class="h-12 rounded full border-1 bg-blackk mt-8">
      New York Public Library
    </div>
    <div class="text-xl">
      a Silicon Valley adventure Kaplan, a well known figure in th e computer
      indusry, founded GO corporation in 1987, and for ventures in the valley.
      Startup tells the story of Kaplan's wild ride: how he assembled a
      brilliant but fractious team of engineers , software desigers, and
      investores; pioneered the emerging market for hand-held computers operated
      with a pen instead of a keyboard; and careened from crisis to crisis
      without ever losing his passion for a revolutionary idea.
    </div>
    <comment />
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
}
</script>
