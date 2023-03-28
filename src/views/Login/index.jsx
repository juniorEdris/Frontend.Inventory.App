import React, { useState } from "react";
import { Button, Input } from "../../components/Inputs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto rounded-md shadow-lg bg-light">
        <form className="px-5 py-3" onSubmit={() => {}}>
          <Input
            type="email"
            name="email"
            handleInput={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            parentClasses="my-2"
            customClasses="w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded focus:outline-none"
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
            customClasses="w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded focus:outline-none"
            placeHolder="Enter your password"
            label="Your Password"
            labelCustomClasses="text-gray-500 text-sm"
          />

          <div className="my-2">
            <Button customClasses="inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-primary-hover focus:outline-none transition ease-in-out duration-150 ">
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
