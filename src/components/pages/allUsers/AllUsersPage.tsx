import React, {DragEvent} from "react";
import { useSelector } from "react-redux";
import stl from './allUsers.module.css'

const AllUsersPage = () => {

    const allUsers = useSelector((state: any) => state.user.users)

    console.log(allUsers, "all users");


    

    return (
        <div className={stl.Users}>
            

            {
                allUsers.map((user: any) => {
                    return (
                        <div 

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