<template>
  <div class="home">
    <popup />
    <b-container fluid>
      <b-row>
        <Card v-for='item in cardItems'
                v-bind:data='item'
                v-bind:key='item.key' />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Popup from '@/components/Popup.vue';

export default {
  name: 'tiles',
  created (){
    this.$store.dispatch('loadData');
  },
  components: {
    Card,
    Popup,
  },
  computed: {
    cardItems () {
        return this.$store.state.labItems.concat(this.$store.state.libraryItems);
    }
  }

};
</script>
