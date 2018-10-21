<template>
    <b-row>
      <b-form inline>
        <b-col>
          <label for="inlineFormInputName2">{{ text }} :</label>
        </b-col>
        <b-col>
         <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder='your name here' v-model='displayName' />
        </b-col>
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