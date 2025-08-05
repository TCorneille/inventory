import Input from "@components/Input";
import Button from "@components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../context/UsersList";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
   
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {};
    if (!formData.email.includes("@")) {
      formErrors.email = "Invalid Email address";
    }
    if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    }

    const validUser = Users.find(
      (user) =>
        user.email === formData.email &&  formData.password==="password"
    );

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (!validUser) {
      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
      return;
    }
 

    alert("Login Successful!");
    setFormData({ email: "", password: "" });
    navigate("/Dashboard");
    
  };
  

  return (
    <div className="min-h-dvh flex flex-col gap-6 items-center pt-20 justify-center">
      <span className="uppercase text-2xl font-semibold p-2 bg-primaryColor-800 text-white rounded-md">
        Ihuza Inventory
      </span>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          label={"Email"}
          type={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          variant={errors.email ? "danger" : "default"}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          variant={errors.password ? "danger" : "default"}
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password}</p>
        )}

        <Button label={"Log in"} type="submit" className="w-full" />
      </form>
    </div>
  );
};

export default LoginForm;
