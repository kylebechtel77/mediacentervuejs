<template>
    <div>  
        <media-time v-for='item in checkoutItem.times'
            :text='item.text'
            :name='item.name'
            :id='item.id'
            :key='item.id'>
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