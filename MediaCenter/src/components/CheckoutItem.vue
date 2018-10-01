<template>
    <div>  
        <media-time v-for='item in checkoutItem.times'
            v-bind:text='item.text'
            v-bind:name='item.name'
            v-bind:key='item.id'>
        </media-time>
    </div>
</template>

<script>
import MediaTime from '@/components/MediaTime.vue';

export default {
  name: 'CheckoutItem',
  props: {
    checkoutItem: Object,
  },
  components: {
    MediaTime,
  },
}
</script>

<style scoped lang=scss>
</style>