<template>
  <b-modal id="modal-dialog" :title="data.text" v-model="isModalVisible">
    <input type='date' class='form-control' id='dateField' />
    <b-row>
      <b-col>
        <checkout-item v-bind:checkoutItem="data" v-bind:key="data.id" />
      </b-col>
    </b-row>
    <div slot="modal-footer" style="display:block">
      <div style="float: right;">
        <b-button @click="submit" class="button-blue"><i class="fas fa-save"></i>&nbsp;Save</b-button>
        <b-button @click="hideModal" class="button-white">Cancel</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
import axios from "axios";
import moment from "moment";
import CheckoutItem from '@/components/CheckoutItem.vue';

export default {
  name: "modal",
  components: {
    CheckoutItem,
  },
  created() {
    this.$root.$on("show-modal", data => {
      this.showModal(data)
    });
  },
  data() {
    return {
      isModalVisible: false,
      data: {},
    }
  },
  methods: {
    async submit() {
      // try {
      // let url = `/Exchange/api/qacc/GeneratePreviewComparisonReport?liveFirmId=${payload.liveFirm}&dummyFirmId=${payload.dummyFirm}&asOfDate=${payload.date}`;
      // let res = await axios({url, method: 'POST', data: payload, responseType: 'blob'});
      // // res.data has the valuable info in it. Do with it what we need.
      // } catch (err) {
      // alert(JSON.stringify(err)); // Invest in better logging? Bootstrap does error alerts. See the ColumnMappingModal
      // }
      this.$state.dispatch('onSave');
      this.hideModal();
    },
    hideModal() {
      this.isModalVisible = false;
    },
    showModal(data) {
      this.data = data;
      this.isModalVisible = true;
    }
  }
};
</script>

<style lang="scss">
	
		.button-blue {
			background-color: #003667;
			color: #FFFFFF;
		}

		.button-white {
			border-color: #BED0E0;
			background-color: #FFFFFF;
			color: #444444;
		}
		

</style>