import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const API =
  "https://week7-if5e.onrender.com";

const res = await axios.get(
  `${API}/api/bookings`
      );

      const myBookings = res.data.filter(
        (booking) =>
          booking.email === user.email ||
          booking.userId?._id === user._id
      );

      setBookings(myBookings);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const totalBookings = bookings.length;

  const completed = bookings.filter(
    (b) =>
      b.bookingStatus === "Completed" ||
      b.status === "Completed"
  ).length;

  const pending = bookings.filter(
    (b) =>
      b.bookingStatus === "Pending" ||
      b.status === "Pending"
  ).length;

  const paid = bookings.filter(
    (b) => b.paymentStatus === "Paid"
  ).length;

  return (
    <>
      <Navbar />

      <div className="dashboard-page">

        <div className="dashboard-banner">

          <div>

            <h1>
              Welcome back,
              <span> {user.name || "Customer"} 👋</span>
            </h1>

            <p>
              Manage your bookings, payments,
              and services from one place.
            </p>

          </div>

          <Link
            to="/services"
            className="explore-btn"
          >
            Explore Services
          </Link>

        </div>

        <div className="dashboard-stats">

          <div className="stat-card">
            <h2>{totalBookings}</h2>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card success">
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>

          <div className="stat-card warning">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card paid">
            <h2>{paid}</h2>
            <p>Payments</p>
          </div>

        </div>

        <div className="booking-section">

          <h2>Recent Bookings</h2>

          {loading ? (

            <div className="empty-card">
              Loading...
            </div>

          ) : bookings.length === 0 ? (

            <div className="empty-card">

              <h3>No Bookings Yet</h3>

              <p>
                Start by booking your first
                professional service.
              </p>

              <Link
                to="/services"
                className="book-btn"
              >
                Browse Services
              </Link>

            </div>

          ) : (

            <div className="booking-grid">

              {bookings.map((booking) => (

                <div
                  className="booking-card"
                  key={booking._id}
                >

                  <div className="booking-top">

                    <h3>
                      {booking.service ||
                        booking.serviceId?.title}
                    </h3>

                    <span
                      className={
                        booking.paymentStatus === "Paid"
                          ? "paid-badge"
                          : "pending-badge"
                      }
                    >
                      {booking.paymentStatus ||
                        "Pending"}
                    </span>

                  </div>

                  <div className="booking-info">

                    <p>
                      📅 {booking.bookingDate}
                    </p>

                    <p>
                      ⏰ {booking.timeSlot}
                    </p>

                    <p>
                      💰 ₹{booking.amount}
                    </p>

                    <p>
                      Booking ID :
                      {booking.bookingId}
                    </p>

                  </div>

                  {booking.paymentStatus !==
                    "Paid" && (

                    <Link
                      to="/payment"
                      className="pay-btn"
                    >
                      Complete Payment
                    </Link>

                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </>
  );
}

export default Dashboard;