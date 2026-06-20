import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Logged in user
    const loggedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (loggedUser) {
      setUser(loggedUser);
    }

    // Current User Email
    const currentUser =
      localStorage.getItem("currentUser");

    // All bookings
    const allBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    // Filter only current user bookings
    const userBookings =
      allBookings.filter(
        (booking) =>
          booking.userEmail === currentUser
      );

    setBookings(userBookings);
  }, []);

  return (
    <>
      <Navbar />

      <div className="profile-container">

        {/* Profile Card */}

        <div className="profile-card">

          <img
            src="https://i.pravatar.cc/250?img=32"
            alt="profile"
            className="profile-image"
          />

          <h1>
            {user.name || "Guest User"}
          </h1>

          <p className="role">
            Premium Customer
          </p>

          <div className="profile-info">

            <div className="info-box">
              <h3>Email</h3>
              <p>{user.email}</p>
            </div>

            <div className="info-box">
              <h3>Total Bookings</h3>
              <p>{bookings.length}</p>
            </div>

          </div>

        </div>

        {/* Booking History */}

        <div className="booking-history">

          <h1>
            📋 Booking History
          </h1>

          {bookings.length === 0 ? (

            <div className="history-card">
              <h3>
                No Bookings Found
              </h3>

              <p>
                Start booking services
                to see history here.
              </p>
            </div>

          ) : (

            bookings.map(
              (booking, index) => (

                <div
                  key={index}
                  className="history-card"
                >

                  <div className="history-top">

                    <h3>
                      {booking.service ||
                        "Web Development"}
                    </h3>

                    <span
                      className={
                        booking.status ===
                        "Completed"
                          ? "status-completed"
                          : "status-pending"
                      }
                    >
                      {booking.status}
                    </span>

                  </div>

                  <p>
                    📅 Date :
                    {" "}
                    {booking.bookingDate}
                  </p>

                  <p>
                    ⏰ Time :
                    {" "}
                    {booking.timeSlot}
                  </p>

                  <p>
                    💳 Payment :
                    <strong
                      className={
                        booking.paymentStatus ===
                        "Paid"
                          ? "payment-paid"
                          : "payment-pending"
                      }
                    >
                      {" "}
                      {booking.paymentStatus ||
                        "Pending"}
                    </strong>
                  </p>

                </div>

              )
            )

          )}

        </div>

      </div>
    </>
  );
}

export default Profile;