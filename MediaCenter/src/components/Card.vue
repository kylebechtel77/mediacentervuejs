<template>
  <b-col cols="4">
    <b-card  @click="openModal"  class="flow-card">
      <b-container>
        <b-row>
          <b-col class="card-header title">
            <div>{{data.text}}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="icon">
            <i class="fas fa-plus"></i>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </b-col>
</template>

<script>

export default {
  name: 'flow-card',
  props: ['data'],
  methods: {
    openModal() {
      this.$root.$emit('show-modal', this.data);
    },
  }
}
</script>

<style scoped>
.flow-card {
  margin: 8px;
  height: 300px;
  cursor: pointer;
  border-radius: 0;
  background-color: #FFFFFF;
  border-color: #BED0E0;
}

.card-header {
  font-family: 'Tahoma', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #003667;
  border-radius: 0;
}

.title {  
  padding-top: 5px;
  font-size: 50px;
  font-family: 'Tahoma', sans-serif;
}

.flow-card:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.icon {
  font-size: 100px;
}

</style>

<style>
.card-menu-button .btn {
  font-family: 'Tahoma', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #003667;
  border-width: 0;
  margin-top: -8px;
}
</style>