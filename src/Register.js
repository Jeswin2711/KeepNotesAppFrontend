import { useRef, useState, useEffect } from "react";


import React from 'react'

const Register = () => {

    // const userRef = useRef()

    const [username, setusername] = useState('')

    return (
        <section>
            Register
            <label htmlFor="username">
                Username
            </label>
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
        </section>
    )
}

export default Register