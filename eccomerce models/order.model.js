const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'eccomerceUser', required: true }, // Reference to the user who placed the order
  
  // Billing Address
  billingAddress: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },

  // Payment Information
  paymentDetails: {
    cardHolderName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expMonth: { type: String, required: true },
    expYear: { type: String, required: true },
    cvv: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ['PayPal', 'MasterCard', 'American Express', 'Visa'], // Supported card types
      required: true,
    },
  },

  // Order Information
  quantity: { type: Number, required: true }, // Number of products ordered
  price: { type: Number, required: true }, // Price of the order
  totalAmount: { type: Number, required: true }, // Total amount considering quantity and any discounts
  status: {
    type: String,
    enum: ['pending', 'delivered', 'cancelled'],
    default: 'pending', // Order status
  },
  dateOrdered: { type: Date, default: Date.now }, // Date when the order was placed
  dateDelivered: { type: Date }, // Optional: Date when the order was delivered
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
