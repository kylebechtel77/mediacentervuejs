<template>
  <div class="container">
    <input type='date' class='form-control' id='dateField' />
    <div class="row">
        <div class=".col-md-6">
            <checkout-item v-for="item in labItems" v-bind:checkoutItem="item" v-bind:key="item.id">
            </checkout-item>
        </div>
        <div class=".col-md-6">
            <checkout-item v-for="item in libraryItems" v-bind:checkoutItem="item" v-bind:key="item.id">
            </checkout-item>
        </div>
      </div>
      <button type="button" class="btn btn-primary" onclick="">Save Changes</button>
    </div>
    <!--TODO:: figure out how to call save -->
</template>

<script>
export default {
  name: 'MediaCenter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
