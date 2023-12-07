import React, { useState, useEffect, useContext } from "react";
import { Spinner, Button } from "@material-tailwind/react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Subscription = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isButtonEnable, setButtonEnable] = useState(true);
  const [buttonTextStarter, setButtonTextStarter] = useState("Subscribe");
  const [buttonTextPro, setButtonTextPro] = useState("Subscribe");
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useContext(LoginContext);
  const [cookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const submitStarter = async () => {
    // write a http request to make api request with priceID
    // then redirect to checkout page
    setButtonEnable(false);
    setButtonTextStarter("Processing..");
    const priceId = isMonthly
      ? "price_1OKhA4SEFUwbQhR8gR4QMdfJ"
      : "price_1OKhAoSEFUwbQhR83ecnf91k";
    console.log(cookies);
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/pay`;
    const { data } = await axios.post(url, {
      priceId: priceId,
      token: cookies.jwt,
    });
    console.log(data);
    window.location.replace(data.headers.Location);
  };

  const submitPro = async () => {
    // write a http request to make api request with priceID
    // then redirect to checkout page
    setButtonEnable(false);
    setButtonTextPro("Processing..");
    const priceId = isMonthly
      ? "price_1OKhC7SEFUwbQhR8AbFWg0Pc"
      : "price_1OKh0VSEFUwbQhR8Aka9SRhr";
    console.log(cookies);
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/pay`;
    const { data } = await axios.post(url, {
      priceId: priceId,
      token: cookies.jwt,
    });
    window.location.replace(data.headers.Location);
  };

  useEffect(() => {
    document.title = "SkillRankTest | Login";
    setTimeout(() => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        setIsLoading(false);
        setLoginState({
          ...loginState,
          isLoggedIn: true,
        });
      }
    }, 1500);
  }, [cookies.jwt, navigate, setLoginState, loginState]);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner className="h-14 w-14" color="blue" />
        </div>
      ) : (
        <div className="md:mt-20 center mb-5 mx-4">
          <div className="flex items-center justify-center">
            <div className="border py-1 px-3  mt-3 rounded-md">
              <button
                className={`${
                  !isMonthly
                    ? "bg-primary text-black"
                    : " bg-blue-500 text-white"
                } py-3 px-4 rounded-md`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`${
                  isMonthly ? "bg-primary text-black" : "bg-blue-500 text-white"
                } py-3 px-4 rounded-md`}
                onClick={() => setIsMonthly(false)}
              >
                Yearly
              </button>
            </div>
          </div>

          {isMonthly ? (
            <div className="mt-4 text-lg text-primary">
              {/* Monthly content */}

              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:flex">
                <div className=" p-4">
                  <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                    <div className="w-full p-8 ">
                      <div className=" ">
                        <h1 className="text-6xl font-bold">
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
                        <span className="text-gray-400 font-medium">
                          Billed monthly based on usage
                        </span>
                        <Button
                          color="blue"
                          className="mt-4 text-lg"
                          onClick={submitStarter}
                          disabled={!isButtonEnable}
                          fullWidth
                        >
                          {buttonTextStarter}
                        </Button>
                      </div>
                    </div>

                    <div className="px-6 py-4">
                      <span className="text-gray-400">This includes:</span>
                      <p className="text-gray-700 text-base grid mt-3"></p>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">10 assignment</p>
                      </span>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">
                          additional assignment at ₹100 per unit
                        </p>
                      </span>
                      <span className="flex mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
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
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2"> Log 7days</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" p-4">
                  <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                    <div className="w-full p-8 ">
                      <div className=" ">
                        <h1 className="text-6xl font-bold">
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
                            <span className="text-4xl font-bold">₹700</span>
                          </div>
                          <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                            <span>per</span>
                            <span className="-mt-2 ">month</span>
                          </div>
                        </div>
                        <span className="text-gray-400 font-medium">
                          Billed monthly based on usage
                        </span>
                        <Button
                          color="blue"
                          className="mt-4 text-lg"
                          onClick={submitPro}
                          disabled={!isButtonEnable}
                          fullWidth
                        >
                          {buttonTextPro}
                        </Button>
                      </div>
                    </div>

                    <div className="px-6 py-4">
                      <span className="text-gray-400">This includes:</span>
                      <p className="text-gray-700 text-base grid mt-3"></p>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">20 assignment</p>
                      </span>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">
                          additional assignment at ₹120 per unit
                        </p>
                      </span>
                      <span className="flex mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-2">5 HR account</p>
                      </span>
                      <span className="flex mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
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
            </div>
          ) : (
            <div className="mt-4 text-lg text-primary">
              {/* yearly content */}

              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:flex">
                <div className=" p-4">
                  <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                    <div className="w-full p-8 ">
                      <div className=" ">
                        <h1 className="text-6xl font-bold">
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
                            <span className="text-4xl font-bold">₹5000</span>
                          </div>
                          <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                            <span>per</span>
                            <span className="-mt-2 ">year</span>
                          </div>
                        </div>
                        <span className="text-gray-400 font-medium">
                          Billed yearly based on usage
                        </span>
                        <Button
                          color="blue"
                          className="mt-4 text-lg"
                          type="button"
                          onClick={submitStarter}
                          disabled={!isButtonEnable}
                          fullWidth
                        >
                          {buttonTextStarter}
                        </Button>
                      </div>
                    </div>

                    <div className="px-6 py-4">
                      <span className="text-gray-400">This includes:</span>
                      <p className="text-gray-700 text-base grid mt-3"></p>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">150 assignment</p>
                      </span>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">
                          additional assignment at ₹80 per unit
                        </p>
                      </span>
                      <span className="flex mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
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
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2"> Log 7days</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" p-4">
                  <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                    <div className="w-full p-8 ">
                      <div className=" ">
                        <h1 className="text-6xl font-bold">
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
                            <span className="text-4xl font-bold">₹7000</span>
                          </div>
                          <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                            <span>per</span>
                            <span className="-mt-2 ">year</span>
                          </div>
                        </div>
                        <span className="text-gray-400 font-medium">
                          Billed yearly based on usage
                        </span>
                        <Button
                          onClick={submitPro}
                          className="mt-4 text-lg"
                          disabled={!isButtonEnable}
                          color="blue"
                          fullWidth
                        >
                          {buttonTextPro}
                        </Button>
                      </div>
                    </div>

                    <div className="px-6 py-4">
                      <span className="text-gray-400">This includes:</span>
                      <p className="text-gray-700 text-base grid mt-3"></p>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">250 assignment</p>
                      </span>
                      <span className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p className="ml-2">
                          additional assignment at ₹100 per unit
                        </p>
                      </span>
                      <span className="flex mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-2">5 HR account</p>
                      </span>
                      <span className="flex mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Subscription;
