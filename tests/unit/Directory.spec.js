import { mount, shallowMount } from '@vue/test-utils'
import Directory from '@/views/Directory'
import Vuetify from 'vuetify'
import { getEmployeeList } from '@/apis/userApi'
import FlushPromises from 'flush-promises'

jest.mock('@/apis/userApi')

const mockGetUserResolved = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg'
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg'
  }
]

describe('Directory.vue', () => {})
