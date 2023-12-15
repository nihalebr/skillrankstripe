import React, { useState, useEffect, useContext } from "react";
import {
  Spinner,
  Button,
  Checkbox,
  Typography,
  Dialog,
} from "@material-tailwind/react";
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
  const [modelState, setModelState] = useState({
    showModel: false,
    modelMessage: "",
    modelTitle: "",
  });
  const [isAddonActiveProYear, setIsAddonActiveProYear] = useState(false);
  const [isAddonActiveProMonth, setIsAddonActiveProMonth] = useState(false);
  const [isAddonActiveStarterMonth, setIsAddonActiveStarterMonth] =
    useState(false);
  const [isAddonActiveStarterYear, setIsAddonActiveStarterYear] =
    useState(false);
  const [loginState, setLoginState] = useContext(LoginContext);
  const [cookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const submitStarter = async () => {
    // write a http request to make api request with priceID
    // then redirect to checkout page
    setButtonEnable(false);
    setButtonTextStarter("Processing..");
    const isChecked = isMonthly
      ? isAddonActiveStarterMonth
      : isAddonActiveStarterYear;
    const priceIds = [
      {
        price: isMonthly
          ? "price_1ONYedSEFUwbQhR8n6fcEIp8"
          : "price_1ONYedSEFUwbQhR8SqUVQzPI",
        quantity: 1,
      },
    ];
    if (isChecked) {
      priceIds.push({
        price: "price_1ONYoZSEFUwbQhR8QnEAHHQ1",
      });
    }
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/pay`;
    const { data } = await axios.post(url, {
      priceIds: priceIds,
      token: cookies.jwt,
      checked: isChecked,
    });
    console.log(data);
    window.location.replace(data.headers.Location);
  };

  const submitPro = async () => {
    // write a http request to make api request with priceID
    // then redirect to checkout page
    setButtonEnable(false);
    setButtonTextPro("Processing..");
    const priceIds = [
      {
        price: isMonthly
          ? "price_1ONYj9SEFUwbQhR8DISYeKsh"
          : "price_1ONYnkSEFUwbQhR8nrjO6usE",
        quantity: 1,
      },
    ];
    const isChecked = isMonthly ? isAddonActiveProMonth : isAddonActiveProYear;
    if (isChecked) {
      priceIds.push({
        price: "price_1ONYnkSEFUwbQhR8Ng0vKz1A",
      });
    }
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/pay`;
    const { data } = await axios.post(url, {
      priceIds: priceIds,
      token: cookies.jwt,
      checked: isChecked,
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
    <>
      <Dialog open={modelState.showModel}>
        <Dialog.Header>
          <Typography variant="h5">{modelState.modelTitle}</Typography>
        </Dialog.Header>
        <Dialog.Body className="flex justify-center items-center">
          <div className="w-9/12 text-black">
            <h1 className="text-6xl font-bold">
              S<span className="text-blue-600">R </span>
            </h1>
            <p className="font-bold  mt-4 text-2xl ">
              Skillrank {modelState.subPlan}
            </p>
            <Typography variant="lead">{modelState.modelMessage}</Typography>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            variant="text"
            color="red"
            onClick={() => setModelState({ ...modelState, showModel: false })}
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => setModelState({ ...modelState, showModel: false })}
          >
            Confirm
          </Button>
        </Dialog.Footer>
      </Dialog>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner className="h-14 w-14" color="blue" />
        </div>
      ) : (
        <div className="mt-20 center mb-5 mx-4">
          <div className="flex flex-col gap-4 items-center justify-center">
            <Typography variant="h3" className="text-primary">
              Subscription
            </Typography>
            <Typography variant="lead" className="text-primary">
              Amplify your Tech Hiring experience with our subscriptions
            </Typography>
            <div className="border py-1 px-3  mt-3 rounded-md">
              <button
                className={`${
                  !isMonthly
                    ? "bg-primary text-black"
                    : " bg-blue-500 text-white"
                } py-3 px-4 rounded-md`}
                onClick={() => setIsMonthly(true)}
                data-umami-event="Subscription-Monthly/Yearly-Switch"
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
          <div className="mt-4 text-lg text-primary">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center md:flex">
              {isMonthly ? (
                <>
                  {/* Monthly content */}
                  <div className=" p-4">
                    <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                      <div className="w-full p-8 ">
                        <div className="py-4">
                          <h1 className="text-6xl font-bold">
                            S<span className="text-blue-600">R </span>
                          </h1>
                          <p className="font-bold  mt-4 text-2xl ">
                            Explorer Plan
                          </p>
                          <p className="font-bold  mt-4 text-gray-400 ">
                            Explore tech talent effortlessly.
                          </p>
                          <div className="flex mt-6">
                            <div>
                              <span className="text-4xl font-bold">$5</span>
                            </div>
                            <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                              <span>per</span>
                              <span className="-mt-2 ">month</span>
                            </div>
                          </div>
                          <Button
                            color="blue"
                            className="mt-4 text-lg"
                            onClick={submitStarter}
                            disabled={!isButtonEnable}
                            fullWidth
                            data-umami-event="Subscribe-Starter-Monthly"
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

                          <p className="ml-2"> Basic analytics dashboard</p>
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

                          <p className="ml-2"> Log 7 days</p>
                        </span>
                      </div>
                      <hr className="mx-4 border-blue-300 border-b-2 rounded-2xl" />
                      <div className="px-6 py-4 flex">
                        <Checkbox
                          color="blue"
                          containerProps={{
                            className: "-mt-5",
                          }}
                          onChange={(e) =>
                            setIsAddonActiveStarterMonth(e.target.checked)
                          }
                        />
                        <div>
                          <Typography
                            color="blue-gray"
                            className="font-small font-bold"
                            variant="small"
                          >
                            Additional assignment at $2.00 /per assignment
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-small"
                          >
                            (Billed based on usage per month)
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" p-4">
                    <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                      <div className="w-full p-8 ">
                        <div className="py-4">
                          <h1 className="text-6xl font-bold">
                            S<span className="text-blue-600">R </span>
                          </h1>
                          <p className="font-bold  mt-4 text-2xl ">
                            Strategist Plan
                          </p>
                          <p className="font-bold  mt-4 text-gray-400 ">
                            Strategically shape your tech team.
                          </p>
                          <div className="flex mt-6">
                            <div>
                              <span className="text-4xl font-bold">$25</span>
                            </div>
                            <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                              <span>per</span>
                              <span className="-mt-2 ">month</span>
                            </div>
                          </div>
                          <Button
                            color="blue"
                            className="mt-4 text-lg"
                            onClick={submitPro}
                            disabled={!isButtonEnable}
                            fullWidth
                            data-umami-event="Subscribe-Pro-Monthly"
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

                          <p className="ml-2">40 assignment</p>
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

                          <p className="ml-2">
                            Enhanced analytics and reporting features
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

                          <p className="ml-2"> Log 15 days</p>
                        </span>
                      </div>
                      <hr className="mx-4 border-blue-300 border-b-2 rounded-2xl" />
                      <div className="px-6 py-4 flex">
                        <Checkbox
                          color="blue"
                          containerProps={{
                            className: "-mt-5",
                          }}
                          onChange={(e) =>
                            setIsAddonActiveProMonth(e.target.checked)
                          }
                        />
                        <div>
                          <Typography
                            color="blue-gray"
                            className="font-small font-bold"
                            variant="small"
                          >
                            Additional assignment at $2.00 /per assignment
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-small"
                          >
                            (Billed based on usage per month)
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* yearly content */}
                  <div className=" p-4">
                    <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                      <div className="w-full p-8 ">
                        <div className="py-4">
                          <h1 className="text-6xl font-bold">
                            S<span className="text-blue-600">R </span>
                          </h1>
                          <p className="font-bold  mt-4 text-2xl ">
                            Explorer Plan
                          </p>
                          <p className="font-bold  mt-4 text-gray-400 ">
                            Explore tech talent effortlessly.
                          </p>
                          <div className="flex mt-6">
                            <div>
                              <span className="text-4xl font-bold">$50</span>
                            </div>
                            <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                              <span>per</span>
                              <span className="-mt-2 ">year</span>
                            </div>
                          </div>
                          <Button
                            color="blue"
                            className="mt-4 text-lg"
                            type="button"
                            onClick={submitStarter}
                            disabled={!isButtonEnable}
                            fullWidth
                            data-umami-event="Subscribe-Starter-Yearly"
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

                          <p className="ml-2">200 assignment</p>
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

                          <p className="ml-2"> Basic analytics dashboard</p>
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
                      <hr className="mx-4 border-blue-300 border-b-2 rounded-2xl" />
                      <div className="px-6 py-4 flex">
                        <Checkbox
                          color="blue"
                          containerProps={{
                            className: "-mt-5",
                          }}
                          onChange={(e) =>
                            setIsAddonActiveStarterYear(e.target.checked)
                          }
                        />
                        <div>
                          <Typography
                            color="blue-gray"
                            className="font-small font-bold"
                            variant="small"
                          >
                            Additional assignment at $2.00 /per assignment
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-small"
                          >
                            (Billed based on usage per month)
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" p-4">
                    <div className="max-w-sm rounded border border-blue-500 overflow-hidden shadow-lg mx-auto">
                      <div className="w-full p-8 ">
                        <div className="py-4">
                          <h1 className="text-6xl font-bold">
                            S<span className="text-blue-600">R </span>
                          </h1>
                          <p className="font-bold  mt-4 text-2xl ">
                            Skillrank Pro
                          </p>
                          <p className="font-bold  mt-4 text-gray-400 ">
                            Strategically shape your tech team.
                          </p>
                          <div className="flex mt-6">
                            <div>
                              <span className="text-4xl font-bold">$250</span>
                            </div>
                            <div className="flex flex-col ml-2 text-gray-400 font-semibold">
                              <span>per</span>
                              <span className="-mt-2 ">year</span>
                            </div>
                          </div>
                          <Button
                            onClick={submitPro}
                            className="mt-4 text-lg"
                            disabled={!isButtonEnable}
                            color="blue"
                            fullWidth
                            data-umami-event="Subscribe-Pro-Yearly"
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

                          <p className="ml-2">500 assignment</p>
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

                          <p className="ml-2">
                            Enhanced analytics and reporting features
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

                          <p className="ml-2"> Log 15days</p>
                        </span>
                      </div>
                      <hr className="mx-4 border-blue-300 border-b-2 rounded-2xl" />
                      <div className="px-6 py-4 flex">
                        <Checkbox
                          color="blue"
                          containerProps={{
                            className: "-mt-5",
                          }}
                          onChange={(e) =>
                            setIsAddonActiveProYear(e.target.checked)
                          }
                        />
                        <div>
                          <Typography
                            color="blue-gray"
                            className="font-small font-bold"
                            variant="small"
                          >
                            Additional assignment at $2.00 /per assignment
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-small"
                          >
                            (Billed based on usage per month)
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className=" p-4">
                <div className="max-w-sm rounded border border-black bg-blue-500 overflow-hidden shadow-lg mx-auto w-384 h-682">
                  <div className="w-full p-8 ">
                    <div className="py-4">
                      <h1 className="text-6xl font-bold">
                        S<span className="text-white">R </span>
                      </h1>
                      <p className="font-bold text-white mt-4 text-2xl ">
                        Enterprise plan
                      </p>
                      <p className="font-bold  mt-4 text-gray-900 ">
                        Tailor made enterprise-level hiring.
                      </p>
                      <div className="flex mt-7">
                        <div>
                          <span className="text-4xl text-white font-bold">
                            custom pricing
                          </span>
                        </div>
                      </div>
                      <Button
                        color="white"
                        className="mt-4 text-blue-700 text-lg"
                        type="button"
                        onClick={() => {
                          window.open("https://calendly.com/");
                        }}
                        disabled={!isButtonEnable}
                        fullWidth
                        data-umami-event="Subscribe-Starter-Yearly"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <span className="text-white">This includes:</span>
                    <p className="text-white text-base grid mt-3"></p>
                    <span className="flex text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <p className="ml-2">unlimited assignment</p>
                    </span>
                    <span className="flex mt-1 text-white">
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
                      <p className="ml-2">unlimited HR account</p>
                    </span>
                    <span className="flex mt-1 text-white">
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
                        API integration for seamless workflow
                      </p>
                    </span>
                    <span className="flex mt-1 text-white">
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
                      <p className="ml-2"> Log 30days</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Subscription;
