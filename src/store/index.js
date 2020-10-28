import Vue from 'vue'
import Vuex from 'vuex'
import { getEmployeeList } from '@/apis/userApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonStatus: false,
    errorStatus: false,
    page: 1,
    employeeList: []
  },
  mutations: {
    nextPage: state => state.page++,
    prevPage: state => state.page--,
    setEmployee: (state, employeeList) => (state.employeeList = employeeList),
    setButtonStatus: (state, status) => (state.buttonStatus = status),
    setErrorStatus: (state, status) => (state.errorStatus = status)
  },
  actions: {
    async nextPage({ dispatch, commit, state }) {
      commit('nextPage')
      await dispatch('getEmployee', state.page)
    },
    async prevPage({ dispatch, commit, state }) {
      if (state.page > 1) {
        commit('prevPage')
        await dispatch('getEmployee', state.page)
      }
    },
    delay(_, ms) {
      return new Promise(res => {
        setTimeout(res, ms)
      })
    },
    async getEmployee({ commit }, page) {
      commit('setButtonStatus', true)
      commit('setErrorStatus', false)
      try {
        // await dispatch('delay', 3000)
        const { data } = await getEmployeeList(page)
        commit('setEmployee', data.data)
      } catch (e) {
        commit('setErrorStatus', true)
        throw new Error(e)
      } finally {
        commit('setButtonStatus', false)
      }
    }
  },
  getters: {
    page: state => state.page,
    employee: state => state.employeeList
  },
  modules: {}
})
