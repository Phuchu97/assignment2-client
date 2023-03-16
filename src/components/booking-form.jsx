import React, { useState, useEffect } from "react";
import '../css/hotel-detail.css'
import '../css/booking.css'
import { DateRange } from "react-date-range";
import { Row, Col, Form, Dropdown } from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";
import format from "date-fns/format";
import { getHotelDetail, getRoomWithHotelId, checkDateRoom, createTransaction } from "../FetchApi";
import Checkbox from '@mui/material/Checkbox';

function BookingFormComponent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[card, setCard] = useState('');
    const[roomsChecked, setRoomsChecked] = useState([]);
    const [hotel, setHotel] = useState(
        {
            name: '',
            price: 350,
            title: ''
        }
    );
    const [range, setRange] = useState([
        {
          startDate: null,
          endDate: null,
          key: 'selection',
        }
    ]);
    const[totalBills, setTotalBills] = useState(0);
    const[paymentMethod, setPaymentMethod] = useState('Select Payment Method')
    const[listRoom, setListRoom] = useState([
        {
            title: '',
            description: '',
            maxPeople: 0,
            price: 0,
            rooms: [],
            endDate: null,
            startDate: null,
        }
    ]);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleSelectDatePicker = (date) => {
        setRange(date);
        let startDate = new Date(date[0].startDate).getTime();
        let endDate = new Date(date[0].endDate).getTime();
        if(startDate !== endDate) {
            checkDateRoom((data) => {
                if(data.rooms[0] !== undefined) {
                    setListRoom(data.rooms)
                } else {
                    setListRoom([{
                        title: '',
                    }])
                }
            }, {startDate, endDate, hotelId: id});
        }
    }

    const handleSelectDropdown = (method) => {
        setPaymentMethod(method)
    }

    const moveToTransaction = () => {
        let data = {
            userId: localStorage.userId,
            hotelId: id,
            hotel: hotel.name,
            rooms: roomsChecked,
            startDate: format(new Date(range[0].startDate), 'dd/MM/yyyy'),
            endDate: format(new Date(range[0].endDate), 'dd/MM/yyyy'),
            price: totalBills,
            payment: paymentMethod,
            status: 'Booked',
            email: email,
            name: name,
            phone: phone,
            card: card
        }
        createTransaction((res) => {
            if(res.statusCode === 200) {
                alert('Đặt phòng thành công!')
                navigate('/transaction');
            } else {
                alert('Có lỗi trong quá trình xử lý!')
            }
        }, data)
    }

    const hanldeGetDetail = (data) => {
        if(data.statusCode === 200) {
            setHotel(data.hotel)
        }
    }

    const hanldeGetRoom = (data) => {
        if(data.statusCode === 200) {
            console.log(data.hotel);
            setListRoom(data.hotel)
        }
    }

    const hanldechecked = (e, item, price) => {
        if(e.target.checked) {
            setRoomsChecked([...roomsChecked, item]);
            setTotalBills(totalBills + price)
        } else {
            let roomsFIll = roomsChecked.filter(room => room !== item);
            setRoomsChecked([...roomsFIll])
            setTotalBills(totalBills - price)
        }
    }
 
    useEffect(() => {
        getHotelDetail(hanldeGetDetail, {id: id});
        getRoomWithHotelId(hanldeGetRoom, {idHotel: id});
    }, []);
   
  return (
    <div className="hotel-detail container mt-4 mb-4">
        <div className="hotel-detail-footer row">
            <div className="hotel-detail-footer-left col-8">
                <h1 className="footer-left-name hotel-name">{hotel.name}</h1>
                <p className="footer-description">{hotel.title}</p>
            </div>

            <div className="hotel-detail-footer-right col-4">
                <div className="footer-right-content" style={{height: '100%',alignSelf: 'center'}}>
                    <div className="footer-right-information">
                        <h1 className="footer-right-price">
                            ${hotel.price} 
                        </h1>
                        <h1 className="footer-right-count-night">
                            (One night)
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
                    minDate={new Date()}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                />
            </Col>

            <Col lg={7} md={7}>
                <h2 className="form-title">Reserve Info</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Fullname:</Form.Label>
                        <Form.Control 
                            className="booking-form-right-input" 
                            type="text" 
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control 
                            className="booking-form-right-input" 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Phone Number:</Form.Label>
                        <Form.Control 
                            className="booking-form-right-input" 
                            type="number" 
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Identity Card Number:</Form.Label>
                        <Form.Control 
                            className="booking-form-right-input" 
                            type="number" 
                            placeholder="Card Number"
                            value={card}
                            onChange={(e) => setCard(e.target.value)}
                        />
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
                                        <h3>{obj.title}</h3>
                                        <p>Max people: {obj.maxPeople}</p>
                                        <p>Price: ${obj.price}</p>
                                    </Col>
                                    
                                    <Col>
                                        <ul className="list-checkbox">
                                            {
                                                obj.rooms.map((obj2) => {
                                                    return(
                                                        <li>
                                                            <p>{obj2}</p>
                                                            <Checkbox 
                                                                onChange={(e) => hanldechecked(e, obj2, obj.price)}
                                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} 
                                                                {...label} 
                                                                color="secondary"
                                                            />
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
                            <Dropdown.Item eventKey={'Chuyển khoản trực tiếp'}>Cash</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button onClick={moveToTransaction} className="btn btn-primary btn-reserve">Reserve Now</button>
                </div>
        </Row>

    </div>
  );
}

export default BookingFormComponent;