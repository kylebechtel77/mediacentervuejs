<template>
  <div class="container">
    <input type='date' class='form-control' id='dateField' />
    <b-row>
      <b-col>
        <checkout-block v-for="item in labItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
      <b-col>
        <checkout-block v-for="item in libraryItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
    </b-row>
    <b-button type="button" class="btn btn-primary" @onclick="save">Save Changes</b-button>
  </div>
</template>

<script>
import CheckoutBlock from '@/components/CheckoutBlock.vue';

export default {
  components: {
    CheckoutBlock,
  },
  methods: {
    save: function() {
      this.$store.dispatch('onSave');
    }
  },
  name: 'MediaCenter',
  props: {
    msg: String
  },
  computed: {
    libraryItems () {
      return this.$store.state.libraryItems || [];
    },
    labItems () {
      return this.$store.state.labItems || [];
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
