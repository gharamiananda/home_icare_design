import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';


const AddWhyChooseUs = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);

    const [choose, setChoose] = useState([]);
    const [chooseData, setChooseData] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/choose_home')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    useEffect(() => {
        choose.map(a => setChooseData(a))
    }, [choose])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL,
        };

        const res = await fetcher.post("home_choose", serviceData);
        console.log(res);
        toast.success("Data successfully updated")
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


        <div className='addbanner'>

            {/* <img src={banner1} /> */}

            <div className="row">
                <div className="col-xl-9 mx-auto">

                    <div className="card border-top border-0 border-4 border-info">
                        <div className="card-body">
                            <div className="border p-4 rounded">
                                <div className="card-title d-flex align-items-center">
                                    <div><i className="bx bxs-user me-1 font-22 text-info" />
                                    </div>
                                    <h5 className="mb-0 text-info">Add Coose Us</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row mb-3">
                                        <label htmlFor="mainTitle" className="col-sm-3 col-form-label">Main Title </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" placeholder="Enter Your Name"
                                                {...register("mainTitle")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="subTitileOne" className="col-sm-3 col-form-label">Subtitle One</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" placeholder="Enter Your Name"
                                                {...register("subTitileOne")}

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="subTitileTwo" className="col-sm-3 col-form-label">Subtitle Two</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" placeholder="Enter Your Name"
                                                {...register("subTitileTwo")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="subTitileThree" className="col-sm-3 col-form-label">Subtitle Three</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" placeholder="Enter Your Name"
                                                {...register("subTitileThree")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="subTitileFour" className="col-sm-3 col-form-label">Subtitle Four</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" placeholder="Enter Your Name"
                                                {...register("subTitileFour")}
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
                                        <td>{chooseData.mainTitle}</td>
                                        <td> </td>
                                        <td>
                                            <img src={`http://localhost:5000/${chooseData.image}`} className='img-fluid' />

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
        </div>


    );
};

export default AddWhyChooseUs;
