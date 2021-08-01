import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { Container, Button } from "@material-ui/core";
import { initialValues,validationSchema } from "../../helper/validationSchema";
import styles from './LogIn.module.css'

const LogIn = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: "10%", fontSize: "25px" }}>
      <h3 style={{ marginLeft: "26%" }}>Registration</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
             console.log(values)
            resetForm();
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>

            <TextField
              style={{ width: "100%",}}
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              label="Email Address"
              variant="outlined"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
            <TextField
              style={{ width: "100%", marginTop: "20px"}}
              id="password"
              type="text"
              {...formik.getFieldProps("password")}
              label="Password"
              variant="outlined"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={styles.error}>{formik.errors.password}</div>
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
