import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

import type { State } from '../flow.types'

const state: State = {
  /**
   * A map containing active filters and their selected filter values
   */
  activeFilters: {},

  /**
   * A map containing aggregate data and labels for different categories i.e. sex and smoking
   * mapped to a format understandable for VueCharts.js
   */
  attributeChartData: {},

  /**
   * A map containing the different filter components and their specific option lists
   */
  filterComponents: {}
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: true
})