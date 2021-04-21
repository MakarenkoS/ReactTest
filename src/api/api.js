import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const postApi = {
  async getPosts(limit) {
    try {
      const response = await instance.get(`todos/?_limit=${limit}`)
      return response.data
    } catch (error) {
      console.log('This is:',error)
      throw new Error('Some error')
    }
  }
}
