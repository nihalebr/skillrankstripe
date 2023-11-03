import React, { useState, useEffect } from "react";

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);

  const handleModalClick = () => {
    setShowModal(true);

    setTimeout(() => {
      handleCloseModal();
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="cardDiv md:mt-20 center mb-5 mx-4">
      <div className="flex items-center justify-center">
        <div className="border py-1 px-3  mt-3 rounded-md">
          <button
            className={`${
              !isMonthly ? "bg-primary text-white" : " bg-blue-500 text-white"
            } py-3 px-4 rounded-md`}
            onClick={() => setIsMonthly(false)}
          >
            Monthly
          </button>
          <button
            className={`${
              isMonthly ? "bg-primary text-white" : "bg-gray-300 text-gray-700"
            } py-3 px-4 rounded-md`}
            onClick={() => setIsMonthly(true)}
          >
            Yearly
          </button>
        </div>
      </div>

      {isMonthly ? (
        <div className="mt-4 text-lg text-primary">
          {/* Monthly content */}

          <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:flex">
            <div class=" p-4">
              <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                <div className="w-full p-8 ">
                  <div className=" ">
                    <button className=" mt-1 text-1xl font-bold text-red-700 bg-yellow-300 px-2 py-1">
                      TEST MODE
                    </button>
                    <h1 className="text-6xl font-bold mt-4">
                      S<span className="text-blue-600">R </span>
                    </h1>
                    <p className="font-bold  mt-4 text-2xl ">
                      Skillrank Starter
                    </p>
                    <p className="font-bold  mt-4 text-gray-400 ">
                      Skillrank Starter subscription
                    </p>
                    <div className="flex mt-6">
                      <div>
                        <span className="text-4xl font-bold">₹500</span>
                      </div>
                      <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                        <span>per</span>
                        <span className="-mt-2 ">month</span>
                      </div>
                    </div>
                    <button
                      type="button "
                      className="bg-blue-600 w-full px-4 py-2 rounded-md text-white font-semibold text-2xl mt-5"
                      onClick={handleModalClick}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                <div class="px-6 py-4">
                  <span className="text-gray-400">This includes:</span>
                  <p class="text-gray-700 text-base grid mt-3"></p>
                  <span className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 test/per user</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 HR account</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2"> Log 15days</p>
                  </span>
                </div>
              </div>
            </div>
            <div class=" p-4">
              <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                <div className="w-full p-8 ">
                  <div className=" ">
                    <button className=" mt-1 text-1xl font-bold text-red-700 bg-yellow-300 px-2 py-1">
                      TEST MODE
                    </button>
                    <h1 className="text-6xl font-bold mt-4">
                      S<span className="text-blue-600">R </span>
                    </h1>
                    <p className="font-bold  mt-4 text-2xl ">
                      Skillrank Starter
                    </p>
                    <p className="font-bold  mt-4 text-gray-400 ">
                      Skillrank Starter subscription
                    </p>
                    <div className="flex mt-6">
                      <div>
                        <span className="text-4xl font-bold">₹500</span>
                      </div>
                      <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                        <span>per</span>
                        <span className="-mt-2 ">month</span>
                      </div>
                    </div>
                    <button
                      type="button "
                      className="bg-blue-600 w-full px-4 py-2 rounded-md text-white font-semibold text-2xl mt-5"
                      onClick={handleModalClick}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                <div class="px-6 py-4">
                  <span className="text-gray-400">This includes:</span>
                  <p class="text-gray-700 text-base grid mt-3"></p>
                  <span className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 test/per user</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 HR account</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2"> Log 15days</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
              <div className="modal  rounded-lg p-4 bg-blue-700">
                <div className="text-2xl font-bold mb-4 text-center text-white">
                  Payment Successful
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <button
                  onClick={handleCloseModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 mx-auto block"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-4 text-lg text-primary">
          {/* Monthly content */}

          <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:flex">
            <div class=" p-4">
              <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto bg-gray-100">
                <div className="w-full p-8 ">
                  <div className=" ">
                    <button className=" mt-1 text-1xl font-bold text-red-700 bg-yellow-300 px-2 py-1">
                      TEST MODE
                    </button>
                    <h1 className="text-6xl font-bold mt-4">
                      S<span className="text-blue-600">R </span>
                    </h1>
                    <p className="font-bold  mt-4 text-2xl ">
                      Skillrank Starter
                    </p>
                    <p className="font-bold  mt-4 text-gray-400 ">
                      Skillrank Starter subscription
                    </p>
                    <div className="flex mt-6">
                      <div>
                        <span className="text-4xl font-bold">₹500</span>
                      </div>
                      <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                        <span>per</span>
                        <span className="-mt-2 ">year</span>
                      </div>
                    </div>
                    <button
                      type="button "
                      className="bg-blue-600 w-full px-4 py-2 rounded-md text-white font-semibold text-2xl mt-5"
                      onClick={handleModalClick}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                <div class="px-6 py-4">
                  <span className="text-gray-400">This includes:</span>
                  <p class="text-gray-700 text-base grid mt-3"></p>
                  <span className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 test/per user</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 HR account</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2"> Log 15days</p>
                  </span>
                </div>
              </div>
            </div>
            <div class=" p-4">
              <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto bg-gray-100">
                <div className="w-full p-8 ">
                  <div className=" ">
                    <button className=" mt-1 text-1xl font-bold text-red-700 bg-yellow-300 px-2 py-1">
                      TEST MODE
                    </button>
                    <h1 className="text-6xl font-bold mt-4">
                      S<span className="text-blue-600">R </span>
                    </h1>
                    <p className="font-bold  mt-4 text-2xl ">
                      Skillrank Starter
                    </p>
                    <p className="font-bold  mt-4 text-gray-400 ">
                      Skillrank Starter subscription
                    </p>
                    <div className="flex mt-6">
                      <div>
                        <span className="text-4xl font-bold">₹500</span>
                      </div>
                      <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                        <span>per</span>
                        <span className="-mt-2 ">year</span>
                      </div>
                    </div>
                    <button
                      type="button "
                      className="bg-blue-600 w-full px-4 py-2 rounded-md text-white font-semibold text-2xl mt-5"
                      onClick={handleModalClick}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                <div class="px-6 py-4">
                  <span className="text-gray-400">This includes:</span>
                  <p class="text-gray-700 text-base grid mt-3"></p>
                  <span className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 test/per user</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2">3 HR account</p>
                  </span>
                  <span className="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 text-white fill-gray-400 -mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="ml-2"> Log 15days</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
              <div className="modal  rounded-lg p-4 bg-blue-700">
                <div className="text-2xl font-bold mb-4 text-center text-white">
                  Payment Successful
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <button
                  onClick={handleCloseModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 mx-auto block"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
