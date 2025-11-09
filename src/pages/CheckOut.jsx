import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";

const CheckOut = () => {
  const { cartItems, totalAmount } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <div className="text-center pt-32 pb-20">
          <h2 className="text-3xl font-semibold mb-4">No item in Cart</h2>
          <a href="/" className="px-6 py-3 bg-black text-white rounded">
            Continue Shopping
          </a>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container w-[80%] mx-auto pt-24 pb-16 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
        <hr className="mb-8" />

        <div className="grid md:grid-cols-3 gap-8  items-start">
          {/* Billing form */}
          <div className="border border-gray-300 md:col-span-2  rounded ">
            <h2 className=" bg-gray-100 p-3 border-b border-gray-300 font-semibold mb-2">
              Billing Address
            </h2>

            <form className="space-y-2 text-sm ">
              <div className="flex gap-4 justify-center mx-4">
                <div className="my-1 w-full ">
                  <label htmlFor="Name" className="block font-medium mb-1">
                    First Name:
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full text-xs  border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div className="my-1 w-full ">
                  <label htmlFor="Name" className="block font-medium mb-1">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full text-xs border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div className="my-1  mx-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full text-xs  border border-gray-300 px-3 py-2 rounded"
                />
              </div>

              <div className="my-1 mx-4 ">
                <label htmlFor="address" className="block font-medium mb-1">
                  Address:
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full text-xs  border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="my-1 mx-4 ">
                <label htmlFor="address2" className="block font-medium mb-1">
                  Address 2 (Optional):
                </label>
                <input
                  type="text"
                  placeholder="Apartment or suite"
                  className="w-full text-xs  border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="flex gap-4 mx-4">
                <div className="w-full">
                  <label className="block font-medium mb-1">Country:</label>
                  <select className="w-full border rounded p-2 text-xs">
                    <option>Choose...</option>
                    <option value="bd">Bangladesh</option>
                    <option value="in">India</option>
                    <option value="pk">Pakistan</option>
                  </select>
                </div>

                <div className="w-full">
                  <label className="block font-medium mb-1">State:</label>
                  <select className="w-full border rounded p-2 text-xs">
                    <option>Choose...</option>
                    <option value="dhk">Dhaka</option>
                    <option value="ctg">Chattogram</option>
                  </select>
                </div>

                <div className="w-full">
                  <label className="block font-medium mb-1">Zip:</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 text-xs"
                  />
                </div>
              </div>
              <div className="">
                <hr className="my-8  border-gray-300 mx-4" />
              </div>

              <h2 className="mx-4 text-2xl font-semibold">Payment</h2>

              <div className="flex gap-4 justify-center mx-4">
                <div className="my-1 w-full max-w-md">
                  <label htmlFor="Name" className="block font-medium mb-1">
                    Name on card:
                  </label>
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full text-xs  border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div className="my-1 w-full max-w-md">
                  <label htmlFor="Name" className="block font-medium mb-1">
                    Credit Card Number :
                  </label>
                  <input
                    type="number"
                    placeholder=" "
                    className="w-full text-xs border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div className="flex gap-4  mx-4">
                <div className="my-1  ">
                  <label htmlFor="Name" className="block font-medium mb-1">
                    Expiration:
                  </label>
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full text-xs  border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div className="my-1 ">
                  <label htmlFor="Name" className="block font-medium mb-1">
                    CVV :
                  </label>
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full text-xs border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div>
                <hr className="my-8  border-gray-300 mx-4" />
              </div>

              <div className="mx-4">
                <button
                  type="submit"
                  className="w-full bg-blue-900   text-white py-1  my-4  rounded"
                >
                  Payment
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="border border-gray-300  md:col-span-1 rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="py-3 text-xs flex justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">${item.price * item.quantity}</p>
                </li>
              ))}
              <p className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$30</span>
              </p>
            </ul>

            {/* total */}
            <div className="flex justify-between text-xl font-bold mt-6">
              <span>Total </span>
              <span>${(totalAmount + 30).toFixed(2)}</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded mt-6 hover:bg-blue-700 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
