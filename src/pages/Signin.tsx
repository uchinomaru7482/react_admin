import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { BiWrench } from "react-icons/bi";

type Props = {
  signin: () => void
}

const Signin: React.VFC<Props> = (props) => {
  const navigate = useNavigate();
  const [mailAddress, setMailAddress] = useState("");
  const inputMailAddress = (e: React.ChangeEvent<HTMLInputElement>) => setMailAddress(e.target.value);
  const [password, setPassword] = useState("");
  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const signin = () => {
    if (mailAddress === "admin@example.com" && password === "administrator") {
      props.signin();
      navigate("/dashboard");
    }
  }

  return (
    <>
      <div className="mx-auto">
        <div className="text-center">
          <BiWrench className="inline-block w-16 h-16 pb-5 pr-5" />
          <h2 className="text-4xl text-center text-gray-700 font-medium inline-block pr-5">React Admin</h2>
        </div>
        <div className="bg-white rounded-md shadow-md w-96 p-10 mx-auto">
          <form>
            <div className="mb-5">
              <label className="block text-left text-gray-700">Mail Address</label>
              <input className="form-input" type="email" value={mailAddress} onChange={inputMailAddress} />
            </div>
            <div className="mb-11">
              <label className="block text-left text-gray-700">Password</label>
              <input className="form-input" type="password" value={password} onChange={inputPassword} />
            </div>
            <button className="form-submit w-full" type="submit" onClick={signin}>Signin</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
