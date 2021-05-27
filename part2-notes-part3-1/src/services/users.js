import axios from "axios"
const baseUrl = "/api/users"

const create = async (newUser) => {
	const response = await axios.post(baseUrl, newUser)
	return response.data
}

const update = (id, newUser) => {
	const request = axios.put(`${baseUrl}/${id}`, newUser)
	return request.then((response) => response.data)
}

export default { create, update }