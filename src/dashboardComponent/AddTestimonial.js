import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";


const AddTestimonial = () => {

    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonial_home')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const testimonialData = {
            ...data

        };


        const res = await fetcher.post("home_testimonial", testimonialData);
        console.log(res);
        reset();
    };
    return (
        <>
            <div className='h-screen w-full flex bg-accent justify-center items-center'>
                <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <div class='card-body'>
                        <h1 className='text-center text-2xl'>Add Testimonial</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class='form-control'>
                                <label htmlFor='username' class='label'>
                                    <span class='label-text'>User Name</span>
                                </label>
                                <input
                                    type='text'
                                    id='username'
                                    class='input input-bordered'
                                    {...register("username")}
                                />
                            </div>
                            <div class='form-control'>
                                <label class='label'>
                                    <span class='label-text'>Review Description</span>
                                </label>
                                <textarea

                                    class='input input-bordered'
                                    {...register("desc")}
                                />
                            </div>



                            <div class='form-control mt-6'>
                                <button
                                    type='submit'
                                    class='btn btn-primary'

                                >
                                    Add Feature
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="row" >
                    <div className="col">
                        <div class="card">
                            <div class="card-body">
                                <table class="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Subtitle</th>

                                            <th scope="col">Image</th>

                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            testimonial.map(c =>

                                                <tr>
                                                    <th scope="row">1</th>
                                                    {/* <td>{chooseData.mainTitle}</td> */}
                                                    <td> </td>
                                                    <td>
                                                        {/* <img src={`http://localhost:5000/${c.image}`} className='img-fluid' /> */}

                                                    </td>
                                                    <td>Otto</td>
                                                    <td>
                                                        <i class="fa-solid fa-trash-can"></i>
                                                        <i class="fa-solid fa-pen-to-square"></i>

                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTestimonial;