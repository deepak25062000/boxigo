import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readmore.css'


const ReadMore = () => {
    let [data, setData] = useState([])
    let [details, setDetails] = useState([])
    let param = useParams()

    useEffect((id) => {
        let fetchdata = async () => {
            let responce = await fetch(`http://localhost:5000/Customer_Estimate_Flow/${param.id}`)
            let data = await responce.json()
            setData(data)
        }
        fetchdata()

    })


    useEffect(() => {
        let fetchdata = async () => {
            let responce = await fetch(`http://localhost:5000/Customer_Estimate_Flow/`)
            let data1 = await responce.json()
            setDetails(data1)

        }
        fetchdata()
    })
    return (
        <div className="readmore">

            <div className="info">
                <h3>Additional imformation</h3>
                <button className="btn3">edit Additional info</button>
            </div>

            <div className="div">
                <h6>Test Data</h6>
            </div>

            <div className="housedata">
                <h3>House Deatails</h3>
                <button className="btn4">edit house details</button>
            </div>


            <h4 className="exits" style={{ color: "orangered" }}>Existing house  Details</h4>

            <div className="existinghousedetails">
                <div className="floorno">
                    <p><b>FloorNo.</b> <br /> {data.old_floor_no}</p>
                </div>
                <div className="elevetor">
                    <p><b>Elevator Availability. </b><br />{data.old_elevator_availability}</p>
                </div>
                <div className="distanceelevator">
                    <p><b>Distance From Elevator/Staircase to truck </b><br />{data.old_parking_distance}</p>
                </div>
            </div>

            <h4 className="new" style={{ color: "orangered" }}>New house  Details</h4>
            <div className="newhousedetails">
                <div className="floorno">
                    <p><b>FloorNo. </b><br />{data.new_floor_no}</p>
                </div>
                <div className="elevetor">
                    <p><b>Elevator Availability. </b><br />{data.new_elevator_availability}</p>
                </div>
                <div className="distanceelevator">
                    <p><b>Distance From Elevator/Staircase to truck </b><br />{data.new_parking_distance}</p>

                </div>
            </div>
            <div className="inventory">
                <p><b>Inventory Details</b></p>
                <button className="btn5">Edit Inventory</button>
            </div>






            <div className="productdetails">
                <div className="wrapper">
                    <div className="collapsible">
                        <input type="checkbox" id="collapsible-head" />
                        <label for="collapsible-head"> furniture</label>
                        <div className="collapsible-text">
                            <div className="sofa">

                                {
                                    details.map(x => (

                                        <div className="details">
                                            <div className="sofa">
                                                <h1>SOFA</h1>
                                                <h6>1 Seater Sofa <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[1]
                                                        .type[2]["option"]
                                                }</h6>
                                                <h6>2 seater Sofa <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[1]
                                                        .type[2]["option"]
                                                }</h6>
                                                <h6> 3 Seater Sofa <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[1]
                                                        .type[1]["option"]
                                                }</h6>
                                                <h6>Sofa come bed <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[0]
                                                        .type[0]["option"]
                                                }</h6>
                                                <h6> Sectional Sofa <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[0]["order"]
                                                }</h6>
                                                <h6> sofa Footrest <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[1][
                                                    "displayName"
                                                    ]
                                                }</h6>
                                                <h6>Ottoman <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[1]
                                                        .type[2]["option"]
                                                }</h6>

                                                <h6>Sofa Footrest</h6>


                                            </div>

                                            <div className="table">
                                                <h1>TABLE</h1>
                                                <h6>Centre/Coffee <br />{
                                                    x.items.inventory[0]
                                                        .category[1].items[1]
                                                        .type[0]["option"]
                                                }</h6>
                                                <h6>Teapoy <br />{
                                                    x.items.inventory[0]
                                                        .category[1].items[1]
                                                        .type[0]["option"]
                                                }</h6>
                                                <h6>Side Bar <br />{
                                                    x.items.inventory[0]
                                                        .category[1].items[1]
                                                        .type[0]["option"]
                                                }</h6>
                                                <h6>4 Seat dining Table <br />{

                                                    x.items.inventory[0]
                                                        .category[1].items[6].
                                                        type[1]["option"]

                                                }</h6>
                                                <h6>6 Seaters Dining Table <br />{
                                                    x.items.inventory[0]
                                                        .category[1].items[6].
                                                        type[2]["option"]
                                                }</h6>
                                                <h6> Iron Board <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[3]["order"]
                                                }</h6>
                                                <h6>Plastic Table <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[4][
                                                    "displayName"
                                                    ]
                                                }</h6>
                                                <h6>Drafting table <br />{
                                                    x.items.inventory[0]
                                                        .category[0].items[4]["order"]
                                                }</h6>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className="productdetails1">
                <div className="wrapper1">
                    <div className="collapsible1">
                    <input type="checkbox" id="collapsible-head1" />
                        <label for="collapsible-head1"> eletronics</label>
                        <div className="collapsible-text1">
                        </div>
                    </div>
                </div>
            </div>

            <div className="productdetails2">
                <div className="wrapper2">
                    <div className="collapsible2">
                    <input type="checkbox" id="collapsible-head2" />
                        <label for="collapsible-head2"> Vechicle</label>
                        <div className="collapsible-text2">
                        </div>
                    </div>
                </div>
            </div>

            <div className="productdetails3">
                <div className="wrapper3">
                    <div className="collapsible3">
                    <input type="checkbox" id="collapsible-head3" />
                        <label for="collapsible-head3"> Boxis/trolley</label>
                        <div className="collapsible-text3">
                        </div>
                    </div>
                </div>
            </div>

            <div className="productdetails4">
                <div className="wrapper4">
                    <div className="collapsible4">
                    <input type="checkbox" id="collapsible-head4" />
                        <label for="collapsible-head4"> Custom Items</label>
                        <div className="collapsible-text4">
                        </div>
                    </div>
                </div>
            </div>

           



        </div>
    );
}

export default ReadMore;