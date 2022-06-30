import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const AddTestimonial = () => {
    const [toggle, setToggle] = useState(false);

    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonial_home')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [toggle])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const testimonialData = {
            ...data, status: "1"

        };


        const res = await fetcher.post("home_testimonial", testimonialData);
        console.log(res);
        reset();
    };






    const deleteCourse = (id) => {
        const proced = window.confirm('Are You Sure??');
        if (proced) {

            const url = `http://localhost:5000/testimonial_home_delete/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged == true) {
                        toast.success('Delete Successfully')
                        reset();
                        setToggle(!toggle)
                    }
                    else {
                        toast.error('Fail to update data')
                        console.log(data.status);
                    }
                })

        }

    }



    const statusChange = async (id, stat) => {

        let statusData;

        if (stat == '1') {
            statusData = { status: "0" }
        }

        if (stat == '0') {
            statusData = { status: "1" }
        }


        console.log(statusData)

        const res = await fetcher.put(`award-status/${id}`, statusData);
        setToggle(!toggle)
    }


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
                                                        <button onClick={() => statusChange(c._id, c.status)}>{c.status == '1' ? "Active" : "Inactive"}</button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => deleteCourse(c._id)} > <i class="fa-solid fa-trash-can"></i></button>
                                                        <Link
                                                            to={`${c._id}`}
                                                        > <i class="fa-solid fa-pen-to-square"></i></Link>

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