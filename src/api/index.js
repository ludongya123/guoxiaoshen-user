  import './http'
  export const userAdd = params => {
      return axios.post('user/detail/add', params)
  }