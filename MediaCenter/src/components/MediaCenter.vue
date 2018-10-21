<template>
  <div class="container p-5">
    <input type='date' class='form-control' id='dateField' v-model="date" @input="dateChange" />
    <b-row>
      <b-col>
        <checkout-block v-for="item in labItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
      <b-col>
        <checkout-block v-for="item in libraryItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
    </b-row>
    <b-button type="button" variant="success" class="m-2" @click="save">Save Changes</b-button>
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
    },
    dateChange: function(event) {
      this.$store.dispatch('loadData');
    }
  },
  name: 'MediaCenter',
  props: {
    msg: String
  },
  computed: {
    date: {
      get: function () {
        return this.$store.state.date;
      },
      set: function (newValue) {
        this.$store.commit('updateDate', newValue);
      }
    },
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
