import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeUser } from "../redux/slices/UserSlice"
import CoinList from "./pages/chart/CoinList"
import UserPage from "./pages/UserPage"
import Tree from "./tree/Tree";




const Home = ({setIsAuth}: any) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateAll = useSelector((state: any) => state)


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

            <Tree stateAll={stateAll} />
        </div>
    )
}

export default Home