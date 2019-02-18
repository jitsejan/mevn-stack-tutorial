import api from '@/services/api'

export default {
  fetchCharacters () {
    return api().get('characters')
  }
}
