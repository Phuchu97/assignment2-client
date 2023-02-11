import React, { useState } from "react";
import '../css/hotel-detail.css'
import '../css/booking.css'
import { DateRange } from "react-date-range";
import { Row, Col, Form, FormControl, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookingFormComponent() {
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(
        {
            name: 'Alagon Saigon Hotel & Spa',
            marketing: 'Book a stay over $400 at this property and get a free airport taxi',
            price: 350,
            count_night: 1,
            description: 'It was our last stop for our South East Asia trip this year after Cambodia and Hanoi, Ho Chi Minh city was an amazingly modern city to my surprise! Upon arrival to the hotel, the lobby area was already out of my expectations with more than necessary marbles everywhere! It was a little "Over the top" for some folks perhaps but they really tried to imitate Las Vegas style hotels such as the Wynn...'
        }
    )
    const [range, setRange] = useState([
        {
          startDate: '',
          endDate: '',
          key: 'selection',
        }
    ])
    const[totalBills, setTotalBills] = useState(0);
    const[paymentMethod, setPaymentMethod] = useState('Select Payment Method')
    const[listRoom, setListRoom] = useState([
        {
            name: 'Budget Double Room',
            description: 'Pay nothing until September 04, 2022',
            max_people: 2,
            price: 350,
            list_number_room: [104,201,303]
        },
        {
            name: 'Budget Twin Room',
            description: 'Free cancellation before September 06, 2022',
            max_people: 2,
            price: 400,
            list_number_room: [205,201,405]
        }
    ]);

    const handleSelectDatePicker = (date) => {
        setRange(date)
    }

    const handleSelectDropdown = (method) => {
        setPaymentMethod(method)
    }

    const moveToTransaction = () => {
        navigate('/transaction')
    }
   
  return (
    <div className="hotel-detail container mt-4 mb-4">
        <div className="hotel-detail-footer row">
            <div className="hotel-detail-footer-left col-8">
                <h1 className="footer-left-name hotel-name">{hotel.name}</h1>
                <p className="footer-description">{hotel.description}</p>
            </div>

            <div className="hotel-detail-footer-right col-4">
                <div className="footer-right-content" style={{height: '100%',alignSelf: 'center'}}>
                    <div className="footer-right-information">
                        <h1 className="footer-right-price">
                            ${hotel.price } 
                        </h1>
                        <h1 className="footer-right-count-night">
                            {'( '+hotel.count_night+' nights )'}
                        </h1>
                    </div>

                    <div className="footer-right-button">
                        <button className="btn btn-primary">Reserve of Book now</button>
                    </div>
                </div>
            </div>
        </div>

        <Row className="mt-4">
            <Col lg={5} md={5}>
                <h2 className="form-title">Dates</h2>
                <DateRange
                    ranges={range}
                    onChange={item => handleSelectDatePicker([item.selection])}
                    direction="horizontal"
                    months={2}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                />
            </Col>

            <Col lg={7} md={7}>
                <h2 className="form-title">Reserve Info</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Fullname:</Form.Label>
                        <Form.Control className="booking-form-right-input" type="text" placeholder="Full name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control className="booking-form-right-input" type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Phone Number:</Form.Label>
                        <Form.Control className="booking-form-right-input" type="number" placeholder="Phone Number" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Identity Card Number:</Form.Label>
                        <Form.Control className="booking-form-right-input" type="number" placeholder="Card Number" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Col>
        </Row>

        <div>
            <h2 className="form-title">Selected Rooms</h2>
            <Row>
                {
                    listRoom.map((obj) => {
                        return(
                            <Col lg={6} md={6}>
                                <Row>
                                    <Col>
                                        <h3>{obj.name}</h3>
                                        <p>{obj.description}</p>
                                        <p>Max people: {obj.max_people}</p>
                                        <p>${obj.price}</p>
                                    </Col>
                                    
                                    <Col>
                                        <ul className="list-checkbox">
                                            {
                                                obj.list_number_room.map((obj2) => {
                                                    return(
                                                        <li >
                                                            <p>{obj2}</p>
                                                            <input type="checkbox" />
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>

        <Row className="payment">
                <h2 className="form-title">Total Bills: ${totalBills}</h2>
                <div style={{display: 'flex'}}>
                    <Dropdown className="dropdown-payment" onSelect={handleSelectDropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {paymentMethod}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey={'Visa Card'}>Visa Card</Dropdown.Item>
                            <Dropdown.Item eventKey={'Chuyển khoản trực tiếp'}>Chuyển khoản trực tiếp</Dropdown.Item>
                            <Dropdown.Item eventKey={'Thanh toán qua ví điện tử'}>Thanh toán qua ví điện tử</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button onClick={moveToTransaction} className="btn btn-primary btn-reserve">Reserve Now</button>
                </div>
        </Row>

    </div>
  );
}

export default BookingFormComponent;