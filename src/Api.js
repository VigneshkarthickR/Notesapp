
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Api() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => console.log(res.data))
            .then(res => setUser(res.data)

            )
        console.log(user);
    })
    return
    (
        (user.map(u => {
            <h1>
                {u.name}
            </h1>

        }))


    )
}












