const Razorpay = require("razorpay");

const express = require("express");
const app = express();
app.use(express.json());

const KEY_ID = "rzp_test_KCGKArxphGEWnw";
const KEY_SECRET = "tVZoqHnkpJjiNhyv0qXWNg4F";

module.exports.orders = (req, res) => {
  let instance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
  });

  var options = {
    amount: Number((req.body.amt).split(',').join(''))* 100, // amount in the smallest currency unit
    // amount: 50000,
    currency: "INR",
  };

  console.log("Request Body", Number((req.body.amt).split(',').join('')));

  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.send({ code: 500, message: "Server Error." });
    }
    return res.send({ code: 200, message: "Order Created", data: order });
  });
};




module.exports.verify = (req, res) => {
  // var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })
  // var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
  // validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
};
