import React from 'react';
import '../App.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/UserSlice'
import { useSelector } from 'react-redux';
import { IUserData } from '../model';

interface IFormInput {
  name: string;
  password: string;
  age: number;
  gender: GenderEnum;
  email: string,
  id?:number
}

enum GenderEnum {
  female = "female",
  male = "male",
}



const Register: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const selector: any = useSelector((state:any) =>  state.user.users)


  const arrEmail: any = []

  if (selector.length > 0) {
     selector.map((item: any) => arrEmail.push(item.email))
   }

  

  const { register, handleSubmit,reset,formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {

    if (arrEmail.length === 0) {
      dispatch(setUser(data))

      reset()
      navigate('/')
      return alert('Are you registered !')
    } else if (arrEmail.length > 0) {
     arrEmail.map((item: any) => {
        if(item === data.email) {
        return  alert('email in unique')
        } else {
          dispatch(setUser(data))
          reset()
          navigate('/')
          return alert('Are you registered !')
        }
      })
    }
  
  }



  return (
    <div className="App">
      <h3>Registration</h3>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input placeholder='Enter your name' {...register("name", { required: true, maxLength: 20,minLength: 3})} />
      </div>
      <div>
      <input placeholder='Enter your email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
      </div>
      <div>
      <input placeholder='Enter your age' type="number" {...register("age", { min: 18, max: 99 })} />
      </div>
      <div>
      <input placeholder='Enter your password' type="password" {...register("password", { minLength: 3, maxLength: 16 })} />
      </div>

      {errors.name && <span style={{color: "red"}}>Enter valid name</span>}
      {errors.password && <span style={{color: "red"}}>password in min-3, max-16</span>}
      {errors.age && <span style={{color: "red"}}>age in min 18, max 99</span>}
      {errors.email && <span style={{color: "red"}}>Place enter valid email</span>}

      <div>
      <label>Gender Selection</label>
      <select {...register("gender")} >
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      
      </div>

      <button type='submit'>send</button>
      <Link to={'/'} >Login</Link>
    </form>
    </div>
  );
}

export default Register;
