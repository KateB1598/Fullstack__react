import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const loginFormSchema = z.object({
  username: z
    .string("Maє бути рядок")
    .min("Min value is 4")
    .max("Max value is 6"),
  password: z
    .string("Maє бути рядок")
    .min(4, "Min value is 4")
    .max(6, "Max value is 6"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      username: "Username1",
      password: "123456",
    },
    resolver: zodResolver(loginFormSchema),
  });
  const handleLoginFormSubmit = (data) => console.log("Form submit", data);
  return (
    <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
      <div>
        <input {...register("username")} type="text" placeholder="Username" />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
