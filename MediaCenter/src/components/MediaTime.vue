<template>
    <b-row>
      <b-form inline>
        <div class="d-flex">
          <label class="mr-auto" style="width:100px" for="inlineFormInputName2">{{ text }} :</label>
          <b-input id="inlineFormInputName2" placeholder='your name here' v-model='displayName' />
        </div>
      </b-form>
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