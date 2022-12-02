import axios from "axios";

// export const makePayment = async (seatType) => {
//   const res = await initializeRazorpay();
//   if (!res) {
//     alert("Razorpay SDK Failed to load");
//     return;
//   }
//   try {
//     // Make API call to the serverless API
//     const orderApi = `/api/razorpay?seatType=${seatType}`;
//     const orderResponse = await fetch(orderApi, { method: "POST" }).then(
//       (res) => res.json()
//     );
//     const handler = async () => {
//       const verifyRes = await verifyOrder(orderResponse);
//       if (verifyRes?.status) alert(verifyRes?.message);
//       else alert(verifyRes?.message);
//     };
//     const options = { ...optionObj(orderResponse), handler };
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   } catch (error) {
//     console.log("OrderCreationError", error);
//     alert("Payment was not Successful");
//   }
// };

export const optionObj = (orderResponse, prefills, callback) => ({
  order_id: orderResponse.id,
  key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
  name: "Coffeebeans Brewing",
  currency: orderResponse.currency,
  amount: orderResponse.amount,
  description: "Enroll now for Tech Session from the Tech Experts.",
  image: "/icons/CBColorIcon.svg",
  handler: callback,
  // theme: { color: "#99cc33" },
  prefill: prefills,
});

export const verifyOrder = (response) => {
  return new Promise(async (resolve) => {
    try {
      const verifyRes = await axios.post(`/api/verify`, { response });
      console.log("theresponseverifyResandstuff", verifyRes);
      if (verifyRes.status == 200)
        resolve({ status: true, message: verifyRes.data?.message });
      else resolve({ status: false, message: "Payment was not Successful" });
    } catch (error) {
      console.error("verifyRes Error", error);
      resolve({ status: false, message: "Payment was not Successful" });
    }
  });
};

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    // document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
