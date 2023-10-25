"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inpVal, setInpVal] = useState("");
  const { push } = useRouter();
  const SubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inpVal}`);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div  className="border border-purple-700 p-10 flex flex-col gap-7 w-[500px] rounded items-center max-w-[90%]">
        <h1 className=" font-mono">Enter your Name Please : </h1>
        <form onSubmit={SubmitHandler} className="flex flex-col gap-5 justify-center items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setInpVal(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Predict data</button>
        </form>
      </div>
    </div>
  );
}
