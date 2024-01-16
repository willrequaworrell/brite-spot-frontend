import axios from "axios"

const apiKeyHeader = {"x-api-key": import.meta.env.VITE_API_KEY}

export const createUser = async (userData) => {
    try {
        console.log("submitting", userData)
        const response = await axios.post(`http://localhost:3000/signup`, userData , {headers: apiKeyHeader} )
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const signInUser = async (credentials) => {
    const editedCredentials = {
        "email": credentials.email,
        "password": credentials.password
    }
    try {
        console.log("signing in", editedCredentials)
        const response = await axios.post(`http://localhost:3000/login`, editedCredentials , {headers: apiKeyHeader} )
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}


export const fetchAllUserEntries = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/entries`, {headers: apiKeyHeader})
        // console.log(response.data.entries)
        return response.data.entries
    }
    catch (e) {
        console.log(e)
    }
}

export const submitEntry = async (entryData) => {
    try {
        const response = await axios.post('http://localhost:3000/entry', entryData, {headers: apiKeyHeader} )
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}