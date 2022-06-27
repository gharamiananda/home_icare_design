import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";

const AddReward = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [certi, setCeti] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/home-certificate')
            .then(res => res.json())
            .then(data => setCeti(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            picture: imageURL,
        };

        const res = await fetcher.post("home_certificate", serviceData);
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
                                        <h5 className="mb-0 text-info">Add Certificate</h5>
                                    </div>
                                    <hr />


                                    <form onSubmit={handleSubmit(onSubmit)} >






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
                                        certi.map(c =>

                                            <tr>
                                                <th scope="row">1</th>
                                                {/* <td>{chooseData.mainTitle}</td> */}
                                                <td> </td>
                                                <td>
                                                    <img src={`http://localhost:5000/${c.picture}`} className='img-fluid' />

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
        </>
    );
};

export default AddReward;
