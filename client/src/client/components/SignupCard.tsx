import { minLength, required } from "zod/mini";
import "../../styling/signupCard.css";
import { useForm } from "react-hook-form";

type userInfo = {
  email: string;
  password: string;
};

const SignupCard = () => {
  const { register, handleSubmit } = useForm<userInfo>();

  const onSubmit = (data: userInfo) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <h1>Welcome to foodie!</h1>
        <h2>Sign up today and start exploring the foodie in you!</h2>
        <div className="cardContainer">
          <h1>Create account!</h1>
          <p>To create an account please input your email and create a password.</p>
          <form className="cardInput" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" {...register("email", { required: "Email is required." })} />
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password required",
                minLength: { value: 8, message: "At least 8 characters" },
              })}
            />
            <button>Submit</button>
          </form>
          <p>
            Already a member <a href="">login here!</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupCard;
