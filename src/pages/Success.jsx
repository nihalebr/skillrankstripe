// Success.js
import axios from "axios";
import React, { useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Success = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (!completed) {
      return <span className="text-indigo-500">{zeroPad(seconds)}s</span>;
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    document.title = "SkillRankTest | Payment Success";
    async function refreshToken() {
      const { data } = await axios.post(
        "https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/refreshToken",
        {
          token: cookies.jwt,
        }
      );
      const expiresTime = new Date(Date.now() + 2 * 60 * 60 * 1000);
      setCookie("jwt", data.body.token, {
        sameSite: "none",
        secure: true,
        expires: expiresTime,
      });
      setCookie("subscription", data.body.subscription, {
        sameSite: "none",
        secure: true,
      });
      setCookie("usage", data.body.usage, {
        sameSite: "none",
        secure: true,
      });
    }
    refreshToken();
  }, [cookies.jwt, setCookie]);
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex items-center justify-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="green"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-center mt-4">
          Payment is successful
        </h1>
        <span className="text-center mt-4">
          <p className="text-center">Thank you for your purchase!</p>
          <p className="text-center">
            You will receive an email with the order details shortly.
          </p>
          <p className="text-center">
            If you have any questions, please contact us at{" "}
            <a
              className="text-indigo-500"
              href="mailto:support@example.com?subject=About Current Subscription Purchase"
            >
              support@example.com
            </a>
            .
          </p>
          <p className="text-center">
            Please feel free to contact us if you have any questions or
            concerns.
          </p>
          <p className="text-center">Have a nice day!</p>
        </span>
        <div className="text-center mt-4">
          <p className="text-center">
            You will be redirected to dashboard in a few seconds.
          </p>
          <p className="text-center">
            If you are not redirected in a{" "}
            <Countdown date={Date.now() + 8000} renderer={renderer} />, please
            click{" "}
            <Link className="text-indigo-500" to="/">
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
