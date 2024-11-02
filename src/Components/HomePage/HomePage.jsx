import React from "react";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const HomePage = () => {
    const data = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <Heading
        title="Browes Coffes By Category"
        subtitle="Choice Your desire coffe category to browse throw specific coffes that feet in your test"
      ></Heading>
        <Category category ={data}></Category>
        <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
