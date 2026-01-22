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

const Header = () => (
  <div className="header">Flight Booking App</div>
);

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
  const [showFlights, setShowFlights] = useState(false);

  return (
    <div>
      <button
        className="search-flight"
        onClick={() => setShowFlights(true)}
      >
        SEARCH FLIGHT
      </button>

      {showFlights &&
        flights.map((f) => (
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
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: ""
  });

  const submit = () => {
    if (
      !form.first ||
      !form.last ||
      !form.email ||
      !form.phone
    ) {
      alert("Invalid input");
      return;
    }
    navigate("/confirmation");
  };

  return (
    <div>
      <h3>Booking Confirmation for Flight Air India (AI-275)</h3>

      <input
        type="text"
        placeholder="First Name"
        onChange={(e) =>
          setForm({ ...form, first: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          setForm({ ...form, last: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Email ID"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Mobile Number"
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <button onClick={submit}>CONFIRM BOOKING</button>
    </div>
  );
};

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>Passenger: Test User</p>
      <p>Flight: Air India (AI-275)</p>
      <p>Price: RS. 3600</p>

      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <BrowserRouter>
        <Header />

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
