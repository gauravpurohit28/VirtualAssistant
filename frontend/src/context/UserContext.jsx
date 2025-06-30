import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const userDataContext=createContext()
function UserContext({children}) {
    const serverUrl="https://virtualassistant-backend-ootn.onrender.com"
  
    const [userData,setUserData]=useState(null)
    const [frontendImage,setFrontendImage]=useState(null)
     const [backendImage,setBackendImage]=useState(null)
     const [selectedImage,setSelectedImage]=useState(null)
    const handleCurrentUser = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message === "token not found"
            ) {
                setUserData(null)
            } else {
                // Handle network or unexpected errors gracefully
                console.log("Network or unexpected error:", error.message || error)
                setUserData(null)
            }
        }
    }

    const getGeminiResponse = async (command) => {
        try {
            const result = await axios.post(`${serverUrl}/api/user/asktoassistant`, { command }, { withCredentials: true })
            return result.data
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log("Gemini API error:", error.response.data.message)
                return { error: error.response.data.message }
            } else {
                console.log("Network or unexpected error:", error.message || error)
                return { error: "Network error. Please try again later." }
            }
        }
    }

    useEffect(()=>{
handleCurrentUser()
    },[])
    const value={
serverUrl,userData,setUserData,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage,getGeminiResponse
    }
  return (
    <div>
    <userDataContext.Provider value={value}>
      {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
