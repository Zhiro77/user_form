import React, {useState} from "react";
import { useSelector } from "react-redux";
import stl from './allUsers.module.css'

const AllUsersPage = () => {

    const allUsers = useSelector((state: any) => state.user.users)


    return (
        <div className={stl.Users}>
            <h3>All Users</h3> <hr />

            {
                allUsers.map((user: any, index: any) => {
                    return (
                        <div key={index}
                            
                        className={stl.user} draggable={true}>
                            <h3>Name: {user.name}</h3>
                            <h3>Age: {user.age}</h3>
                            <h3>Email: {user.email}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AllUsersPage