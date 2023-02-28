import React, { useEffect, useState } from "react";
import '../css/transaction.css'
import { Table  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTransaction } from "../FetchApi";

function TransactionComponent() {

   const[data, setData] = useState([
    {
        _id: 0,
        name: '',
        rooms: [],
        start_date: '',
        end_date: '',
        price: 0,
        payment_method: 0,
        status: ''
    }
   ])

   useEffect(() => {
    getTransaction((res) => {
        console.log(res);
        if(res.statusCode === 200) {
            setData(res.list)
        }
    })
   }, [])
   
  return (
    <div className="hotel-detail container mt-4 mb-4">
        <div className="transaction-hearder">
            <div className="header-above">
                <h1 className="transaction-title">Transaction</h1>
                <div className="transaction-btn">
                    <button className="btn btn-primary btn-home">Home page</button>
                    <button className="btn btn-danger btn-logout">Logout</button>
                </div>
            </div>

            <div className="header-down">
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-bed"></i></span> Stays
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-plane"></i></span> Flights
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-car"></i></span> Car rentals
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-bed"></i></span> Attractions
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-taxi"></i></span> Airport taxis
                </button>
            </div>
        </div>

        <div className="transaction-content">
            <div className="transaction-table">
                <h2 className="transaction-table-title">Your transaction</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th style={{minWidth: '170px'}}>Hotel</th>
                        <th>Room</th>
                        <th style={{minWidth: '120px'}}>Date</th>
                        <th>Price</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((obj) => {
                                return(
                                    <tr>
                                        <td>#</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.rooms.map((room)=>{return(<span>{room},</span>)})}</td>
                                        <td>{obj.startDate+' - '+obj.endDate}</td>
                                        <td>${obj.price}</td>
                                        <td>{obj.payment}</td>
                                        <td>
                                            <button style={{fontSize: '0.8em'}} className={obj.status=='Booked'? 'btn btn-danger' : `${obj.status==='Checkout'? 'btn btn-success' : 'btn btn-primary'}`}>
                                                {obj.status}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>

        <div className="transaction-footer">

        </div>
    </div>
  );
}

export default TransactionComponent;