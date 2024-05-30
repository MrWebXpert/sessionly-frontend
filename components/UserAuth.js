"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const UserAuth = () => {
    const [user, setUser] = useState(null)
    const userId = localStorage.getItem('id')

    useEffect(() => {
        if (userId) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:5080/api/v2/${userId}`)
                    setUser(response.data)
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching user data:', error)
                }
            }

            fetchData()
        } else {
            console.log('No user ID found in localStorage.')
        }
    }, [userId])

    return (
        <div>
            {user ? (
                <div>
                    <p>User ID: {user.id}</p>
                    <p>User Name: {user.name}</p>
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    )
}

export default UserAuth
