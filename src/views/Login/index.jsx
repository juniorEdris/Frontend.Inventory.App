import React, { useState } from "react";
import { Button, Input } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import { uuid } from "../../utils";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!!email && !!password) {
      localStorage.setItem("accessToken", `${uuid()}-${email}`);
      navigate("/dashboard", { replace: true });
    } else {
      toast.error("Provide proper credentials!");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto rounded-md shadow-lg bg-light">
        <form className="px-5 py-3" onSubmit={handleLogin}>
          <Input
            type="email"
            name="email"
            handleInput={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            parentClasses="my-2"
            customClasses=""
            placeHolder="Enter your email"
            label="Your Email"
            labelCustomClasses="text-gray-500 text-sm"
          />
          <Input
            type="password"
            name="password"
            handleInput={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            parentClasses="my-2"
            customClasses=""
            placeHolder="Enter your password"
            label="Your Password"
            labelCustomClasses="text-gray-500 text-sm"
          />

          <div className="my-2">
            <Button>Log in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
