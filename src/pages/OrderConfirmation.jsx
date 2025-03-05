import React from "react";
import { useNavigate } from "react-router-dom";

const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Shirts",
      color: "black",
      size: "M",
      price: 260,
      quantity: 10,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Streeet",
    city: "Singapore",
    country: "UAE",
  },
};

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-green-600 tracking-wide">
        Order Confirmed 🎉
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Thanks for shopping with us. Your order is on the way!
      </p>

      <div className="mt-8 border border-gray-200 shadow-md p-6 rounded-xl">
        {/* Order Details */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Order ID: <span className="text-gray-600">{checkout._id}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Ordered on: {new Date(checkout.createdAt).toLocaleDateString()}
            </p>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            Estimated Delivery:{" "}
            <span className="text-green-600">
              {calculateEstimatedDelivery(checkout.createdAt)}
            </span>
          </p>
        </div>

        {/* Ordered Items */}
        <div className="divide-y divide-gray-200">
          {checkout.checkoutItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center py-4 hover:bg-gray-50 transition-all duration-300 rounded-lg px-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg shadow"
              />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-medium text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.color} | {item.size}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Shipping Info */}
        <div className="mt-8 flex justify-between gap-6">
          {/* Payment Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">Payment</h4>
            <p className="text-gray-500 mt-1">PayPal</p>
          </div>

          {/* Delivery Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">
              Shipping Address
            </h4>
            <p className="text-gray-500 mt-1">
              {checkout.shippingAddress.address},{" "}
              {checkout.shippingAddress.city},{" "}
              {checkout.shippingAddress.country}
            </p>
          </div>
        </div>

        {/* Back to Shopping Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white cursor-pointer px-6 py-3 rounded-lg text-sm font-medium tracking-wide hover:bg-gray-800 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
