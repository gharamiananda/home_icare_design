import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(auth, data.email, data.password);


    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='email' {...register("email", { required: true, maxLength: 20 })} />
            <input text='password' {...register("password")} />

            <input type="submit" value='Submit' />
        </form>
    );
};

export default Register;