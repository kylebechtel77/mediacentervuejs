<template>
  <div class="calendar">
    Coming soon if requested.
  </div>
</template>

<script>
// @ is an alias to /src
import MediaCenter from '@/components/MediaCenter.vue';

export default {
  name: 'calendar',
  created (){
    this.$store.dispatch('loadData');
  },
  components: {
    MediaCenter,
  },
};
</script>
