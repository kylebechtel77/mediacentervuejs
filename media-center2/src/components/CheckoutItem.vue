<template>
    <div>  
        {{ checkoutitem.text}}
        <media-time v-for='item in checkoutitem.times'
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
    checkoutitem: Map,
  },
  components: {
    MediaTime,
  },
}
</script>

<style scoped lang=scss>
</style>