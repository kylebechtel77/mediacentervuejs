<template>
    <div>
        {{ text }} : <input placeholder='your name here' v-model='name' />
    </div>
</template>

<script>
export default {
  name: 'MediaCenter',
  props: {
    text: String,
    id: String,
    name: String,
  }
}
</script>

<style scoped lang="scss">
</style>