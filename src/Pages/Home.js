import React, { useEffect, useState } from "react";
import { MetaData } from "../Components/MetaData";
import * as Yup from "yup";
import "../App.css"
import { useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URI;
  const CategorySchema = Yup.object().shape({
    url: Yup.string().required("Please paste the url")
  });


  return (
    <>
      <MetaData title="Home" />
      <div className="card justify-content-center">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-info" onClick={() => navigate(`/add-book`)}>Add Book</button>
          <button class="btn btn-warning" onClick={() => navigate(`/manage-book`)}>Manage Book</button>
        </div>
      </div>
    </>
  );
};
