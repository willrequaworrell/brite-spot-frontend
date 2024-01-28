import axios from "axios"
import { setTokenCookie } from "./cookieHelper"

const apiKeyHeader = {"x-api-key": import.meta.env.VITE_API_KEY}

export const createUser = async (userData) => {
    try {
        console.log("submitting", userData)
        const response = await axios.post(`http://localhost:3000/signup`, userData , {headers: apiKeyHeader} )
        console.log(response)
        return {status: "success", userData: response}
    } catch (e) {
        return {status: "error", errorData: e}
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
        setTokenCookie(response.data.jwt)
        return {status: "success", userData: response.data.jwt}
    } catch (e) {
        return {status: "error", errorData: e}
    }
}

export const fetchUserDetails = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`, {headers: apiKeyHeader})
        return response.data
    } catch (error) {
        console.log(error)
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

export const deleteEntry = async (entryId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/entry/${entryId}`, {headers: apiKeyHeader});
        console.log(response);
        return {status: "success", message: "Entry deleted successfully"};
    } catch (e) {
        console.error(e);
        return {status: "error", errorData: e};
    }
};