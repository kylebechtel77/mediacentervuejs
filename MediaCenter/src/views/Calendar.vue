<template>
  <div class="home">
    <MediaCenter/>
  </div>
</template>

<script>
// @ is an alias to /src
import MediaCenter from '@/components/MediaCenter.vue';

export default {
  name: 'home',
  created (){
    this.$store.dispatch('loadData');
  },
  components: {
    MediaCenter,
  },
};
</script>
