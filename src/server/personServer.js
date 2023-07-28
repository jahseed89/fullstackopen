import axios from "axios";
const baseUrl = "http://localhost:4001/persons"

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

const update = (id, newNumber) => {
    return axios.put(`${baseUrl}/${id}`, newNumber)
}

const del = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, update, del}