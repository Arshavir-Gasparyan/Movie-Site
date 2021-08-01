import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Container, Button } from "@material-ui/core";

const LogIn = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: "10%", fontSize: "25px" }}>
      <h3 style={{ marginLeft: "26%" }}>Registration</h3>
      <Formik
        initialValues={{ firstName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <TextField
              style={{ width: "100%" }}
              id="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
              label="Text"
              variant="outlined"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <TextField
              style={{ width: "100%", marginTop: "20px" }}
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              label="Email Address"
              variant="outlined"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <Button
              style={{ marginTop: "20px", marginLeft: "38%" }}
              type="submit"
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};
export default LogIn;
