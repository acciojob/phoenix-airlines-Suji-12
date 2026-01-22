
import React from "react";
import './../styles/App.css';
const flights = [
  {
    id: 1,
    airline: "Air India",
    flightNo: "AI-275",
    source: "Mumbai",
    destination: "Bengaluru",
    departure: "04:00",
    arrival: "06:00",
    price: 3600
  },
  {
    id: 2,
    airline: "Air India",
    flightNo: "AI-275",
    source: "Mumbai",
    destination: "Bengaluru",
    departure: "04:00",
    arrival: "06:00",
    price: 3600
  }
];
const App = () => {
  const [page, setPage] = useState("home");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
    phone: ""
  });
  return (
    <div>
        {/* Do not remove the main div */}
    {/* HEADER */}
      <div className="header">Flight Booking App</div>

      {/* HOME */}
      {page === "home" && (
        <div>
          <h2>Welcome to Flight Booking App</h2>
          <button onClick={() => setPage("search")}>
            SEARCH FLIGHTS HERE
          </button>
        </div>
      )}

      {/* FLIGHT SEARCH */}
      {page === "search" && (
        <div>
          <button className="search-flight">SEARCH FLIGHT</button>

          {flights.map((f) => (
            <div key={f.id} className="flight-card">
              <p>{f.departure} {f.source}</p>
              <p>{f.airline} ({f.flightNo})</p>
              <p>{f.arrival} {f.destination}</p>
              <button
                className="book-flight"
                onClick={() => {
                  setSelectedFlight(f);
                  setPage("booking");
                }}
              >
                RS. {f.price}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* BOOKING */}
      {page === "booking" && (
        <div>
          <h3>Booking Confirmation for Flight Air India (AI-275)</h3>

          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setUser({ ...user, first: e.target.value })}
          />

          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setUser({ ...user, last: e.target.value })}
          />

          <input
            type="text"
            placeholder="Email ID"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />

          <button
            onClick={() => {
              if (
                user.first &&
                user.last &&
                user.email &&
                user.phone
              ) {
                setPage("confirmation");
              } else {
                alert("All fields required");
              }
            }}
          >
            CONFIRM BOOKING
          </button>
        </div>
      )}

      {/* CONFIRMATION */}
      {page === "confirmation" && (
        <div>
          <h2>Booking Confirmed</h2>
          <p>{user.first} {user.last}</p>
          <p>{selectedFlight.airline} - {selectedFlight.flightNo}</p>
          <p>RS. {selectedFlight.price}</p>
          <button onClick={() => setPage("home")}>
            HOME
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
