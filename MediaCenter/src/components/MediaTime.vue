<template>
    <b-row class="ml-auto mr-auto">
        <b-col class="ml-auto mr-auto">
          <label style="ml-auto mr-auto" class="text-center" for="inlineFormInputName2">{{ text }}</label>
          <b-input class="ml-auto mr-auto" placeholder='your name here' v-model='displayName' />
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'MediaCenter',
  props: {
    text: String,
    id: String,
    name: String,
  },
  computed: {
    displayName: {
      get: function () {
        return this.name;
      },
      set: function (newValue) {
        this.$store.commit('updateName', {text: this.text, name: newValue, id: this.id });
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>