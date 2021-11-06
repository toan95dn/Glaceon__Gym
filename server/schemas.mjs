import yup from "yup";

let userSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email can't be empty"),
  password: yup
    .string()
    .required()
    .min(6, "Password must have at least 6 characters"),
  confirmedPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export { userSchema };
