import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {

  const navigate = useNavigate();

  const handlePayment = () => {

    let bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length > 0) {

      bookings[bookings.length - 1].paymentStatus = "Paid";
      bookings[bookings.length - 1].status = "Completed";

      localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
      );
    }

    alert("Payment Successful ✅");

    navigate("/dashboard");
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <div className="payment-icon">
          💳
        </div>

        <h1>Secure Payment</h1>

        <p>
          Complete your booking payment
        </p>

        <div className="payment-details">

          <div>
            <span>Service</span>
            <strong>Web Development</strong>
          </div>

          <div>
            <span>Amount</span>
            <strong>₹4999</strong>
          </div>

          <div>
            <span>GST</span>
            <strong>₹899</strong>
          </div>

          <div className="total">
            <span>Total</span>
            <strong>₹5898</strong>
          </div>

        </div>

        <div className="payment-methods">

          <div className="method">
            💳 Card
          </div>

          <div className="method">
            📱 UPI
          </div>

          <div className="method">
            🏦 Net Banking
          </div>

        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
        >
          Pay ₹5898 Now
        </button>

      </div>

    </div>
  );
}

export default Payment;