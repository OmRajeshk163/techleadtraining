export default async function handler(req, res) {
  if (req.method === "POST") {
    // do a validation
    const secret = process.env.RAZORPAY_SECRET;
    // console.log("logforverification", req.body);
    // const crypto = require("crypto");
    // const shasum = crypto.createHmac("sha256", secret);
    // shasum.update(JSON.stringify(req.body));
    // const digest = shasum.digest("hex");
    // console.log(digest, req.headers["x-razorpay-signature"]);

    // if (digest === req.headers["x-razorpay-signature"]) {
    //   console.log("Payment was Successful");
    //   res.status(200).json({
    //     message: "OK",
    //   });
    // } else {
    //   console.log("Payment was Not Successful");
    //   res.status(403).json({ message: "Invalid" });
    // }
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body.response;
    let body = razorpay_order_id + "|" + razorpay_payment_id;

    console.log("theresponseandstuff", req.body, body);

    const crypto = require("crypto");
    var expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");
    console.log("sign- " + razorpay_signature);
    console.log("sign- " + expectedSignature);
    if (expectedSignature === razorpay_signature) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(403).json({ message: "Failed" });
    }
  }
}
