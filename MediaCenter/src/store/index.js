import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import axios from 'axios'

Vue.use(Vuex)

const periods = [{ text: '1st Period' }, { text: '2nd Period' }, { text: '3rd Period' },
{ text: '4th Period' }, { text: '5th Period' }, { text: '6th Period' }]

const timeSlots = [{ text: '9:15', name: 'kyle' }, { text: '9:30' }, { text: '9:45' },
{ text: '10:00' }, { text: '10:15' }, { text: '10:30' }, { text: '10:45' }, { text: '11:00' },
{ text: '11:15' }, { text: '11:30' }, { text: '11:45' }, { text: '12:00' }, { text: '12:15' },
{ text: '12:30' }, { text: '12:45' }, { text: '1:00' }, { text: '1:15' }, { text: '1:30' },
{ text: '1:45' }, { text: '2:00' }, { text: '2:15' }, { text: '2:30' }, { text: '2:45' },
{ text: '3:00' }, { text: '3:15' }, { text: '3:30' }]

const allDay = [{ text: 'All Day' }]

export default new Vuex.Store({
  state: {
    date: moment().format('YYYY-MM-DD'),
    allDay,
    periods,
    timeSlots,
    labItems: [
      { id: 'lab502', text: 'Labs 502', times: periods },
      { id: 'lab504', text: 'Labs 504', times: periods },
      { id: 'lab705', text: 'Labs 705', times: periods },
      { id: 'labcart1', text: 'Lab Cart 1 (30)', times: allDay },
      { id: 'labcart2', text: 'Lab Cart 2 (18)', times: allDay }
    ],
    libraryItems: [
      { id: 'mediacenter', text: 'Media Center', times: timeSlots },
      { id: 'greenscreen', text: 'Green Screen', times: periods }
    ]
  },
  getters: {
  },
  mutations: {
    updateLabItems (state, payload) {
      state.labItems.times = payload.times
    },
    updateLibraryItems (state, payload) {
      state.libraryItems.times = payload.times
    }
  },
  actions: {
    async loadData (ctx) {
      const self = this
      const res = await axios.get(`https://9nakk1teyj.execute-api.us-east-1.amazonaws.com/prod?date=${self.date}`)
      ctx.commit('updateLabItems', res.data.filter(e => e.Type === 'lab'))
      ctx.commit('updateLibraryItems', res.data.filter(e => e.Type === 'library'))
    },
    async onSave () {
      // This calls the backend API to create a new to-do item
      // TODO:: make this actually do that ^ via lambda funcs and dynamodb
    }
  }
})
