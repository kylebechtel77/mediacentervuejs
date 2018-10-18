<template>
  <div>
    todo navigation
    <slot name="main"></slot>
  </div>
</template>

<script>
export default {
  name: 'base view',
  created: () => {
    if(!this.$store.state.username){
      this.$router.push('/login');
    }
  }
}
</script>
