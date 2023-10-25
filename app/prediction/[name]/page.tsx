/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const getPridectedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPridectedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

const getPridectedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

type name = {
  params: { name: string };
};
export default async function page({ params }: name) {
  const ageData = getPridectedAge(params.name);
  const countryData = getPridectedCountry(params.name);
  const genderData = getPridectedGender(params.name);

  const [age, country, gender] = await Promise.all([
    ageData,
    countryData,
    genderData,
  ]);
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className="card card-side bg-base-100 shadow-xl max-w-lg">
  <figure><img src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg' alt="spiderman"/></figure>
  <div className="card-body">
    <h2 className="card-title"> Persoanl Info</h2>
    <div>average age : {age?.age}</div>
        <div> country : {country?.country[0]?.country_id}</div>
        <div> gender : {gender?.gender}</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">back to main page</button>
    </div>
  </div>
</div>
    </div>
    
  );
}
