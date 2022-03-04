import React from "react";
import { useParams } from "react-router-dom";

const RegionPage = () => {
  const { region } = useParams();
  return (
    <>
      <h1>Welcome</h1>
      <p>This is a {region} page</p>
    </>
  );
};

export default RegionPage;
