import React, {useState,useEffect} from "react";
import PropertyAreaComponent from "./Property-Area";
import PropertyTypeComponent from "./Property-type";
import GuestsLoveComponent from "./Guests-love";
import { DateRange } from "react-date-range";
import { getHotels, searchHotel } from "../../FetchApi";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../../css/homepage.css';
import { Navbar, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePageComponent() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [openRange, setOpenRange] = useState(false);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(0);
  const [hotels, setHotels] = useState([]);
  const [switchSearch, setSwitchSearch] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    }
  ]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOpenRange = () => {
    setOpenRange(true)
  }

  const handleMouseDaterange = () => {
    setOpenRange(false)
  }

  const handleSelectDatePicker = (date) => {
    setRange(date)
  }

  const handleSearch = () => {
    let data = {
      city: city,
      startDate: range[0].startDate,
      endDate: range[0].endDate,
      roomNumber: room
    }
    setSwitchSearch(true)
    searchHotel((res) => {
      console.log(res);
      setHotels(res)
    },data)
  }

  const handleMoveToLogin = () => {
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    getHotels((data) => {
      setHotels(data);
    })
  }, []);

  return (
    <div className="home-page">
        <Navbar>
          <Navbar.Brand style={{fontSize: '2em'}}>
            <h1>Home Page</h1>
          </Navbar.Brand>
          <Form inline onSubmit={handleSubmit} style={{width: '75%', display: 'flex'}}>
            <div className="">
            <Row style={{width: '100%'}}>
              <Col lg={3}  md={3}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div className="nav-form-icon"><i class="fa-solid fa-bed"></i></div>
                  <FormControl
                    type="text"
                    placeholder="Tìm khách sạn"
                    value={city}
                    className="mr-sm-2 nav-form-input"
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
              </Col>

              <Col lg={3} md={3} style={{alignSelf: 'center'}}>
                <div 
                  className="search-date"
                  onMouseOver={handleOpenRange}
                  onMouseLeave={handleMouseDaterange}
                >
                  <div className="nav-form-icon"><i class="fa-solid fa-calendar-days"></i></div>
                  <FormControl
                    type="text"
                    className="mr-sm-2 nav-form-input"
                    value={`${range[0].startDate === null? 'Start' : format(range[0].startDate, 'dd/MM/yyyy')} to ${range[0].endDate === null? 'End' : format(range[0].endDate, 'dd/MM/yyyy')}`}
                  />
                  {openRange && 
                    <div className="date-range">
                      <DateRange
                        ranges={range}
                        onChange={item => handleSelectDatePicker([item.selection])}
                        direction="horizontal"
                        months={2}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                      />
                    </div>
                  }
                </div>
              </Col>

              <Col lg={6} md={6} className="count-passenger">
                <div className="count-passenger-content">
                      <div className="count-passenger-content-item">
                        <div className="count-passenger-icon"><i class="fa-solid fa-person"></i></div>
                        <FormControl
                          type="number"
                          min={0}
                          value={adult}
                          className="count-passenger-input"
                        />
                        <span className="count-passenger-name">adult</span>
                      </div>
                        <div className="count-passenger-dot"></div>
                      <div className="count-passenger-content-item">
                        <FormControl
                          type="number"
                          min={0}
                          value={children}
                          className="count-passenger-input"
                        />
                        <span className="count-passenger-name">children</span>
                      </div>
                        <div className="count-passenger-dot"></div>
                      <div className="count-passenger-content-item">
                        <FormControl
                          type="number"
                          min={0}
                          value={room}
                          className="count-passenger-input"
                          onChange={(event) => setRoom(event.target.value)}
                        />
                        <span className="count-passenger-name">room</span>
                      </div>
                </div>
              </Col>
            </Row>
            </div>
          </Form>
          <Button onClick={handleSearch} style={{fontSize: '2em'}} type="submit">Search</Button>
          <Button variant="danger" onClick={handleMoveToLogin} style={{fontSize: '2em'}}>
              Logout
          </Button>
        </Navbar>
        {
          !switchSearch && 
          <div>
            <PropertyAreaComponent hotels={hotels} />
            <PropertyTypeComponent hotels={hotels} />
          </div>
        }
        <GuestsLoveComponent hotels={hotels} search={switchSearch} />
    </div>
  );
}

export default HomePageComponent;