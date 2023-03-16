import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numberic digit.

const usernameRules = /^[a-zA-Z0-9]+$/;

export const schema = yup.object().shape({

  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  username: yup
    .string()
    .min(5)
    .matches(usernameRules, { message: 'Username does not accept space and special characters' })
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
  .string()
  .oneOf([yup.ref('password'), null], "Password does not match")
  .required("Required"),
});