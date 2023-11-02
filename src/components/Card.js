import React, { useState , useEffect } from "react";

function Card() {
    const [showModal, setShowModal] = useState(false);

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
      <div>
        <h1 className="text-3xl text-center font-semibold mb-3 mt-7">
          Pricing
        </h1>
        <p className="text-center">
          Problems trying to resolve the conflict between
        </p>
        <p className="text-center">
          the major of realme classic physics newtonion mechanics
        </p>
      </div>

      <div className="container items-center mx-auto grid md:grid-cols-2 gap-5 mt-9 md:mt-20 justify-center">
        <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
          <div className="w-full p-8 text-center">
            <div className=" ">
              <h1 className="text-center mt-1 text-3xl font-bold">Monthly</h1>
              <p className="text-center mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                explicabo fugiat?
              </p>
              <h1 className="text-center mt-3 p-5 text-blue-400 text-4xl font-extrabold">
                3${" "}
                <span className="mt-1  text-blue-400 text-2xl">per month</span>
              </h1>
            </div>
          </div>

          <div class="px-6 py-4">
            <p class="text-gray-700 text-base grid"></p>
            <span className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Design with real data</p>
            </span>
            <span className="flex  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Lightning fast prototyping</p>
            </span>
            <span className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2"> Fastest way to organize</p>
            </span>
            <span className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Work at the speed of thought</p>
            </span>
            <span className="flex  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Work at the speed of thought</p>
            </span>
            <span className="flex  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Work at the speed of thought</p>
            </span>
          </div>
          <button
            className="w-full bg-blue-400 text-white text-center font-bold  mx-auto p-4"
            onClick={handleModalClick}
          >
            Purchase
          </button>
        </div>

        <div class="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
          <div className="w-full p-8 text-center">
            <div className=" ">
              <h1 className="text-center mt-1 text-3xl font-bold ">Yearly</h1>
              <p className="text-center mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                explicabo fugiat?
              </p>
              <h1 className="text-center mt-3 p-5 text-blue-400 text-4xl font-extrabold">
                39.99${" "}
                <span className="mt-1  text-blue-400 text-2xl">per year</span>
              </h1>
            </div>
          </div>

          <div class="px-6 py-4">
            <p class="text-gray-700 text-base grid"></p>
            <span className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Design with real data</p>
            </span>
            <span className="flex  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Lightning fast prototyping</p>
            </span>
            <span className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2"> Fastest way to organize</p>
            </span>
            <span className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Work at the speed of thought</p>
            </span>
            <span className="flex  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Work at the speed of thought</p>
            </span>
            <span className="flex  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-white fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-2">Work at the speed of thought</p>
            </span>
          </div>
          <button
            className="w-full bg-blue-400 text-white text-center font-bold  mx-auto p-4"
            onClick={handleModalClick}
          >
            Purchase
          </button>
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
  );
}

export default Card;
