import React from "react";
import { useFormik } from "formik";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LogIn;
