import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const AddVision = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [overview, setOverview] = useState([]);
    const [overviewData, setOverviewData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/overview_home')
            .then(res => res.json())
            .then(data => setOverview(data))
    }, []);

    useEffect(() => {
        overview.map(a => setOverviewData(a))
    }, [overview]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const testimonialData = {
            ...data,
            image: imageURL

        };


        const res = await fetcher.post("home_vission", testimonialData);
        toast.success('Data Successfully uploaded!')
        reset();
        setImageURL("");
    };



  
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
                                        <h5 className="mb-0 text-info">Add Mission Vision</h5>
                                    </div>
                                    <hr />


                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row mb-3">
                                            <label htmlFor="firstTitle" className="col-sm-3 col-form-label">First Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter firstTitle"
                                                    {...register("firstTitle")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">First Description</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Address"
                                                    {...register("collageDesc")}
                                                />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label htmlFor="subone" className="col-sm-3 col-form-label">Subtitle One</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subone")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subTwo" className="col-sm-3 col-form-label">Subtitle Two</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subTwo")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subThree" className="col-sm-3 col-form-label">Subtitle Three</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subThree")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subFour" className="col-sm-3 col-form-label">Subtitle Four</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subFour")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subFive" className="col-sm-3 col-form-label">Subtitle Five</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subFive")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subSix" className="col-sm-3 col-form-label">Subtitle Six</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subSix")}

                                                />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label htmlFor="secondTitle" className="col-sm-3 col-form-label">Second Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter secondTitle"
                                                    {...register("secondTitle")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="secondDesc" className="col-sm-3 col-form-label">Second Description</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" rows={3} placeholder="Address"
                                                    {...register("secondDesc")}
                                                />
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

                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{overviewData.mainTitle}</td>

                                        <td> </td>
                                        <td>
                                            <img src={`http://localhost:5000/${overviewData.image}`} className='img-fluid' />

                                        </td>
                                        <td>Otto</td>
                                        <td>
                                            <i class="fa-solid fa-trash-can"></i>
                                            <i class="fa-solid fa-pen-to-square"></i>

                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AddVision;