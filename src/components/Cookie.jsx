import React, { useState } from "react";
import { useCookies } from "react-cookie";

function Cookie() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("Name", name, {
      path: "/",
      sameSite: "none",
      secure: true,
    });
    setCookie("password", pwd, {
      path: "/",
      sameSite: "none",
      secure: true,
    });
  };
  return (
    <div className="md:mt-20 center mb-5 mx-4">
      <div className="flex items-center justify-center">
        <div className="border py-1 px-3  mt-3 rounded-md">
          <h1>Name of the user:</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h1>Password of the user:</h1>
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <div>
            <button onClick={handle}>Set Cookie</button>{" "}
          </div>
          <br />
          {cookies.Name && (
            <div>
              Name: <p>{cookies.Name}</p>
            </div>
          )}
          {cookies.Password && (
            <div>
              Password: <p>{cookies.Password}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cookie;
