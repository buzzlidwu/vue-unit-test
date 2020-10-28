<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" style="textAlign:center">
        <v-row>
          <v-col cols="4">
            <v-btn large color="error" width="100px" @click.prevent="prevPage" :disabled="buttonDisabled" data-test="prevBtn">Prev Page</v-btn>
          </v-col>
          <v-col cols="4" style="textAlign:center">
            <h1 data-test="pageSize">{{ pageNumber }}</h1>
          </v-col>
          <v-col cols="4" style="textAlign:center">
            <v-btn large color="primary" width="100px" @click.prevent="nextPage" :disabled="buttonDisabled" data-test="nextBtn">Next Page</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="textAlign:center" v-if="employeeList.length === 0">
        <span data-test="emptyListMsg">USER LIST IS EMPTY</span>
        <br />
        <span data-test="errorMsg" v-if="errorStatus" style="color:red;fontSize:30px"> {{ errorMsg }} </span>
      </v-col>
      <v-col cols="4" v-else v-for="employee of employeeList" :key="employee.mail" data-testId="user-info">
        <UserCard :user="employee" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import { mapActions, mapGetters, mapState } from 'vuex'
import { ActionTypes } from '@/store'
export default {
  name: 'DirectoryStore',
  components: {
    UserCard
  },

  data: () => ({
    errorMsg: 'API CALL ERROR PLEASE TRY AGAIN'
  }),

  methods: {
    ...mapActions({
      nextPage: ActionTypes.NEXT_PAGE,
      prevPage: ActionTypes.PREV_PAGE,
      getEmployeeList: ActionTypes.GET_EMPLOYEE_LIST
    })
  },
  computed: {
    ...mapState(['errorStatus', 'buttonDisabled']),
    ...mapGetters(['pageNumber', 'employeeList'])
  },

  async created() {
    this.getEmployeeList()
  }
}
</script>
