<template>
  <div class="container p-5">
    <input type='date' class='form-control ml-auto mr-auto' style='width:250px' id='dateField' v-model="date" @input="dateChange" />
    <b-row>
      <b-col>
        <checkout-block v-for="item in labItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
      <b-col>
        <checkout-block v-for="item in libraryItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
      <b-col>
        <checkout-block v-for="item in collabItems" v-bind:checkoutItem="item" v-bind:key="item.id" />
      </b-col>
    </b-row>
    <b-button type="button" variant="success" class="m-2" @click="save">Save Changes</b-button>
    <b-alert :show="dismissCountDown"
             dismissible
             variant="success"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      Saved!
    </b-alert>
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
      this.showAlert();
    },
    dateChange: function(event) {
      this.$store.dispatch('loadData');
    },
    showAlert () {
      this.showDismissibleAlert = true;
      this.dismissCountDown = 5
    }
  },
  name: 'MediaCenter',
  props: {
    msg: String
  },
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
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
    
    collabItems () {
      return this.$store.state.collabItems || [];
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
