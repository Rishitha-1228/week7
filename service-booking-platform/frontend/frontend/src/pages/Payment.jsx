import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);
  const [txnId, setTxnId] = useState("");
  const [step, setStep] = useState(1); // 1=summary, 2=processing, 3=success

  const booking = JSON.parse(localStorage.getItem("booking")) || {
    service: "Web Development",
    price: 4999,
    bookingDate: new Date().toDateString(),
    timeSlot: "10:00 AM",
  };

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Customer",
    email: "",
    phone: "",
  };

  const amount = booking.price || 4999;

  const handleDemoPayment = async () => {
    try {
      setLoading(true);
      setStep(2);

      // Step 1: Create order on backend
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payments/create-order",
        { amount }
      );

      // Simulate payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 2: Verify / complete payment
      const { data: result } = await axios.post(
        "http://localhost:5000/api/payments/verify",
        {
          bookingId: booking._id || null,
          amount,
          serviceName: booking.service,
          userName: user.name,
          userEmail: user.email,
          userPhone: user.phone,
          orderId: order.id,
        }
      );

      if (result.success) {
        setTxnId(result.transactionId);
        setPaid(true);
        setStep(3);

        // Save payment status
        localStorage.setItem("paymentStatus", "Paid");
        localStorage.setItem("lastTxnId", result.transactionId);
      }
    } catch (error) {
      console.error("Payment error:", error);
      setStep(1);
      alert("⚠️ Payment failed. Make sure the backend server is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  if (step === 2) {
    return (
      <div className="payment-page">
        <div className="payment-card processing-card">
          <div className="spinner-ring"></div>
          <h2>Processing Payment...</h2>
          <p>Please wait, do not close this window.</p>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="payment-page">
        <div className="payment-card success-card">
          <div className="success-icon">✅</div>
          <h1>Payment Successful!</h1>
          <p className="success-subtitle">Your booking is confirmed.</p>

          <div className="txn-box">
            <span>Transaction ID</span>
            <code>{txnId}</code>
          </div>

          <div className="success-details">
            <div className="row"><span>Service</span><span>{booking.service}</span></div>
            <div className="row"><span>Date</span><span>{booking.bookingDate}</span></div>
            <div className="row"><span>Time</span><span>{booking.timeSlot}</span></div>
            <div className="row"><span>Amount Paid</span><span className="amount-green">₹{amount}</span></div>
            <div className="row"><span>Status</span><span className="badge-paid">✅ Paid</span></div>
          </div>

          <div className="notification-badges">
            <span>📧 Email Sent</span>
            <span>📱 SMS Sent</span>
          </div>

          <button className="goto-dashboard-btn" onClick={() => navigate("/dashboard")}>
            View My Bookings →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-card">
        <div className="payment-header">
          <h1>🔒 Secure Payment</h1>
          <p>Review your booking and complete payment</p>
        </div>

        <div className="summary">
          <h2>Booking Summary</h2>
          <div className="row"><span>Service</span><span>{booking.service}</span></div>
          <div className="row"><span>Date</span><span>{booking.bookingDate}</span></div>
          <div className="row"><span>Time</span><span>{booking.timeSlot}</span></div>
          <div className="row"><span>Customer</span><span>{user.name}</span></div>
        </div>

        <div className="price-card">
          <div className="row"><span>Service Charge</span><span>₹{amount}</span></div>
          <div className="row"><span>Platform Fee</span><span>₹0</span></div>
          <hr />
          <div className="total"><span>Total Amount</span><span>₹{amount}</span></div>
        </div>

        <div className="demo-notice">
          <span>🔵</span>
          <div>
            <strong>Demo Payment Mode</strong>
            <p>This is a test payment. No real money will be charged.</p>
          </div>
        </div>

        <button
          className="pay-btn"
          onClick={handleDemoPayment}
          disabled={loading}
        >
          {loading ? "Processing..." : `✅ Complete Payment — ₹${amount}`}
        </button>

        <div className="features">
          <div>🔒 Secure</div>
          <div>⚡ Instant Confirmation</div>
          <div>📧 Email Receipt</div>
          <div>📱 SMS Alert</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;