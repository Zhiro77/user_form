import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeUser } from "../redux/slices/UserSlice"
import CoinList from "./pages/chart/CoinList"
import UserPage from "./pages/UserPage"




const Home = ({setIsAuth}: any) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(removeUser())
        setIsAuth(false)
        navigate('/')
    }
   
    

    return (
        <div>
            <div className='d-flex justify-content-around'>
            <UserPage />
                <div>
                    
                    <button onClick={logOut}>log out</button>
                </div>
            </div>
            <CoinList />
            
        </div>
    )
}

export default Home