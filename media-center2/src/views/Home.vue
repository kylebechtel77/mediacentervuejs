<template>
  <div class="home">
    <MediaCenter msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MediaCenter from '@/components/MediaCenter.vue';

export default {
  name: 'home',
  components: {
    MediaCenter,
  },
};
</script>
