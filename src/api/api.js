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


const coursesInstance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/',
})

export const coursesApi = {
  async getCourses() {
    try {
      const response = await coursesInstance.get('daily_json.js')
      // https://www.cbr-xml-daily.ru/archive/2021/05/21/daily_json.js
      return response.data
    } catch {
      console.log('Some error')
    }
  }
}