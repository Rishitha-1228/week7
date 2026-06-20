import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(storedBookings);

  }, []);

  const user =
    JSON.parse(localStorage.getItem("user"));

  const paymentStatus =
    localStorage.getItem("paymentStatus");

  const totalBookings = bookings.length;

  const completedBookings =
    bookings.filter(
      (booking) =>
        booking.status === "Completed"
    ).length;

  const pendingBookings =
    bookings.filter(
      (booking) =>
        booking.status === "Pending"
    ).length;

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>
          Welcome Back 👋 {user?.name || "User"}
        </h1>

        <div className="stats-grid">

          <div className="stat-box">
            <h2>📅</h2>
            <h1>{totalBookings}</h1>
            <p>Total Bookings</p>
          </div>

          <div className="stat-box">
            <h2>✅</h2>
            <h1>{completedBookings}</h1>
            <p>Completed</p>
          </div>

          <div className="stat-box">
            <h2>⏳</h2>
            <h1>{pendingBookings}</h1>
            <p>Pending</p>
          </div>

          <div className="stat-box">
            <h2>💳</h2>
            <h1>
              {paymentStatus === "Paid"
                ? "Paid"
                : "Pending"}
            </h1>
            <p>Payment</p>
          </div>

        </div>

        <div className="dashboard-section">

          <div className="dashboard-card">

            <h2>📋 My Bookings</h2>

            {bookings.length === 0 ? (

              <p>No Bookings Yet</p>

            ) : (

              bookings.map((booking, index) => (

                <div
                  key={index}
                  className="booking-item"
                >

                  <h3>
                    {booking.service ||
                      "Service Booking"}
                  </h3>

                  <p>
                    📅 {booking.bookingDate}
                  </p>

                  <p>
                    ⏰ {booking.timeSlot}
                  </p>

                  <p>
                    Status:
                    <strong
                      style={{
                        color:
                          booking.status ===
                          "Completed"
                            ? "limegreen"
                            : "orange",
                      }}
                    >
                      {" "}
                      {booking.status}
                    </strong>
                  </p>

                  <hr />

                </div>

              ))

            )}

          </div>

          <div className="dashboard-card">

            <h2>🔔 Notifications</h2>

            {paymentStatus === "Paid" ? (
              <>
                <p>✅ Payment Successful</p>
                <p>✅ Booking Confirmed</p>
                <p>🎉 Service Activated</p>
              </>
            ) : (
              <>
                <p>⏳ Payment Pending</p>
                <p>📅 Booking Created</p>
              </>
            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;