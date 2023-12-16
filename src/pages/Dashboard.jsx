import React, { useState, useEffect, useContext } from "react";
import { CardHeader, Dialog, Spinner } from "@material-tailwind/react";
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
  const [cookies, setCookie] = useCookies(["user"]);
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useContext(LoginContext);
  const [modelState, setModelState] = useState({
    showModel: false,
    modelMessage: "",
    modelTitle: "",
  });
  const [isButtonDisable, setButtonDisable] = useState(false);
  const [isAddUsage, setIsAddUsage] = useState(false);
  const [isManageProfile, setIsManageProfile] = useState(false);
  const navigate = useNavigate();

  const addUsage = async () => {
    setButtonDisable(true);
    setIsAddUsage(true);
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/usageadd`;
    const { data } = await axios.post(url, {
      token: cookies.jwt,
    });
    console.log(data);
    if (data.statusCode === 429) {
      setModelState({
        showModel: true,
        modelTitle: "Usage Limit Reached",
        modelMessage:
          "You have reached your limit,But you can add more by opting into a addon. it will charge you $2/per additional assignment.",
      });
      return;
    }
    if (data.statusCode !== 200) return;
    setCookie("usage", data.body.usage, { sameSite: "none", secure: true });
    setButtonDisable(false);
  };
  const subAddon = async () => {
    const url = `https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/addon`;
    const { data } = await axios.post(url, {
      token: cookies.jwt,
    });
    console.log(data);
    if (data.statusCode === 503) {
      setModelState({
        showModel: true,
        modelTitle: "Service Unavailable",
        modelMessage:
          "we regret for the inconvenience. At the moment we are unable to process your request. Please try again later.",
      });
      setButtonDisable(false);
      return;
    }
    if (data.statusCode !== 200) return;
    setCookie(
      "subscription",
      { ...cookies.subscription, subitem: data.body.subitem },
      {
        sameSite: "none",
        secure: true,
      }
    );
    const { refreshToken } = await axios.post(
      "https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/refreshToken",
      {
        token: cookies.jwt,
      }
    );
    const expiresTime = new Date(Date.now() + 2 * 60 * 60 * 1000);
    setCookie("jwt", refreshToken.body.token, {
      sameSite: "none",
      secure: true,
      expires: expiresTime,
    });
    setCookie("subscription", refreshToken.body.subscription, {
      sameSite: "none",
      secure: true,
    });
    setCookie("usage", refreshToken.body.usage, {
      sameSite: "none",
      secure: true,
    });
    setModelState({
      showModel: true,
      modelTitle: "Hiring just got amplified",
      modelMessage: "Whooohoo, your addon has been added successfully!",
    });
    setButtonDisable(false);
    return;
  };
  const managePay = async () => {
    setButtonDisable(true);
    setIsManageProfile(true);
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
    <>
      <Dialog open={modelState.showModel}>
        <Dialog.Header>
          <Typography variant="h5">{modelState.modelTitle}</Typography>
        </Dialog.Header>
        <Dialog.Body className="">
          <Typography variant="lead">{modelState.modelMessage}</Typography>
        </Dialog.Body>
        <Dialog.Footer className="space-x-4">
          <Button
            variant="text"
            color="red"
            onClick={() => {
              setModelState({ ...modelState, showModel: false });
              setButtonDisable(false);
            }}
          >
            Close
          </Button>
          {modelState.modelTitle === "Usage Limit Reached" ? (
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                setModelState({ ...modelState, showModel: false });
                subAddon();
              }}
            >
              Subscribe
            </Button>
          ) : (
            <></>
          )}
        </Dialog.Footer>
      </Dialog>
      <div className="flex justify-center items-center min-h-screen mt-20  md:mt-0">
        {isLoading ? (
          <Spinner className="h-14 w-14" color="blue" />
        ) : (
          <div>
            {cookies.subscription?.id ? (
              <>
                <Card className="mt-6 w-96 bg-gray-300">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Assessment Usage : {cookies.usage ? cookies.usage : 0}
                    </Typography>
                  </CardBody>
                </Card>
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 justify-center items-center gap-5 md:flex">
                  <Card className="mt-6 w-96 bg-gray-300">
                    <CardHeader color="blue-gray" className="relative h-44">
                      <img
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2"
                        alt="react development"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Subitem :{" "}
                        {cookies.subscription.subitem
                          ? cookies.subscription.subitem
                          : "N/A"}
                        {/* This is dev use only */}
                      </Typography>
                      <Typography>
                        Here you add usage to the subscription when you click on
                        create assessment. it increment the value of usage in
                        stripe as well as in db. This is a prototype of stripe
                        payment integrations.
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button
                        onClick={addUsage}
                        data-umami-event={" Create Assessment"}
                        disabled={isButtonDisable}
                      >
                        Create Assessment
                        {isAddUsage && (
                          <Spinner
                            size="sm"
                            color="white"
                            className="inline-block ml-2"
                          />
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="mt-6 w-96 bg-gray-300">
                    <CardHeader color="blue-gray" className="relative h-44">
                      <img
                        className="w-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1"
                        alt="card handover"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Manage your stripe Profile
                      </Typography>
                      <Typography>
                        Here you can manage your subscription with the stripe.
                        update your subscription, cancel your subscription.
                        pause your subscription & resume your subscription. it
                        will take you to stripe portal.
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button
                        disabled={isButtonDisable}
                        onClick={managePay}
                        data-umami-event={" Manage Payment"}
                      >
                        Manage Profile
                        {isManageProfile && (
                          <Spinner
                            size="sm"
                            color="white"
                            className="inline-block ml-2"
                          />
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </>
            ) : (
              <div className="text-center">
                <Typography variant="h5">No subscription Id</Typography>
                <Typography variant="small">
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
    </>
  );
};

export default Dashboard;
