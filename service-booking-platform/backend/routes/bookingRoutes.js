const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookings,
  getBookingsByUser,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/", getBookings);
router.get("/user/:userId", getBookingsByUser);
router.put("/:id", updateBookingStatus);
router.delete("/:id", deleteBooking);

module.exports = router;