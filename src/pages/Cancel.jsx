import React, { useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Link, useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (!completed) {
      return <span className="text-indigo-500">{zeroPad(seconds)}s</span>;
    } else {
      navigate("/subscription");
    }
  };

  useEffect(() => {
    document.title = "SkillRankTest | Payment Success";
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex items-center justify-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-center mt-4">
          Last Payment has been canceled
        </h1>
        <span className="text-center mt-4">
          <p className="text-center">You can try again in a few minutes.</p>
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
            You will be redirected to subscription page in a few seconds.
          </p>
          <p className="text-center">
            If you are not redirected in a{" "}
            <Countdown date={Date.now() + 8000} renderer={renderer} />, please
            click{" "}
            <Link className="text-indigo-500" to="/subscription">
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
