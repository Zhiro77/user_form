import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {

    const userData = useSelector((state: any) => state.user.currentUser)

    console.log(userData, "usu");
    

    return (
        <div>
            <div>
            <h3>HomePage</h3>
            </div>
            <div>
                <b>Name: </b>{userData.name}
            </div>
            <div>
                <b>Email: </b> {userData.email}
            </div>
        </div>
    )
}

export default UserPage