import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import axios from 'axios'

Vue.use(Vuex)

const periods = [{ text: 'NBI' },{ text: '1st Period' }, { text: '2nd Period' }, { text: '3rd Period' },
{ text: '4th Period' }, { text: '5th Period' }, { text: '6th Period' }]

const timeSlots = [{ text: 'Before Hours' },{ text: '8:45' },{ text: '9:00' },{ text: '9:15' }, { text: '9:30' }, { text: '9:45' },
{ text: '10:00' }, { text: '10:15' }, { text: '10:30' }, { text: '10:45' }, { text: '11:00' },
{ text: '11:15' }, { text: '11:30' }, { text: '11:45' }, { text: '12:00' }, { text: '12:15' },
{ text: '12:30' }, { text: '12:45' }, { text: '1:00' }, { text: '1:15' }, { text: '1:30' },
{ text: '1:45' }, { text: '2:00' }, { text: '2:15' }, { text: '2:30' }, { text: '2:45' },
{ text: '3:00' }, { text: '3:15' }, { text: '3:30' },{ text: 'After Hours' }]

const allDay = [{ text: 'NBI' },{ text: 'AM' },{ text: 'PM' }]
let initialLabTimes = [
  { id: 'lab502', text: 'Labs 502', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'lab504', text: 'Labs 504', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'lab705', text: 'Labs 705', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'labcart1', text: 'Lab Cart 1 (30)', times: JSON.parse(JSON.stringify(allDay)) },
  { id: 'labcart2', text: 'Lab Cart 2 (30)', times: JSON.parse(JSON.stringify(allDay)) },
  { id: 'labcart3', text: 'Lab Cart 3 (30)', times: JSON.parse(JSON.stringify(allDay)) },
  { id: 'labcart4', text: 'Lab Cart 4 (30)', times: JSON.parse(JSON.stringify(allDay)) },
  { id: 'labcart5', text: 'Lab Cart 5 (30)', times: JSON.parse(JSON.stringify(allDay)) },
  { id: 'labcart6', text: 'Lab Cart 6 (30)', times: JSON.parse(JSON.stringify(allDay)) }
];

let initialLibraryTimes = [
  { id: 'mediacenter', text: 'Media Center', times: JSON.parse(JSON.stringify(timeSlots)) },
  { id: 'greenscreen', text: 'Green Screen', times: JSON.parse(JSON.stringify(periods)) },
  
]

let initialCollaborationStationTimes = [
  { id: 'collaborationstationa', text: 'Collaboration station A', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'collaborationstationb', text: 'Collaboration station B', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'bluesection', text: 'Navy blue section', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'greensection', text: 'Light green section', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'projectRoom', text: 'Project Room', times: JSON.parse(JSON.stringify(periods)) },
  { id: 'recordexstation', text: 'Recordex station', times: JSON.parse(JSON.stringify(periods)) },
]

initialLabTimes.forEach((items) => {
  items.times.forEach((time, i) => {
    time.id = `lab-${items.id}-${i}`;
  })
});
initialLibraryTimes.forEach((items) => {
  items.times.forEach((time, i) => {
    time.id = `library-${items.id}-${i}`;
  })
});
initialCollaborationStationTimes.forEach((items) => {
  items.times.forEach((time, i) => {
    time.id = `collab-${items.id}-${i}`;
  })
});

export default new Vuex.Store({
  state: {
    username: null,
    date: moment().format('YYYY-MM-DD'),
    labItems: initialLabTimes,
    libraryItems: initialLibraryTimes,
    collabItems: initialCollaborationStationTimes
  },
  getters: {
  },
  mutations: {
    updateLabItems (state, payload) {
      state.labItems = payload || initialLabTimes;
    },
    updateLibraryItems (state, payload) {
      state.libraryItems = payload || initialLibraryTimes;
    },
    updateCollabItems (state, payload) {
      state.collabItems = payload || initialCollaborationStationTimes;
    },
    updateDate (state, payload) {
      state.date = moment(payload).format('YYYY-MM-DD');
    },
    updateName (state, payload) {
      state.labItems.forEach((items, i) => {
        items.times.forEach((time, j) => {
          if(time.id == payload.id)
            state.labItems[i].times[j].name = payload.name;
        })
      });
      state.libraryItems.forEach((items, i) => {
        items.times.forEach((time, j) => {
          if(time.id == payload.id)
            state.libraryItems[i].times[j].name = payload.name;
        })
      });
      state.collabItems.forEach((items, i) => {
        items.times.forEach((time, j) => {
          if(time.id == payload.id)
            state.collabItems[i].times[j].name = payload.name;
        })
      });

    }
  },
  actions: {
    async loadData (ctx) {
      const self = this;
      const res = await axios.get(`https://9nakk1teyj.execute-api.us-east-1.amazonaws.com/prod?date=${self.state.date}`);

      if(res.data && res.data[0] && res.data[0].items){
        ctx.commit('updateLabItems', res.data[0].items.labItems);
        ctx.commit('updateLibraryItems', res.data[0].items.libraryItems);
        ctx.commit('updateCollabItems', res.data[0].items.collabItems);
      }
      else {
        ctx.commit('updateLabItems');
        ctx.commit('updateLibraryItems');
        ctx.commit('updateCollabItems');
      }
    },
    async onSave () {
      // This calls the backend API to create a new to-do item
      const self = this;
      let data = {
        'httpMethod':'POST',
        'Date': self.state.date,
        'items': {
          'labItems': self.state.labItems,
          'libraryItems': self.state.libraryItems
          }        
      };
      const res = await axios.post(`https://9nakk1teyj.execute-api.us-east-1.amazonaws.com/prod/`, data);
    }
  }
})
