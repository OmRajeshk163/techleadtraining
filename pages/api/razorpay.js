const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  const { seatType } = req.query;

  const seatAmount = seatType === "1" ? 24999 : 29999;
  const CURRENCY = "INR";
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = seatAmount;
    const currency = CURRENCY;
    const options = {
      amount: (amount * 100).toString(), // amount in the smallest currency unit
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: Number(response.amount) / 100,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
