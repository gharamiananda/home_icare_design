import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";


const AddCourse = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false);


    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course_home')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            picture: imageURL,
        };

        const res = await fetcher.post("home_course", serviceData);
        toast.success('Data Successfully uploaded')

        console.log(res);
        reset();
        setImageURL("");
    };

    const handleUploadImage = (event) => {
        setLoading(true);
        const image = event.target.files[0];

        const formData = new FormData();

        formData.append("image", image);

        axios
            .post(
                "http://localhost:5000/api/images",
                formData
            )
            .then((res) => {
                setImageURL(res.data.result.filename)

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };





    const deleteCourse = (id) => {
        const proced = window.confirm('Are You Sure??');
        if (proced) {

            const url = `http://localhost:5000/course_home/${id}`;
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
        setToggle(!toggle)
        let statusData;

        if (stat == '1') {
            statusData = { status: "0" }
        }

        if (stat == '0') {
            statusData = { status: "1" }
        }


        console.log(statusData)

        const res = await fetcher.put(`banner-status/${id}`, statusData);
        console.log(res)
        // toast('Data Successfully uploaded')
    }




    return (
        <>
            <div className=''>



                <div className="row">
                    <div className="col-xl-9 mx-auto">

                        <div className="card border-top border-0 border-4 border-info">
                            <div className="card-body">
                                <div className="border p-4 rounded">
                                    <div className="card-title d-flex align-items-center">
                                        <div><i className="bx bxs-user me-1 font-22 text-info" />
                                        </div>
                                        <h5 className="mb-0 text-info">Add Courses</h5>
                                    </div>
                                    <hr />


                                    <form onSubmit={handleSubmit(onSubmit)} >



                                        <div className="row mb-3">
                                            <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Course Title </label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                    {...register("title")}

                                                />
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-xl-9 mx-auto">

                                                <div class="card">
                                                    <div class="card-body">
                                                        <form>
                                                            <input id="image-uploadify" type="file" onChange={handleUploadImage} />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label" />
                                            <div className="col-sm-9">
                                                <button type="submit" className="btn btn-info px-5">Submit</button>
                                            </div>
                                        </div>
                                    </form>




                                </div>
                            </div>
                        </div>
                    </div>
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
                                        courses.map(c =>

                                            <tr>
                                                <th scope="row">1</th>
                                                {/* <td>{chooseData.mainTitle}</td> */}
                                                <td> </td>
                                                <td>
                                                    <img src={`http://localhost:5000/${c.picture}`} className='img-fluid' />

                                                </td>
                                                <td>Otto</td>
                                                <td>
                                                    <button onClick={() => deleteCourse(c._id)} > <i class="fa-solid fa-trash-can"></i></button>
                                                    <Link
                                                        to={`${c._id}`}
                                                    > <i class="fa-solid fa-pen-to-square"></i></Link>

                                                </td>
                                            </tr>
                                        )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCourse;
