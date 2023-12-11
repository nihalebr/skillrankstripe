import React, { useState, useEffect, useContext } from "react";
import { CardHeader, Spinner } from "@material-tailwind/react";
import { useCookies } from "react-cookie";
import axios from "axios";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Dashboard = () => {
  const [cookies] = useCookies(["user"]);
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useContext(LoginContext);
  const navigate = useNavigate();

  const addUsage = async () => {
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/usageadd`;
    const { data } = await axios.post(url, {
      token: cookies.jwt,
    });
    console.log(data);
  };
  const managePay = async () => {
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/managepay`;
    const { data } = await axios.post(url, {
      token: cookies.jwt,
    });
    window.location.replace(data.headers.Location);
  };
  useEffect(() => {
    document.title = "SkillRankTest | Dashboard";
    setTimeout(() => {
      if (!cookies.jwt) {
        navigate("/login");
        return;
      }
      setIsLoading(false);
      setLoginState({
        ...loginState,
        isLoggedIn: true,
      });
    }, 1500);
  }, [cookies.jwt, navigate, setLoginState, loginState]);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner className="h-14 w-14" color="blue" />
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          {cookies.subItem ? (
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:flex">
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2"
                    alt="jsx stock"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Subitem : {cookies.subItemId}
                  </Typography>
                  <Typography>
                    Here you add usage to the subscription when you click on
                    create assessment. it increment the value of usage in stripe
                    as well as in db. This is a prototype of stripe payment
                    integrations.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    onClick={addUsage}
                    data-umami-event={cookies.subItemId + " Create Assessment"}
                  >
                    Create Assessment
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1"
                    alt="handing card"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Manage your subscription
                  </Typography>
                  <Typography>
                    Here you can manage your subscription with the stripe.
                    update your subscription, cancel your subscription. pause
                    your subscription & resume your subscription. it will take
                    you to stripe portal.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    onClick={managePay}
                    data-umami-event={
                      cookies.user.customerId + " Manage Payment"
                    }
                  >
                    Manage Payment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div className="text-center">
              <Typography variant="h5">No subscription Id</Typography>
              <Typography variant="subtitle1">
                Go to{" "}
                <Link
                  className="text-blue-700 hover:text-blue-800"
                  to="/subscription"
                >
                  subscription
                </Link>{" "}
                page
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
