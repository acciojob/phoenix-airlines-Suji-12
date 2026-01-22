import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "../styles/App.css";

const flights = [
  {
    id: 1,
    airline: "Air India",
    flightNo: "AI-275",
    source: "Mumbai",
    destination: "Bengaluru",
    price: 3600
  }
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to Flight Booking App</h2>
      <button onClick={() => navigate("/flight-search")}>
        SEARCH FLIGHTS HERE
      </button>
    </div>
  );
};

const FlightSearch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="search-flight">SEARCH FLIGHT</button>

      {flights.map((f) => (
        <div key={f.id}>
          <p>{f.airline} ({f.flightNo})</p>
          <p>{f.source} → {f.destination}</p>
          <button
            className="book-flight"
            onClick={() => navigate("/flight-booking")}
          >
            RS. {f.price}
          </button>
        </div>
      ))}
    </div>
  );
};

const FlightBooking = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  return (
    <div>
      <input type="text" placeholder="First Name"
        onChange={(e) => setUser({ ...user, first: e.target.value })} />
      <input type="text" placeholder="Last Name"
        onChange={(e) => setUser({ ...user, last: e.target.value })} />
      <input type="text" placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="text" placeholder="Mobile"
        onChange={(e) => setUser({ ...user, phone: e.target.value })} />

      <button onClick={() => navigate("/confirmation")}>
        CONFIRM BOOKING
      </button>
    </div>
  );
};

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Booking Confirmed</h2>
      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <BrowserRouter>
        <div className="header">Flight Booking App</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
