<template>
  <div class="container">
    {{ checkoutItem.text}}
    <checkout-item v-bind:checkoutItem="checkoutItem" v-bind:key="checkoutItem.id" />
  </div>
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