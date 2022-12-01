import axios from "axios";

export const makePayment = async (seatType) => {
  const res = await initializeRazorpay();
  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }
  // Make API call to the serverless API
  const data = await fetch(`/api/razorpay?seatType=${seatType}`, {
    method: "POST",
  }).then((t) => t.json());
  console.log(data);
  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "Coffeebeans Brewing",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Thank you for your test Payment.",
    image: "/icons/CBColorIcon.svg",
    handler: async function (response) {
      //   alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature);
      try {
        const verifyRes = await axios.post(`/api/verify`, { response });
        console.log("theresponseverifyResandstuff", verifyRes);
        if (verifyRes.status == 200 && verifyRes.data?.message == "ok") {
          alert("Payment was Successful");
        }
        return true;
      } catch (error) {
        console.error("verifyRes Error", error);
        alert("Payment was not Successful");
        return false;
      }
    },
    // theme: { color: "#99cc33" },
    // prefill: {
    //   name: "Coffeebeans Brewing",
    //   email: "enquiries@coffeebeans.io",
    //   contact: "9999999999",
    // },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const initializeRazorpay = () => {
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
