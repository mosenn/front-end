import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "نام کاربری شما باید بزرگ تر از 2 باشد")
    .matches(/^[^\s]+$/, "Spaces are not allowed")
    .test("no-spaces", "Spaces are not allowed", (value) => {
      return value;
    }),
});
