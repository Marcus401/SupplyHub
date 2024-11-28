import React, { useState } from "react";

interface SubscriptionHistory {
  date: string;
  description: string;
}

// Mock Data
const mockSubscriptionHistory: SubscriptionHistory[] = [
  { date: "Dec. 12, 20XX", description: "Subscription Renewal" },
  { date: "Jan. 12, 20XX", description: "Subscription Renewal" },
  { date: "Feb. 12, 20XX", description: "Subscription Renewal" },
  { date: "Mar. 12, 20XX", description: "Subscription Renewal" },
  { date: "Apr. 12, 20XX", description: "Subscription Renewal" },
  { date: "May. 12, 20XX", description: "Subscription Renewal" },
];

function BillingPage() {
  const [paymentPeriod, setPaymentPeriod] = useState("monthly");
  const [slots, setSlots] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [subscriptionActive, setSubscriptionActive] = useState(false);

  // Handle phone input to allow only numeric characters
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, "");
    event.target.value = numericValue;
  };

  // Handle card number input to allow only numeric characters
  const handleCardInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Allow only numbers and format as '1234 1234 1234 1234'
    const numericValue = value.replace(/[^0-9]/g, "").replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    event.target.value = numericValue;
  };

  // Handle expiry date input to format as MM/YY
  const handleExpiryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Allow only numbers and format as MM/YY
    const numericValue = value.replace(/[^0-9]/g, "").slice(0, 4);
    const formattedValue = numericValue.replace(/(\d{2})(\d{2})/, "$1/$2");
    event.target.value = formattedValue;
  };

  // Handle CVV input to allow only 3 digits
  const handleCvvInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Only allow 3 digits
    const numericValue = value.replace(/[^0-9]/g, "").slice(0, 3);
    event.target.value = numericValue;
  };

  // Handle "Name on Card" input to allow only alphabetic characters (no numbers)
  const handleCardNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Only allow alphabetic characters and spaces (no numbers)
    const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, "");
    event.target.value = alphabeticValue;
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentPeriod(event.target.value);
  };

  const incrementSlots = () => setSlots(slots + 5);
  const decrementSlots = () => setSlots(Math.max(slots - 5, 5));

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleSubscribe = () => {
    setSubscriptionActive(true);
  };

  const handleCancelSubscription = () => {
    setSubscriptionActive(false);
  };

  return (
    <div className="p-8 bg-white w-full mx-auto rounded-lg shadow-md flex flex-col lg:flex-row gap-12">
      {/* Conditional Rendering for Initial State */}
      {!subscriptionActive && (
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-4">Billing and Subscription</h2>
          <p className="text-gray-600 mb-6">
            Enhance Your Product Listings with Additional Slots<br />
            Expand your product offerings, boost market visibility, and attract more
            customers with additional listing slots to drive sales and enhance your portfolio.
          </p>
          <div>
            <strong className="block mb-1">Payment Information</strong>
            <p>Company Name</p>
            <p>Company Location</p>
            <p>Company Email</p>
          </div>
        </div>
      )}

      {/* Conditional Rendering for Payment Forms */}
      <div className="w-full">
        {!subscriptionActive ? (
          <>
            {/* Slot Selector */}
            <div className="mb-4 flex items-center gap-2">
              <label className="font-semibold">Number of Slots:</label>
              <button
                onClick={decrementSlots}
                className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4 py-1 border border-gray-300 rounded">{slots}</span>
              <button
                onClick={incrementSlots}
                className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Payment Period */}
            <div className="mb-4">
              <strong className="block">Payment Period</strong>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="monthly"
                  checked={paymentPeriod === "monthly"}
                  onChange={handlePeriodChange}
                  className="mr-1 mt-4"
                />
                Monthly
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yearly"
                  checked={paymentPeriod === "yearly"}
                  onChange={handlePeriodChange}
                  className="mr-1 mt-4"
                />
                Yearly
              </label>
            </div>

            {/* Summary */}
            <div className="mb-4">
              <strong className="block mb-1">Summary</strong>
              <p>Total: ₱{((slots * 30 - 100) * (paymentPeriod === "yearly" ? 11 : 1)).toFixed(2)}</p>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <strong className="block mb-1">Payment Method</strong>
              <div className="flex flex-col gap-2">
                {["Credit/Debit Card", "GCash", "Maya"].map((method) => (
                  <div
                    key={method}
                    className={`flex items-center gap-2 p-2 border rounded cursor-pointer transition hover:bg-blue-100 ${
                      selectedPaymentMethod === method ? "border-blue-500" : ""
                    }`}
                    onClick={() => handlePaymentMethodSelect(method)}
                  >
                    <img
                      src={
                        method === "Credit/Debit Card"
                          ? "https://www.pbdesign.co.uk/wp-content/uploads/2024/01/News-Credit-Cards-400-x-301px.png"
                          : method === "GCash"
                          ? "https://seeklogo.com/images/G/gcash-logo-E93133FDA5-seeklogo.com.png"
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvZCOOWlpBShDT3AeV6jdcdiKqNj5keRleQ&s"
                      }
                      alt={method}
                      className="w-10"
                    />
                    <p>{method}</p>
                  </div>
                ))}
              </div>

              {/* Conditional Payment Method Forms */}
              {selectedPaymentMethod && (
                <div className="mt-4 p-4 border rounded">
                  {selectedPaymentMethod === "Credit/Debit Card" && (
                    <>
                      <input
                        type="text"
                        placeholder="Card Number"
                        maxLength={19} // 16 digits with spaces
                        onInput={handleCardInput} // Allow only numeric input and format
                        className="w-full p-2 mb-2 border rounded"
                      />
                      <input
                        type="text"
                        placeholder="Name on Card"
                        onInput={handleCardNameInput} // Allow only alphabetic characters
                        className="w-full p-2 mb-2 border rounded"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Expiry Date (MM/YY)"
                          maxLength={5} // Format MM/YY
                          onInput={handleExpiryInput} // Allow only numeric input and format
                          className="w-1/2 p-2 border rounded"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          maxLength={3} // 3 digits
                          onInput={handleCvvInput} // Allow only 3 digits
                          className="w-1/2 p-2 border rounded"
                        />
                      </div>
                    </>
                  )}
                  {selectedPaymentMethod === "GCash" && (
                    <input
                      type="text"
                      placeholder="Phone Number"
                      maxLength={15} // Limit phone number length
                      onInput={handlePhoneInput} // Ensure only numbers are entered
                      className="w-full p-2 border rounded"
                    />
                  )}
                  {selectedPaymentMethod === "Maya" && (
                    <input
                      type="text"
                      placeholder="Phone Number"
                      maxLength={15} // Limit phone number length
                      onInput={handlePhoneInput} // Ensure only numbers are entered
                      className="w-full p-2 border rounded"
                    />
                  )}
                </div>
              )}
            </div>

            {/* Subscribe Button */}
            <button
              onClick={handleSubscribe}
              className="w-full bg-transparent border border-black text-black py-2 rounded hover:bg-gray-800 hover:text-white transition"
            >
              Subscribe
            </button>
          </>
        ) : (
          <>
            {/* Cancel Subscription Section */}
            <div className="relative max-w-3xl w-full flex flex-col gap-4">
              <h3 className="text-2xl font-semibold mb-4">Billing and Subscription</h3>
              <div className="mb-4">
                <strong className="block mb-1">Due</strong>
                <div className="flex justify-between items-center">
                  <p>Nov. 12, 20XX</p>
                  <p className="-mr-1">Subscription Renewal</p>
                  <button className="text-gray-700 border border-gray-700 py-1 px-[54px] rounded-xl hover:bg-gray-300">
                    Pay
                  </button>
                </div>
              </div>
              <div>
                <strong className="block mb-1">Payment History</strong>
                <ul>
                  {mockSubscriptionHistory.map((history, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <span>{history.date}</span>
                      <span>{history.description}</span>
                      <button className="text-gray-700 border border-gray-700 py-1 px-10 rounded-xl hover:bg-gray-300">
                        Receipt
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancel Subscription Button Positioned Top Right */}
            <button
              onClick={handleCancelSubscription}
              className="font-semibold absolute top-4 right-4 mt-4 px-4 py-2 border rounded-md border-gray-700 text-gray-700 hover:bg-gray-200"
            >
              Cancel Subscription
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BillingPage;
