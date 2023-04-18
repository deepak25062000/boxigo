import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/homepage.css'


import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {   FaHome ,FaBoxes } from 'react-icons/fa';
import { GiPathDistance } from "react-icons/gi";
import { AiFillWarning } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
const Homepage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch(' http://localhost:5000/Customer_Estimate_Flow')
            let data = await responce.json()
            setData(data)
        }
        fetchData()
    }, [data])



    let navigate=useNavigate()
    let read = (id) => {
        navigate(`/readmore/${id}`)
    }
    return (
        <div className="homepage">
            <div className="section">

                <div className="section1">
                    <div className="navlists">
                        <ul>
                            <Link to="/">MY MOVIES</Link>
                            <Link to="/my_profile"> MY PROFILE</Link>
                            <Link to="/get_quote"> GET QUOTE</Link>
                            <Link to="/logout">LOGOUT</Link>
                        </ul>
                    </div>
                </div>



                <div className="section2">
                    <h4>My Movies </h4>
                    {
                        data.map(data => (
                            <div className="mainpage">

                                <div className="fromto">

                                    <div className="from">
                                        <label htmlFor=""> <b>FROM</b> </label>
                                        <p>{data.moving_from}</p>
                                    </div>


                                    <div className="icon"><BsFillArrowRightCircleFill color="orangered"/></div>


                                    <div className="to">
                                        <label htmlFor=""><b>TO</b></label>
                                        <p>{data.moving_to}</p>
                                    </div>

                                    <div className="request">
                                        <label htmlFor=""><b>REQUEST</b></label>
                                        <h6>{data.estimate_id}</h6>
                                    </div>
                                </div>


                                <div className="details">

                                    <div className="bhk" >
                                        <div className="icon1">
                                            <FaHome color="orangered"/>&nbsp;&nbsp;
                                            {data.property_size}
                                        </div>
                               
                                    </div>


                                    <div className="uniquieId">
                                        <div className="icon2"> 
                                        <FaBoxes color="orangered"/>&nbsp;&nbsp;
                                        {data.total_items}
                                        </div>
                                    
                                    </div>


                                    <div className="kilometer">
                                        <div className="icon3">
                                      <GiPathDistance color="orangered"/>&nbsp;&nbsp;
                                            {data.distance}
                                        </div>
                                     
                                    </div>


                                    <div className="dates">
                                        <div className="icon4">
                                            <CiDeliveryTruck color="orangered"/>&nbsp;&nbsp;
                                            {data.moving_on}
                                        </div>
                                       </div>


                                    <div className="checkbox">
                                        <input type="checkbox"  />
                                    </div>
                                    <div className="moredetails">
                                    <button className="btn1" onClick={() => read(data.id)}>view move details</button>
                                 
                                    </div>
                                    <div className="quoteawating">
                                  
                                        <button className="btn2">Quote awating</button>
                                    </div>
                                </div>
                                <div className="warning">
                                   
                                    <p> <AiFillWarning color="orangered"/>&nbsp;&nbsp; <b>Disclimer:</b> please Update yoyr Move Date before two days shiftiing</p>
                                </div>
                                <hr />
                            </div>


                        ))
                    }

                </div>

            </div>
        </div>
    );
}

export default Homepage;