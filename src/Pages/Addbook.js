import React from "react";
import { MetaData } from "../Components/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Components/Container";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Addbook = () => {
  const base_url = process.env.REACT_APP_BASE_URI;
  const navigate = useNavigate();
  const categoryArr = ["Comic", "Horror", "Devotional", "Technology"]
  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Please fill the name"),
    category: Yup.string()
      .oneOf(categoryArr, "Please select the category")
      .required("Please select the category"),
  });
  return (
    <>
      <MetaData title="Add-Book" />
      <Container class1={"login-wrapper home-wrapper-2"}>
        <div className="auth-card w-75 mx-auto">
          <h3 className="text-center">Add Book</h3>
          <Formik
            initialValues={{
              name: "",
              category: ""
            }}
            validationSchema={signupSchema}
            onSubmit={(values, { resetForm }) => {
              toast.loading("Please wait", {
                progressClassName: "success-progress-bar",
                toastId: 2,
              });
              const postURL = "https://63cd25fad4d47898e3936ec9.mockapi.io/Library";
              fetch(postURL, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // We should keep the fields consistent for managing this data later
                  bookName: values.name,
                  category: values.category
                }),
              })
                .then((res) => {
                  if (res.statusText === "Created") {
                    resetForm();
                    toast.update(2, {
                      render: "successfully Added",
                      type: "success",
                      hideProgressBar: false,
                      autoClose: 1000,
                      isLoading: false,
                    });
                    navigate("/manage-book");
                  } else {
                    toast.update(2, {
                      render: "Failed to Add",
                      type: "warning",
                      hideProgressBar: false,
                      autoClose: 5000,
                      isLoading: false,
                    });
                  }
                })
                .catch((err) => {
                  toast.update(2, {
                    render: "Failed to fetch",
                    type: "error",
                    hideProgressBar: false,
                    autoClose: 5000,
                    isLoading: false,
                  });
                });
            }}>
            {({ errors, touched }) => (
              <Form className="d-flex flex-column gap-15 py-3">
                <Field
                  type="text"
                  name="name"
                  placeholder="Book Name"
                  className="form-control"
                />
                {touched.name && errors.name ? (
                  <div className="text-danger pt-1 position-relative">
                    <i class="bi bi-info-circle"></i>
                    {` ${errors.name}`}
                  </div>
                ) : null}
                <Field
                  as="select"
                  className="form-select"
                  name="category">
                  <option value="">Category</option>
                  {categoryArr.map((ele, index) => {
                    return (<option value={ele} key={index}>{ele}</option>)
                  })}
                </Field>

                {touched.category && errors.category ? (
                  <div className="text-danger pt-1 position-relative">
                    <i class="bi bi-info-circle"></i>
                    {` ${errors.category}`}
                  </div>
                ) : null}
                <div>
                  <div className="mt-3 d-flex gap-15 justify-content-center align-items-center">
                    <button className="button border-0" type="submit">
                      Add
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};