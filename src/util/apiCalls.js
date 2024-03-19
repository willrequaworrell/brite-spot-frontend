import axios from "axios"
import { setTokenCookie } from "./cookieHelper"

const apiKeyHeader = {"x-api-key": import.meta.env.VITE_API_KEY.replace(/"/g, '')}
const host = import.meta.env.VITE_DOMAIN.replace(/"/g, '') // "https://britespotapi.w-r-w.com"

export const createUser = async (userData) => {
    try {
        console.log("submitting", userData)
        const response = await axios.post(`${host}/signup`, userData , {headers: apiKeyHeader} )
        console.log(response)
        return {status: "success", userData: response}
    } catch (e) {
        return {status: "error", errorData: e.response.data}
    }
}

export const signInUser = async (credentials) => {
    console.log(host)
    console.log(host.replace(/"/g, ''))
    const editedCredentials = {
        "email": credentials.email,
        "password": credentials.password
    }
    try {
        console.log("signing in", editedCredentials)
        const response = await axios.post(`${host}/login`, editedCredentials , {headers: apiKeyHeader} )
        // console.log(response) 
        setTokenCookie(response.data.jwt)
        return {status: "success", userData: response.data.jwt}
    } catch (e) {
        return {status: "error", errorData: e}
    }
}

export const fetchUserDetails = async (userId) => {
    try {
        const response = await axios.get(`${host}/user/${userId}`, {headers: apiKeyHeader})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllUserEntries = async (userId) => {
    try {
        const response = await axios.get(`${host}/user/${userId}/entries`, {headers: apiKeyHeader})
        if (response.data.status === "none") {
            return null
        }
        return response.data.entries
    }
    catch (e) {
        console.log(e)
    }
}

export const fetchMostRecentUserEntry = async (userId) => {
    try {
        const response = await axios.get(`${host}/user/${userId}/entries/today`, {headers: apiKeyHeader})
        if (response.data.status === "none") {
            return null
        }
        return response.data.entry
    } catch (error) {
        console.log(error)
    }
}

export const fetchWordCloudData = async (userId) => {
    try {
        const response = await axios.get(`${host}/user/${userId}/entries/combined`, {headers: apiKeyHeader})
        return response.data.wordCountsArray
    }
    catch (e) {
        console.log(e)
    }
}

export const submitEntry = async (entryData) => {
    try {
        const response = await axios.post(`${host}/entry`, entryData, {headers: apiKeyHeader} )
        return {status: "success", message: "Entry logged successfully"};
    } catch (e) {
        return {status: "error", errorData: e};
    }
}

export const deleteEntry = async (entryId) => {
    try {
        const response = await axios.delete(`${host}/entry/${entryId}`, {headers: apiKeyHeader});
        console.log(response);
        return {status: "success", message: "Entry deleted successfully"};
    } catch (e) {
        console.error(e);
        return {status: "error", errorData: e};
    }
};