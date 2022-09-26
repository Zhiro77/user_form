import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {updateUserEmail} from '../../redux/slices/UserSlice'

const UserPage = () => {

    const userData = useSelector((state: any) => state.user.currentUser)
    const dispatch = useDispatch()

    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [userEmail,setUserEmail] = useState<any>(userData.email)
    const [newUserEmail, setNewUserEmail] = useState<any>('')
    
    

    const defImgForMan = 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png'
    const defImgForWoman = 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png'
    

    const changeHandle = () => {
        setActiveInput(true)
        
    }

    const changeEmail = () => {
        
        setActiveInput(false)
        setUserEmail(newUserEmail)
        dispatch(updateUserEmail({mail: userEmail, email: newUserEmail}))
        
    } 

    const defImage = () => {
        switch (userData.gender) {
            case 'male': 
            return defImgForMan
            case 'female': 
            return defImgForWoman
        }
    }

    return (
        <div>
            <div>
            <h3>HomePage</h3>
            </div>
            <div >
                <img style={{maxWidth: '200px'}} src={defImage()} alt="image" />
            </div>
            <div>
                <b>Name: </b>{userData.name}
            </div>
            <div>
                <b>Email: </b> {activeInput ? <form onSubmit={changeEmail}><input type={'email'}
                placeholder={'Enter new email'}
                 value={newUserEmail} 
                 onChange={(e: any) => setNewUserEmail(e.target.value)} />
                 <button type='submit'>Change</button>
                 </form> : userEmail}
                <span onClick={changeHandle} className='changeIcon'>
                   {activeInput ? '' :  <i className="bi bi-pencil-square "></i>}
                </span>
            </div>
        </div>
    )
}

export default UserPage