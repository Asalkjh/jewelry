"use client";

import Container from "@/components/Container";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "next";
import { redirect } from "next/navigation";

interface IUser {
  userName: string;
  password: string;
}

interface IData {
  userName: string;
  password: string;
  id: string;
}

function Login() {
  const [user, setUser] = useState({} as IUser);
  const [data, setData] = useState({} as IData);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  

  const handleGetToken = () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
    let lenString = 7;
    let randomstring = ""; 
    for (var i=0; i<lenString; i++) { 
let rnum = Math.floor(Math.random() * characters.length); 
      randomstring += characters.substring(rnum, rnum + 1); 
    
    } 
    Cookies.set("token", randomstring,{expires:7});
    redirect("/cart");
    
    console.log(randomstring)



  }

  
  return (
    
    <div className="w-[100%] mt-5 h-[600px] ">
      <div className="flex justify-around flex-col  w-[30%] mx-auto h-[70%] shadow-2xl rounded-2xl ">
        <h4 className="text-2xl font-bold mx-auto">Login</h4>
        <p className="mx-auto">Hello Welcome</p>
        <input
          onChange={handleChangeInput}
          className="shadow  border-b border-b-sky-700 rounded-2xl px-6 py-2 mx-2.5 "
          type="text"
          name="userName"
          placeholder="name"
        />
        <input
          onChange={handleChangeInput}
          className="shadow  border-b border-b-sky-700 rounded-2xl px-6 py-2 mx-2.5"
          type="password"
          name="password"
          placeholder="password"
        />
        <button
          onClick={handleGetToken}
          className=" shadow border-b border-b-sky-700 rounded-2xl px-6 mx-2.5 py-2 "
        >
          submit
        </button>
      </div>
  
    </div>
   
  );
}

export default Login;
