import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
  Dialog,
} from "@material-tailwind/react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { LoginContext } from "../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSigningUp, setSigningUpState] = useState(false);
  const [modelState, setModelState] = useState({
    showModel: false,
    modelMessage: "",
  });
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  const [loginState, setLoginState] = useContext(LoginContext);
  const navigate = useNavigate();

  const signup = async () => {
    setSigningUpState(true);
    if (!name || !pwd || !email) {
      setModelState({
        modelMessage: "Please enter all the fields",
        showModel: true,
      });
      setSigningUpState(false);
      return;
    }
    const { data } = await axios.post(
      "https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/useradd",
      {
        customerName: name,
        customerPassword: pwd,
        customerEmail: email,
      }
    );
    if (data.statusCode === 409) {
      setSigningUpState(false);
      setModelState({
        modelMessage: "user already exists",
        showModel: true,
      });
      return;
    }
    if (data.statusCode !== 200) {
      setSigningUpState(false);
      setModelState({
        modelMessage: "Creation of account failed",
        showModel: true,
      });
      return;
    }
    const expiresTime = new Date(Date.now() + 2 * 60 * 60 * 1000);
    setCookie("jwt", data.body.token, {
      sameSite: "none",
      secure: true,
      expires: expiresTime,
    });
    setCookie(
      "subscription",
      { ...data.body.subscription },
      { sameSite: "none", secure: true }
    );
    setCookie("user", data.body.user, { sameSite: "none", secure: true });
    setCookie("usage", data.body.usage, { sameSite: "none", secure: true });
    setSigningUpState(false);
    setLoginState({
      ...loginState,
      isLoggedIn: true,
    });
    navigate("/");
  };

  useEffect(() => {
    document.title = "SkillRankTest | Signup";
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Dialog open={modelState.showModel}>
        <Dialog.Header>
          <Typography variant="h5">Sign up failed</Typography>
        </Dialog.Header>
        <Dialog.Body>
          <Typography variant="lead">{modelState.modelMessage}</Typography>
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            variant="text"
            color="red"
            onClick={() => setModelState({ ...modelState, showModel: false })}
          >
            Close
          </Button>
        </Dialog.Footer>
      </Dialog>
      <Card color="transparent" shadow={false} className="mx-6">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to Amplify the Hiring.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Jon Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="on"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="on"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              autoComplete="on"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the&nbsp;
                <a
                  href="https://app.skillrank.io/terms"
                  className="font-medium transition-colors text-blue-700 hover:underline hover:decoration-2 hover:text-blue-900 hover:underline-offset-2"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            onChange={(e) => setConsent(e.target.checked)}
          />

          <Button
            className="mt-6 bg-blue-700 hover:bg-blue-800"
            fullWidth
            disabled={!consent || isSigningUp}
            onClick={signup}
          >
            {isSigningUp ? "Signing Up" : "Sign Up"}
            {isSigningUp && <Spinner className="inline-block ml-2" />}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-gray-900 hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
