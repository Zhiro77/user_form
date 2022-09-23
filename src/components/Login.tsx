import React from 'react'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IUserData } from "../model";
import { setCurrentUser } from '../redux/slices/UserSlice';


type Props = {
    setIsAuth: (i: boolean) => void
}

export const Login: React.FC<Props> = ({setIsAuth}) => {

    const dispatch = useDispatch()
    const userLog = useSelector((state: any) => state.user.users  )
    const navigate = useNavigate()


    const arrLog: any = []



    if (userLog.length > 0) {
        userLog.map((item: any) => arrLog.push({email:item.email, password: item.password, name: item.name}))
    }
    


    interface IFormInput {
        password: string;
        email: string
      }

      const { register, handleSubmit,reset, formState: { errors } } = useForm<IFormInput>();
      const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
        

        if(arrLog.length > 0) {
            let a =  arrLog.map((item: any) => {
                if (data.email === item.email && data.password === item.password) {
                    reset()
                    setIsAuth(true)
                    dispatch(setCurrentUser(item))
                    navigate('/home')
                }
            })

            let arr = arrLog.find((item: any) => data.email === item.email && data.password === item.password)

           if(arr === undefined) {
            alert('wrong email or password')
           }
        
        } 
        
      
      };

      console.log(userLog, "userLog")

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input placeholder='Enter your email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
      </div>
      <div>
      <input placeholder='Enter your password' type="password" {...register("password", { minLength: 3, maxLength: 16 })} />
      </div>

      {errors.password && <span style={{color: "red"}}>min-3, max-16</span>}
      {errors.email && <span style={{color: "red"}}>Place enter valid email</span>}


      <input type="submit" />
      <Link to={'/register'}>Registration</Link>
    </form>
        </div>
    )
}