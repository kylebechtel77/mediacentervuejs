<template>
    <b-row>
      <b-form inline>
        <b-col>
          <label for="inlineFormInputName2">{{ text }} :</label>
        </b-col>
        <b-col>
         <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder='your name here' v-model='name' />
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
  }
}
</script>

<style scoped lang="scss">
</style>