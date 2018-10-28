<template>
  <b-container class="m-2">
    <b>{{ checkoutItem.text}}</b>
    <checkout-item v-bind:checkoutItem="checkoutItem" v-bind:key="checkoutItem.id" />
  </b-container>
</template>

<script>
import CheckoutItem from '@/components/CheckoutItem.vue';

export default {
  name: 'checkoutblock',
  components: {
    CheckoutItem,
  },
  props: {
    checkoutItem: Object,
  }
}
</script>