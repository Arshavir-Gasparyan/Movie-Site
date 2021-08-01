import * as Yup from "yup";

export const initialValues = { password: "", email: "" }

export const validationSchema = Yup.object({
    password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters,  one uppercase, one number and one special case character"
    ),

    email: Yup.string().email("Invalid email").required("Required"),
  })