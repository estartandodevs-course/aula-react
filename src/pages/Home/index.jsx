import React, { useState, useEffect } from "react"
import "./style.scss"
import Card from "../../components/Card";

function Home(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users").then(res => res.json()).then(res => {
            setUsers(res.data)
        })
    }, [])



    return (
        <div className="HomeStyle">
            {users.map(user => {
                return <Card 
                            key={user.id}
                            first_name={user.first_name} 
                            avatar={user.avatar} 
                            last_name={user.last_name}
                            email={user.email}
                        />
            })}
        </div>
    )
}

export default Home