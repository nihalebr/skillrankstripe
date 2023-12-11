import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
  Dialog,
} from "@material-tailwind/react";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const [isSigningIn, setSigningInState] = useState(false);
  const [loginState, setLoginState] = useContext(LoginContext);
  const [modelState, setModelState] = useState({ showModel: false });
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "SkillRankTest | Login";
  }, []);

  const signIn = async () => {
    setSigningInState(true);
    if (!email || !pwd) {
      setModelState({
        email: !email ? "Email is required" : "",
        password: !pwd ? "Password is required" : "",
        showModel: true,
      });
      setSigningInState(false);
      return;
    }
    const { data } = await axios.post(
      "https://i56sinnudj.execute-api.us-east-1.amazonaws.com/dev/usertoken",
      {
        customerEmail: email,
        customerPassword: pwd,
      }
    );
    if (data.statusCode !== 200) {
      setSigningInState(false);
      return;
    }
    setCookie("jwt", data.body.token, { sameSite: "none", secure: true });
    setCookie("subitem", data.body.subitem, { sameSite: "none", secure: true });
    setCookie("user", data.body.user, { sameSite: "none", secure: true });
    setSigningInState(false);
    setLoginState({
      ...loginState,
      isLoggedIn: true,
    });
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Dialog open={modelState.showModel}>
        <Dialog.Header>Sign in failed</Dialog.Header>
        <Dialog.Body>
          {modelState.email} {!email && !pwd ? "& " : ""}
          {modelState.password}
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
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you again! Login to Amplify the Hiring Process.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
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
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="on"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <Button
            className="mt-6 bg-blue-700 hover:bg-blue-800"
            fullWidth
            disabled={isSigningIn}
            onClick={signIn}
            data-umami-event="login-submit"
          >
            {isSigningIn ? "Logging in" : "Login"}
            {isSigningIn && <Spinner className="inline-block ml-2" />}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-gray-900 hover:text-blue-700"
              data-umami-event="login-signup-link"
            >
              register
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
